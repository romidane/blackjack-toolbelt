import express from 'express';
import { compile as sass } from 'component-api/src/compilers/sassCompiler';
import { compile as hbs } from 'component-api/src/compilers/hbsCompiler';
import { compile as jsCompiler } from 'component-api/src/compilers/jsCompiler';
import config from 'component.json';
import fileSelector from 'fileSelector';

let app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    const brand = req.query.brand ? req.query.brand : 'base';
    const dataFile = fileSelector(brand, 'data');
    const data = dataFile ? require(config.templates.base.data) : {};

    hbs({file: fileSelector(brand, 'template'), data: data}).then((template) => {
        res.render('index', {component: template, brand: brand});
    }).catch((err) => {
        console.log(err);
    });
});

app.get('/component/:brand.js', (req, res) => {
    jsCompiler({file: config.templates.base.script}).then((jsContent) => {
        res.send(jsContent);
    });
});

app.get('/component/:brand.css', (req, res) => {
    sass({file: config.templates.base.style}).then((css) => {
        res.set('Content-type', 'text/css');
        res.send(css);
    });
});

app.listen(3000);
