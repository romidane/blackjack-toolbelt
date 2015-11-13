'use strict';

require('babel/register')({
    test: 'value',
    ignore: false,
    only: [
        'node_modules/**/*'
    ]
});

var fs = require('fs');
var config = require('component.json');

let jsConcat = () => {
    const files = config.templates.base.scripts;

    const jsContent = files.map((file, index) => {
        return fs.readFileSync(file);
    }).join('\n');

    fs.writeFileSync(config.templates.base.script, jsContent);
}

jsConcat();
