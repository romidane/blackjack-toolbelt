import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config  from 'webpack/dev.config';

const compiler = webpack(config.webpack);
const devServer = new WebpackDevServer(compiler, config.server.options);

// devServer.listen(config.server.port, 'localhost', () => {
//     console.log('webpack dev server open');
// });

