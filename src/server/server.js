import express from 'express';
import config from '../config';

let app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    const brand = req.query.brand ? req.query.brand : 'base';
    try {
        const data = require(config.templates.base.data);
    }
    catch (e) {
        const data = {}
    }

    hbs({file: fileSelector(brand, 'template'), data: data}).then((template) => {
        res.render('index', {component: template, brand: brand});
    }).catch((err) => {
        console.log(err);
    });
});

app.listen(process.env.PORT || 3000);
