const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const baseConfig = require('./webpack.vue.js');


module.exports = merge(baseConfig, {
  entry: './apps/test-function/src/app/entry-server.js',

  target: 'node',

  devtool: 'source-map',

  output: {
    path: path.resolve('./apps/test-function/dist/vue/server'),
    libraryTarget: 'commonjs2',
  },

  externals: nodeExternals({
    whitelist: /\.css$/,
  }),

  plugins: [new VueSSRServerPlugin()],
  module: {
    rules: [{
      test: /\.css$/,
      loader: 'css-loader',
      options: {
        modules: {
          localIdentName: '[local]_[hash:base64:8]',
        },
      },
    }],
  },
});
