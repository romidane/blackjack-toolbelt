import Webpack from 'webpack';
import WebpackServer from 'webpack-dev-server';
import config  from './webpack/config';

const compiler = Webpack(config.webpack);

new WebpackServer(compiler, config.server.options);
