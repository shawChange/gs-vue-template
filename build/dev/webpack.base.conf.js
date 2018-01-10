var path = require('path')
var webpack = require('webpack')
var utils = require('./utils')
var config = require('./config');
var vueLoaderConfig = require('./vue-loader.conf');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '../..', dir);
}


module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.assetsRoot,
    filename: '[name].js',
    publicPath: config.assetsPublicPath

  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': '../../libs/vue-2.5.13/vue.js',
      'vue-router': '../../libs/vue-router-2.8.1/vue-router.js',
      'vuex': '../../libs/vuex-2.5.0/vuex.esm.js',
      'gsum-uikit': '../../libs/gsum-uikit-vue/index.js',
      'axios': '../../libs/axios-0.17.1/axios.js',
      '@': resolve('src')
    }
  },
  externals:{
    'vue': 'Vue',
    'vue-router': 'VueRouter'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
        {
            test: /\.xlsx$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('excel/[name].[hash:7].[ext]')
            }
        }
    ]
  },
  plugins: [
    new TransferWebpackPlugin([
      {
        from: './libs',
        to: './libs'
      }
    ])
  ]
};
