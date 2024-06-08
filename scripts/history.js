var history_list = undefined;

//Function responsible for 'projects' command
async function history(...args) {
    this.echo();

    //Empty argument list, show all projects
    if (args.length == 0) {
        this.echo('Ricardo\'s History:\n')
        var hist = await get_total_history();
        for (p in hist) {
            this.echo(hist[p]);
        }
        this.echo();
    } else {
        //Parse arguments
        let i = 0;
        while (i < args.length) {
            switch (args[i]) {
                
                //Show help
                case '-h':
                    this.echo(help('history'));
                    break;
                
                //Show all projects
                case '-a':
                    this.echo('Ricardo\'s History:\n')
                    var hist = await get_total_history();
                    for (p in hist) {
                        this.echo(hist[p]);
                    }
                    this.echo();
                    break;
                
                //Show project
                case '-t':
                    i++;
                    if (args[i] !== undefined) {
                        this.echo(await get_type_hist(args[i]));
                    }
                    break;

                //Unknown argument
                default:
                    this.echo('[Error] Unknown argument \'' + args[i] + '\', type \'history -h\' for more information.\n');
            }
            i++;
        }
    }
}

//Load history from JSON hosted on github, only updates once per session
async function update_history() {
    if (history_list === undefined) {
        history_list = await fetchJSON('https://raw.githubusercontent.com/RicAlvesO/cv-portfolio/master/data/history.json');
    }
    return history_list;
}

//Get total history
async function get_total_history() {
    //Get list, updating list if its the first time
    const history = await update_history();

    //Get Current 
    hist = [];

    //Get History
    history.current.map(x => hist.push(hist_to_str(x,true)));
    history.history.map(x => hist.push(hist_to_str(x,false)));
    return hist;
}

//Get history of a specific type
async function get_type_hist(type) {
    //Get list, updating list if its the first time
    const history = await update_history();

    //Get Current 
    hist=[];
    history.current.filter(x => x.type===type)
                   .map(y => hist.push(hist_to_str(y,true)));

    //Get History
    history.history.filter(x => x.type===type)
                   .map(y => hist.push(hist_to_str(y,false)));
    return hist;
}

function hist_to_str(hist, cur){
    h='';
    
    h+= hist.name + '\n' +
        '-'.repeat(hist.name.length) +
        '\nLocation            : ' + hist.place +
        '\nType                : ' + hist.type;

    if ('role' in hist){
        h+= '\nRole                : ' + hist.role;
	}    
    if ('details' in hist){
        h+= '\nDetails             : ' + hist.details;
	}    
    if ('tags' in hist){
        h+= '\nTags                : ' + hist.tags;
	}    
    if ('report' in hist){
        h+= '\nReport              : ' + hist.report;
	}    
    if ('mentor' in hist){
        h+= '\nMentor\'s Feedback   : ' + hist.mentor;
	}    
    h+= '\nStart Date          : ' + hist.start.month + ' ' + hist.start.year;
    
    if ('end' in hist){
		if (cur===true){
		    h+= '\nExpected End Date   : ';
		} else {
            h+= '\nEnd Date            : ';
		}
		h+= hist.end.month + ' ' + hist.end.year + '\n';
	}
    return h;
}
