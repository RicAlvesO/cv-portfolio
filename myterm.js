$('body').terminal({
    help:function(...args){
        this.echo(help(...args));
    },
    cv: cv,
    tldr: tldr,
    projects: projects,
    history: history
}, {
    greetings: ' ______     __     ______     ______     ______     _____     ______\n' +
        '/\\  == \\   /\\ \\   /\\  ___\\   /\\  __ \\   /\\  == \\   /\\  __-.  /\\  __ \\\n' +
        '\\ \\  __<   \\ \\ \\  \\ \\ \\____  \\ \\  __ \\  \\ \\  __<   \\ \\ \\/\\ \\ \\ \\ \\/\\ \\\n' +
        ' \\ \\_\\ \\_\\  \\ \\_\\  \\ \\_____\\  \\ \\_\\ \\_\\  \\ \\_\\ \\_\\  \\ \\____-  \\ \\_____\\\n' +
        '  \\/_/ /_/   \\/_/   \\/_____/   \\/_/\\/_/   \\/_/ /_/   \\/____/   \\/_____/\n' +
        ' ______     __         __     __    __   ______     __     ______     ______    ___      ______\n' +
        '/\\  __ \\   /\\ \\       /\\ \\   /\\ \\  / /  /\\  ___\\   /\\ \\   /\\  == \\   /\\  __ \\  /\\  \\    /\\  ___\\\n' +
        '\\ \\ \\/\\ \\  \\ \\ \\____  \\ \\ \\  \\ \\ \\/ /   \\ \\  __\\   \\ \\ \\  \\ \\  __<   \\ \\  __ \\ \\ \\__\\   \\ \\___  \\\n' +
        ' \\ \\_____\\  \\ \\_____\\  \\ \\_\\  \\ \\__/     \\ \\_____\\  \\ \\_\\  \\ \\_\\ \\_\\  \\ \\_\\ \\_\\ \\/__/    \\/\\_____\\\n' +
        '  \\/_____/   \\/_____/   \\/_/   \\/_/       \\/_____/   \\/_/   \\/_/ /_/   \\/_/\\/_/           \\/_____/\n' +
        ' ______   ______     ______     ______   ______   ______     __         __     ______\n' +
        '/\\  == \\ /\\  __ \\   /\\  == \\   /\\__  _\\ /\\  ___\\ /\\  __ \\   /\\ \\       /\\ \\   /\\  __ \\\n' +
        '\\ \\  _-/ \\ \\ \\/\\ \\  \\ \\  __<   \\/_/\\ \\/ \\ \\  __\\ \\ \\ \\/\\ \\  \\ \\ \\____  \\ \\ \\  \\ \\ \\/\\ \\\n' +
        ' \\ \\_\\    \\ \\_____\\  \\ \\_\\ \\_\\    \\ \\_\\  \\ \\_\\    \\ \\_____\\  \\ \\_____\\  \\ \\_\\  \\ \\_____\\\n' +
        '  \\/_/     \\/_____/   \\/_/ /_/     \\/_/   \\/_/     \\/_____/   \\/_____/   \\/_/   \\/_____/\n\n'+
        '[Type \'help\' to get a list pf available commands]\n',
    prompt: '~/Portfolio $ ',
    checkArity: false

});
