var webpack = require("webpack");
var path = require("path");
var consts = require('../bjconstants');


module.exports = function(config) {
  var karmaConf = {
    basePath: consts.WORKING_DIR,
    frameworks: ['jasmine'],
    files: [
        consts.BLACKJACK_HOME + '/node_modules/babel-polyfill/dist/polyfill.js',
        consts.BLACKJACK_HOME + '/src/testing/bootstrap.js',
        consts.WORKING_DIR + '/tests/**/*.js'
    ],
    preprocessors: {},
    webpack: {
        context: consts.WORKING_DIR,
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
        resolveLoader: {
          root: path.join(consts.BLACKJACK_HOME, 'node_modules')
        },
        devtool: 'inline-source-map',
        watch: true,
        // plugins: [
        //     new webpack.ProvidePlugin({
        //         'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        //     })
        // ]
        // resolve: {
        //     alias: {
        //         'isomorphic-fetch': 'fetch-mock-forwarder'
        //     }
        // }
    },

    webpackServer: {
        noInfo: true
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  };
  karmaConf.preprocessors[consts.BLACKJACK_HOME + '/src/testing/bootstrap.js'] = ['webpack'];
  karmaConf.preprocessors[consts.WORKING_DIR + '/tests/**/*.js'] = ['webpack'];
  config.set(karmaConf);
}