import path from 'path';
import webpack from 'webpack';
import nodemon from 'nodemon';
import blackjackConfig from '../config';
import consts from '../bjconstants';


const WEBPACK_PORT = 3001;

function startWebServer() {
    let server = null;
    return () => {
        if (server) {
            server.restart();
        } else {
            server = nodemon({
                script: path.join(__dirname, '..', 'server'),
                ignore: path.join(__dirname, '..')
            }).once('quit', process.exit);
        }
    };
}

export default {
    server: {
        port: WEBPACK_PORT,
        options: {
            publicPath: '/  /assets/',
            contentBase: '../dist',
            hot: true,
            quiet: false,
            noInfo: false,
            stats: {
                assets: true,
                colors: true,
                version: false,
                hash: false,
                timings: true,
                chunks: false,
                chunkModules: false
            }
        }
    },
    webpack: {
        devtool: 'source-map',
        entry: {
            app: [
                blackjackConfig.example
                // 'webpack/hot/only-dev-server',
                // `webpack-dev-server/client?http://localhost:${WEBPACK_PORT}`
            ]
        },
        output: {
            path: path.join(__dirname, '../../dist'),
            filename: 'bundle.js',
            publicPath: 'http://localhost:3001/watch/assets/'
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
                            require.resolve('babel-preset-stage-0'),
                        ]
                    },
                    include: [
                        consts.BLACKJACK_HOME + '/node_modules',
                        consts.WORKING_DIR + '/node_modules',
                        consts.WORKING_DIR + '/src'
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['', '.js', '.jsx'],
            root: consts.WORKING_DIR + '/src'
        },
        resolveLoader: {
            root: consts.BLACKJACK_HOME + '/node_modules'
        },

        plugins: [
            new webpack.PrefetchPlugin('react'),

            //new webpack.HotModuleReplacementPlugin(),

            // These variables are visible only through the chain of files defined on the entrypoint
            new webpack.DefinePlugin({
                'process.env': {
                    WEBPACK_BUILD: JSON.stringify(true)
                }
            }), function () {
                this.plugin('done', startWebServer());
            }
        ]
    }
};