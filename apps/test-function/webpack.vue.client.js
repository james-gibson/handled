import { merge } from 'webpack-merge';

const webpack = require('webpack');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const vueConfig = require("./vue.config");
console.log({vueConfig})
const baseConfig = require('./webpack.vue.js');

const isProduction = process.env.NODE_ENV === 'production';

let config = merge(baseConfig, {
  entry: [`${__dirname}/src/app/entry-client.js`],
  plugins: [new VueSSRClientPlugin()],
  output: {
    path: path.resolve(`${__dirname}/dist/vue/client`),
    filename: '[name].[hash:8].js',
    publicPath: `${vueConfig.publicPath}/`,
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]_[hash:base64:8]',
            },
          },
        },
      ],
    }],
  },
});

if (!isProduction) {
  config = merge(config, {
    output: {
      filename: '[name].js',
      publicPath: `${vueConfig.publicPath}/`,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devtool: 'source-map',
    devServer: {
      writeToDisk: true,
      contentBase: path.resolve(__dirname, './dist/vue/client/'),
      publicPath: 'http://localhost:4200/public',
      hot: true,
      inline: true,
      historyApiFallback: true,
      port: 4200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  });
} else {
  config = merge(config, {
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[hash:8].css',
      }),
    ],
  });
}

console.log(JSON.stringify(config.output));
module.exports = config;
