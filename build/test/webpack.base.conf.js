var path = require('path')
var utils = require('./utils')
var config = require('./config');
var vueLoaderConfig = require('./vue-loader.conf');

function resolve (dir) {
  return path.join(__dirname, '../..', dir);
}

module.exports = {
  entry: {
    app: './src/main.js',
  },
  output: {
    path: config.assetsRoot,
    filename: '[name].js',
    publicPath: config.assetsPublicPath

  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue': resolve('libs/vue-2.5.13/vue.esm.js'),
      'vuex': resolve('libs/vuex-2.5.0/vuex.esm.js'),
      'axios': resolve('libs/axios-0.17.1/axios.js'),
      'vue-router': resolve('libs/vue-router-2.8.1/vue-router.esm.js'),
      'ELEMENT': resolve('libs/gsum-uikit-vue/index.js'),
      '@': resolve('src')
    }
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
        include: [resolve('src')]
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
  }
};
