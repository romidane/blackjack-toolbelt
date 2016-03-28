var path = require("path");
var webpack = require("webpack");

module.exports = {
    context: __dirname,
    devtool: 'source-map',
    entry: {
        bids:  "./web/static/js/app.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, 'priv', 'static', 'js'),
        filename: "[name]-bundle.js",
        publicPath: "/assets/javascripts",
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
        ]
    },
     plugins: [
         new webpack.optimize.UglifyJsPlugin()
     ]
};