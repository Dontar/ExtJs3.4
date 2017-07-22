var webpack = require("webpack");
var path = require("path");

var buildPath = path.resolve(__dirname, 'dist');
var isProd = process.argv.indexOf('-p') !== -1;

var config = [{
    entry: "./webpack/index.js",
    output: {
        library: "Ext",
        libraryTarget: "umd",
        path: buildPath,
        filename: isProd ? "index.js" : "index.dev.js"
    },
    devtool: "source-map"
}, {
    entry: {
        "theme-blue": "./webpack/theme-blue.js",
        "theme-gray": "./webpack/theme-gray.js",
        "ux-style": "./webpack/ux-style.js"
    },
    devtool: "source-map",
    output: {
        path: buildPath,
        filename: isProd ? "[name].js" : "[name].dev.js"
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.(png|jpg|gif)$/, use: ["url-loader"] },
            { test: /\.css$/, use: ["style-loader", "css-loader"] }
        ]
    }
}]

module.exports = config;