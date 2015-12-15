import express from 'express';
import { compile as sass } from 'component-api/src/compilers/sassCompiler';
import { compile as hbs } from 'component-api/src/compilers/hbsCompiler';
import { compile as jsCompiler } from 'component-api/src/compilers/jsCompiler';
import config from 'component.json';
import fileSelector from 'fileSelector';
import unirest from 'unirest';

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


app.get('/search', (req, res) => {
    const term = req.query.term;

    unirest.get('https://secure.suggest.search.sky.com/tv?term=' + term).headers({'Accept': 'application/json'}).end(function(response) {
        res.send(response.body);
    });
});

app.get('/component/:brand.js', (req, res) => {
    const brand = req.params.brand;

    jsCompiler({file: config.templates[brand].script}).then((jsContent) => {
        res.send(jsContent);
    });
});

app.get('/component/:brand.css', (req, res) => {
    const brand = req.params.brand;

    sass({file: config.templates[brand].style}).then((css) => {
        res.set('Content-type', 'text/css');
        res.send(css);
    });
});

app.listen(process.env.PORT || 3000);
