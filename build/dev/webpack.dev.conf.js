var utils = require('./utils')
var webpack = require('webpack')
var config = require('./config');
var path = require('path');
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

var clientConfigs = require('../../config/clientConfigs/dev');


var env = {
  NODE_ENV:'"dev"'
};


// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: true,
      clientConfigs:clientConfigs
    }),

    new FriendlyErrorsPlugin()
  ]
});
