'use strict';

require('babel/register')({
    ignore: false
});

var fs = require('fs');
var config = require('component.json');
var fileSelector = require('./fileSelector');
var Handlebars = require('handlebars');
var brand = 'base';

const createFixture = () => {
    const template = fs.readFileSync(fileSelector(brand, 'template'), 'utf8');
    const data = fs.readFileSync(fileSelector(brand, 'data'), 'utf8');
    const content = Handlebars.compile(template)(data);

    fs.writeFileSync(`test/fixtures/${brand}.html`, content);
}

createFixture();
