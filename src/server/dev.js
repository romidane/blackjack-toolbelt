require('babel-register')({
  presets: ['es2015']
});


const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('../webpack/dev.config').default;
const compiler = webpack(config.webpack);
const devServer = new WebpackDevServer(compiler, config.server.options);

devServer.listen(config.server.port, 'localhost', () => {
    console.log('webpack dev server open');
});