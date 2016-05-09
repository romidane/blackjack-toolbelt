import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import logger from '../util/logger';

import {
  BLACKJACK_HOME,
  WORKING_DIR,
  COMPONENT_CONF
} from '../constants';

const SERVER_PORT = process.env.PORT || 3000;
const COMPONENT_CONFIG = require(COMPONENT_CONF);
const BLACKJACK_CONFIG = COMPONENT_CONFIG.blackjack || {};
const PREVIEW_PATH = BLACKJACK_CONFIG.preview;

if (!PREVIEW_PATH) {
  throw new Error('No blackjack.preview setting found in package.json!');
}

const app = express();

app.use(
  webpackMiddleware(
    webpack({
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
            loaders: [
              'style',
              'css',
              `sass?includePaths[]=${BLACKJACK_HOME}/node_modules&includePaths[]=${WORKING_DIR}/node_modules`
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
        new webpack.DefinePlugin({
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
app.set('views', `${BLACKJACK_HOME}/src/preview-server/views`);

app.get('/', (req, res) => {
  res.render('index', { template: '', brand: '', component: '' });
});

logger.info(`Starting server on http://localhost:${SERVER_PORT}`);

app.listen(SERVER_PORT);
