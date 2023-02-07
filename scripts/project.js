var project_list = undefined;

//Function responsible for 'projects' command
async function projects(...args) {
    this.echo();

    //Empty argument list, show all projects
    if (args.length == 0) {
        this.echo('Ricardo\'s Projects:\n')
        var projs = await get_all_projects();
        for (p in projs) {
            this.echo(projs[p]);
        }
        this.echo();
    } else {

        //Parse arguments
        let i = 0;
        while (i < args.length) {
            switch (args[i]) {
                
                //Show help
                case '-h':
                    this.echo(help('projects'));
                    break;
                
                //Show all projects
                case '-a':
                    this.echo('Ricardo\'s Projects:\n')
                    var projs = await get_all_projects();
                    for (p in projs) {
                        this.echo(projs[p]);
                    }
                    this.echo();
                    break;
                
                //Show project
                case '-p':
                    i++;
                    while(args[i] !== undefined && args[i][0] !== '-'){
                        this.echo(await get_project(args[i]));
                        i++;
                    }
                    i--;
                    break;

                //Unknown argument
                default:
                    this.echo('[Error] Unknown argument \'' + args[i] + '\', type \'projects -h\' for more information.\n');
            }
            i++;
        }
    }
}

//Load projects from JSON hosted on github, only updates once per session
async function update_projects() {
    if (project_list === undefined) {
        project_list = await fetchJSON('https://raw.githubusercontent.com/RicAlvesO/cv-portfolio/master/data/projects.json');
    }
    return project_list;
}

//Get project information
async function get_project(name) {
    //Get projects, updating list if its the first time
    const projs = await update_projects();

    //Check if project exists
    let desired = projs.all.filter(x => x.name === name);
    if (desired.length > 0) {
        return (desired[0].name + '\n' + '-'.repeat(desired[0].name.length) +
            '\nDescription         : ' + desired[0].description +
            '\nLanguage            : ' + desired[0].language +
            '\nLink                : ' + desired[0].url + '\n');
    } else {
        return (name + '\n' + '-'.repeat(name.length) + '\nProject not found\n');
    }
}

//Get all project names
async function get_all_projects() {
    //Get projects, updating list if its the first time
    const projs = await update_projects();

    //Get all project names
    let names = projs.all.map(x => x.name + ' '.repeat(20 - x.name.length) + '- ' + x.description);
    return names;
} 