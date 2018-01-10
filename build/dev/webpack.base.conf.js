var path = require('path')
var webpack = require('webpack')
var utils = require('./utils')
var config = require('./config');
var vueLoaderConfig = require('./vue-loader.conf');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '../..', dir);
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.showEslintErrorsInOverlay
  }
})

module.exports = {
  entry: {
    app: './src/main.js',
    vue: resolve('libs/vue-2.5.13/vue.esm.js'),
    'vue-router': resolve('libs/vue-router-2.8.1/vue-router.esm.js'),
    vuex: resolve('libs/vuex-2.5.0/vuex.esm.js'),
    'gsum-uikit': resolve('libs/gsum-uikit-vue/index.js'),
    axios: resolve('libs/axios-0.17.1/axios.js')
  },
  output: {
    path: config.assetsRoot,
    filename: '[name].js',
    publicPath: config.assetsPublicPath

  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': resolve('libs/vue-2.5.13/vue.esm.js'),
      'vue-router': resolve('libs/vue-router-2.8.1/vue-router.esm.js'),
      'vuex': resolve('libs/vuex-2.5.0/vuex.esm.js'),
      'gsum-uikit': resolve('libs/gsum-uikit-vue/index.js'),
      'axios': resolve('libs/axios-0.17.1/axios.js'),
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      ...(config.useEslint ? [createLintingRule()] : []),
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
        from: './libs/gsum-uikit-vue/theme-default',
        to: './libs/gsum-uikit-vue/theme-default'
      }
    ]),
    new webpack.optimize.CommonsChunkPlugin({
      name: ["axios", "vuex", "gsum-uikit", "vue-router","vue"],
      minChunks: Infinity
    })
  ]
};
