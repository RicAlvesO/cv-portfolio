//Fetch JSON from URL
async function fetchJSON(url) {
    const response = await fetch(url);
    return response.json();
}

//Help function
function help(...args) {
    var output = '';
    if (args.length == 0) {
        output+='\nCommands:\n\n' +
                'help [commands]     - shows this message, if commmands are provided shows specific information on that command\n'+
                'projects [options]  - shows information on projects developed\n'+
                'history [options]   - shows information on school/career history\n'+
                'cv                  - shows the Curriculum Vitae pdf in a new window\n'+
                'tldr                - shows brief summary about me';
    } else {
        i=0;
        while(i<args.length){
            switch (args[i]) {
                case 'projects':
                    output+='\nUsage: projects [options]\n\n' +
                            'Options:\n' +
                            '-h                  - shows this message\n' +
                            '-a                  - shows all projects\n' +
                            '-p [projects]       - shows the information on the projects with the names provided\n';
                    break;
                case 'history':
                    output += '\nUsage: history [options]\n\n' +
                        'Options:\n' +
                        '-h                  - shows this message\n' +
                        '-a                  - shows all history entries\n' +
                        '-t <type>           - shows the history entries of certain <type>\n';
                    break;
                default:
                    output +='\n[Error] Unknown command \'' + args[i] + '\', type \'help\' for more information on available commands.\n';
            }
            i++;
        }
    }
    return output;
}

function cv(){
    window.open('https://raw.githubusercontent.com/RicAlvesO/cv-portfolio/master/cv.pdf','_blank');
}

function tldr(){
    return 'I am a Computer Science student at the University of Minho, currently in my 3rd year. I am interested in security, machine learning and data science.';
}