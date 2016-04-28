import Express from 'express';
import Webpack from 'webpack';
import WebpackMiddleware from 'webpack-dev-middleware';
import logger from '../util/logger';

import {
  BLACKJACK_HOME,
  WORKING_DIR,
  COMPONENT_CONF
} from '../constants';

const SERVER_PORT = process.env.PORT || 3000;
const COMPONENT_CONFIG = require(COMPONENT_CONF);
const BLACKJACK_CONFIG =  COMPONENT_CONFIG.blackjack || {};
const PREVIEW_PATH =  BLACKJACK_CONFIG.preview;

if(!PREVIEW_PATH){
  throw 'No blackjack.preview setting found in package.json!';
}

const app = Express();

app.use(
  WebpackMiddleware(
    Webpack({
      entry: {
        filename: `${WORKING_DIR}/${PREVIEW_PATH}`
      },
      output: {
          path: '/'
      },
      module: {
          loaders: [
              {
                  test: /\.scss$/,
                  loaders: ['style', 'css', 'sass']
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
          new Webpack.PrefetchPlugin('react'),
          new Webpack.DefinePlugin({
              'process.env.WEBPACK_BUILD': 'true'
          })
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

logger.info(`Starting server on http://localhost:${SERVER_PORT}`)

app.listen(SERVER_PORT);
