import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';

import {
  BLACKJACK_HOME,
  WORKING_DIR,
  COMPONENT_CONF
} from '../constants';

const componentConfig = require(COMPONENT_CONF);
const previewPath =  componentConfig.blackjack.preview;

if(!previewPath){
  throw 'No blackjack.preview setting found in package.json!';
}

const app = express();

app.use(
  webpackMiddleware(
    webpack({
      entry: {
        filename: `${WORKING_DIR}/${previewPath}`
      },
      output: {
          path: '/'
      },
      module: {
          loaders: [
              {
                  test: /\.css$/,
                  loaders: [
                      'style-loader',
                      'css-loader?sourceMap'
                  ]
              },
              {
                  test: /\.js$|.jsx$/,
                  loader: 'babel-loader',
                  query: {
                      presets: [
                          require.resolve('babel-preset-es2015'),
                          require.resolve('babel-preset-react'),
                          require.resolve('babel-preset-stage-0')
                      ]
                  },
                  include: [
                      `${BLACKJACK_HOME}/node_modules`,
                      `${WORKING_DIR}/node_modules`,
                      `${WORKING_DIR}/src`
                  ]
              }
          ]
      },
      resolve: {
          extensions: ['', '.js', '.jsx'],
          root: `${WORKING_DIR}/src`
      },
      resolveLoader: {
          root: `${BLACKJACK_HOME}/node_modules`
      },
      plugins: [
          new webpack.PrefetchPlugin('react'),
      ]
    }), {
      publicPath: '/assets/',
      stats: {
          colors: true
      }
  })
);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {

  res.render('index', { template: '', brand: '', component: '' });

});

app.listen(process.env.PORT || 3000);
