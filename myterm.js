
var projects = undefined;

$('body').terminal({
    help: function () {
        this.echo('\nCommands:\n' +
            'help - show this message\n' +
            'projects <name> - shows all projects or the projects passed as argument in <name>\n');
    },
    projects: async function (...name) {
        this.echo();
        if (name.length == 0) {
            this.echo('Ricardo\'s Projects:\n')
            var projs = await get_all_projects();
            console.log(projs)
            for (p in projs) {
                this.echo('=> ' + projs[p]);
            }
            this.echo();
        } else {
            let i = 0;
            while (i < name.length) {
                this.echo(get_project(name[i]));
                i++;
            }
        }
    }
}, {
    greetings: ' ______     __     ______     ______     ______     _____     ______                                                              \n' +
        '/\\  == \\   /\\ \\   /\\  ___\\   /\\  __ \\   /\\  == \\   /\\  __-.  /\\  __ \\                                                \n' +
        '\\ \\  __<   \\ \\ \\  \\ \\ \\____  \\ \\  __ \\  \\ \\  __<   \\ \\ \\/\\ \\ \\ \\ \\/\\ \\                                     \n' +
        ' \\ \\_\\ \\_\\  \\ \\_\\  \\ \\_____\\  \\ \\_\\ \\_\\  \\ \\_\\ \\_\\  \\ \\____-  \\ \\_____\\                                 \n' +
        '  \\/_/ /_/   \\/_/   \\/_____/   \\/_/\\/_/   \\/_/ /_/   \\/____/   \\/_____/                                                   \n' +
        ' ______     __         __     __    __   ______     __     ______     ______    ___      ______                                    \n' +
        '/\\  __ \\   /\\ \\       /\\ \\   /\\ \\  / /  /\\  ___\\   /\\ \\   /\\  == \\   /\\  __ \\  /\\  \\    /\\  ___\\               \n' +
        '\\ \\ \\/\\ \\  \\ \\ \\____  \\ \\ \\  \\ \\ \\/ /   \\ \\  __\\   \\ \\ \\  \\ \\  __<   \\ \\  __ \\ \\ \\__\\   \\ \\___  \\  \n' +
        ' \\ \\_____\\  \\ \\_____\\  \\ \\_\\  \\ \\__/     \\ \\_____\\  \\ \\_\\  \\ \\_\\ \\_\\  \\ \\_\\ \\_\\ \\/__/    \\/\\_____\\  \n' +
        '  \\/_____/   \\/_____/   \\/_/   \\/_/       \\/_____/   \\/_/   \\/_/ /_/   \\/_/\\/_/           \\/_____/                       \n' +
        ' ______   ______     ______     ______   ______   ______     __         __     ______                                             \n' +
        '/\\  == \\ /\\  __ \\   /\\  == \\   /\\__  _\\ /\\  ___\\ /\\  __ \\   /\\ \\       /\\ \\   /\\  __ \\                          \n' +
        '\\ \\  _-/ \\ \\ \\/\\ \\  \\ \\  __<   \\/_/\\ \\/ \\ \\  __\\ \\ \\ \\/\\ \\  \\ \\ \\____  \\ \\ \\  \\ \\ \\/\\ \\            \n' +
        ' \\ \\_\\    \\ \\_____\\  \\ \\_\\ \\_\\    \\ \\_\\  \\ \\_\\    \\ \\_____\\  \\ \\_____\\  \\ \\_\\  \\ \\_____\\             \n' +
        '  \\/_/     \\/_____/   \\/_/ /_/     \\/_/   \\/_/     \\/_____/   \\/_____/   \\/_/   \\/_____/                                 \n',
    prompt: '~/Portfolio $ ',
    checkArity: false

});

//Fetch JSON from URL
async function fetchJSON(url) {
    const response = await fetch(url);
    return response.json();
}

//Load projects from JSON hosted on github, only updates once per session
async function get_projects() {
    if (projects === undefined) {
        projects = await fetchJSON('https://raw.githubusercontent.com/RicAlvesO/cv-portfolio/master/projects.json');
    }
    return projects;
}

//Get project information
async function get_project(name) {
    //Get projects, updating list if its the first time
    const projs = await get_projects();

    //Check if project exists
    let desired = projs.all.filter(x => x.name === name);
    if (desired.length > 0) {
        return (desired[0].name + '\n' + '-'.repeat(desired[0].name.length) +
            '\nDescription: ' + desired[0].description +
            '\nLanguage: ' + desired[0].language +
            '\nLink: ' + desired[0].url + '\n');
    } else {
        return (name + '\n' + '-'.repeat(name.length) + '\nProject not found\n');
    }
}

//Get all project names
async function get_all_projects() {
    //Get projects, updating list if its the first time
    const projs = await get_projects();

    //Get all project names
    let names = projs.all.map(x => x.name + ': ' + x.description);
    return names;
}
