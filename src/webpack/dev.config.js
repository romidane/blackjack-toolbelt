import path from 'path';
import webpack from 'webpack';
import nodemon from 'nodemon';
import blackjackConfig from '../config';


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
            path: path.join(__dirname, '../dist'),
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
                    test: /\.scss$/,
                    loaders: [
                        'style-loader?singleton',
                        'css-loader?sourceMap',
                        'sass-loader?outputStyle=expanded&sourceMap'
                    ]
                },
                {
                    test: /html5shiv/,
                    loaders: [
                        'file-loader?name=html5shiv.js'
                    ]
                },
                {
                    test: /ecos_surveycode/,
                    loaders: [
                        'file-loader?name=ecos_surveycode.js'
                    ]
                },
                {
                    test: /\.js$|.jsx$/,
                    include: [
                        path.resolve(__dirname, 'src')
                    ],
                    loaders: [
                        'react-hot-loader',
                        'babel-loader'
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['', '.js', '.jsx'],
            modulesDirectories: ['node_modules', 'src']
        },
        plugins: [
            new webpack.PrefetchPlugin('react'),

            new webpack.HotModuleReplacementPlugin(),

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