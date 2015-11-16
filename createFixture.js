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
var fileSelector = require('./fileSelector');
var Handlebars = require('handlebars');
var brand = 'base';

const createFixture = () => {
    const template = fs.readFileSync(fileSelector(brand, 'template'));
    const data = fs.readFileSync(fileSelector(brand, 'data'));
    const content = Handlebars.compile(contents)(data);

    fs.writeFileSync(`test/fixtures/${brand}`, content);
}

createFixture();