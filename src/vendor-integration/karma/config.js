const path = require("path");
const consts = require('../../constants');

const WORKING_DIR = consts.WORKING_DIR;
const BLACKJACK_HOME = consts.BLACKJACK_HOME;

module.exports = function(config) {
  var karmaConf = {
    frameworks: [ 'jasmine' ],
    reporters: [ 'progress' ],
    browsers: [ 'PhantomJS' ],
    files: [
        BLACKJACK_HOME + '/node_modules/babel-polyfill/dist/polyfill.js',
        BLACKJACK_HOME + '/src/testing/bootstrap.js',
        WORKING_DIR + '/tests/**/*.js'
    ],
    preprocessors: {
      'lib/**/*.js': ['babel'],
      'test/**/*.js': ['babel']
    },
    babelPreprocessor: {
      options: {
        presets: [
          'es2015',
          'react',
          'stage-0'
        ]
      }
    },
    webpack: {
        context: WORKING_DIR,
        module: {
            loaders: [
                {
                  test: /\.js/,
                  exclude: /node_modules/,
                  loader: 'babel-loader',
                  query: {
                    presets: ['react', 'es2015', 'stage-0']
                  }
                }
            ]
        },
        resolve: {
          root: [
            path.join(BLACKJACK_HOME, 'node_modules'),
            path.join(WORKING_DIR, 'node_modules')
          ]
        },
    },
    webpackServer: {
        noInfo: true
    },
    basePath: WORKING_DIR,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    watch: true,
    autoWatch: true,
    singleRun: true,
    concurrency: Infinity
  };

  karmaConf.preprocessors[`${BLACKJACK_HOME}/src/testing/bootstrap.js`] = ['webpack'];
  karmaConf.preprocessors[`${WORKING_DIR}/tests/**/*.js`] = ['webpack'];
  karmaConf.preprocessors[`${BLACKJACK_HOME}/node_modules/react/react.js`] = ['babel'];
  karmaConf.preprocessors[`${WORKING_DIR}/node_modules/react/react.js`] = ['babel'];

  config.set(karmaConf);
}
