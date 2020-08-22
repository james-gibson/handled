const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const ENV = "development";
const IS_PROD = true; //ENV === "production";
const PLUGINS = IS_PROD ? [] : [new webpack.HotModuleReplacementPlugin(), new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/])];
module.exports = {
    entry: [`${__dirname}/src/index.ts`], //'webpack/hot/poll?100', './src/index.ts'],
    target: 'node',
    externals: [
        nodeExternals({
            allowlist: [],
        }),
    ],
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
              plugins: [
                "@babel/plugin-syntax-dynamic-import"
              ]
            },
            exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
          },
        ],
    },
    mode: ENV,
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: PLUGINS,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: "umd"
    },
};
