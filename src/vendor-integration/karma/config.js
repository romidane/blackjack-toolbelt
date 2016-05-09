const path = require('path');
const BLACKJACK_HOME = process.env.BLACKJACK_HOME;
const WORKING_DIR = process.env.WORKING_DIR;

module.exports = function (config) {
  const karmaConf = {
    frameworks: ['jasmine'],
    reporters: ['progress'],
    browsers: ['PhantomJS'],
    files: [
      `${BLACKJACK_HOME}/node_modules/babel-polyfill/dist/polyfill.js`,
      `${WORKING_DIR}/test/**/*.js`
    ],
    preprocessors: {
      'lib/**/*.js': ['babel'],
      'test/**/*.js': ['babel'],
      'test/**/*.spec.js': ['webpack'],
      'src/**/*.js': ['coverage']

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
        preLoaders: [
          {
            test: /\.js$/,
            loader: 'isparta',
            exclude: /(node_modules)/,
            include: [/(src)/, /envConfig.js/]
          }
        ],
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
            test: /\.json$/,
            loader: 'json'
          },
          {
            test: /\.js/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: [
                'react',
                'es2015',
                'stage-0'
              ]
            }
          }
        ]
      },
      resolve: {
        root: [
          path.join(BLACKJACK_HOME, 'node_modules'),
          path.join(WORKING_DIR, 'node_modules'),
          path.join(WORKING_DIR, 'src'),
          path.join(WORKING_DIR, 'test')
        ],
        extensions: ['', '.js']
      },
      externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
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
    concurrency: Infinity,
    reportSlowerThan: 50
  };

  karmaConf.preprocessors[`${WORKING_DIR}/test/**/*.js`] = ['webpack'];
  karmaConf.preprocessors[`${BLACKJACK_HOME}/node_modules/react/react.js`] = ['babel'];
  karmaConf.preprocessors[`${WORKING_DIR}/node_modules/react/react.js`] = ['babel'];

  config.set(karmaConf);
};
