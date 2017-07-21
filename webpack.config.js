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
    }

}, {
    entry: "./webpack/theme-blue.js",
    output: {
        path: buildPath,
        filename: isProd ? "theme-blue.js" : "theme-blue.dev.js"
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.(png|jpg|gif)$/, use: ["url-loader"] },
            { test: /\.css$/, use: ["style-loader", "css-loader"] }
        ]
    }
}, {
    entry: "./webpack/theme-gray.js",
    output: {
        path: buildPath,
        filename: isProd ? "theme-gray.js" : "theme-gray.dev.js"
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