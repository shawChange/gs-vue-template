var path = require('path')
var webpack = require('webpack')
var utils = require('./utils')
var config = require('./config');
var vueLoaderConfig = require('./vue-loader.conf');
var sassLintPlugin = require('sasslint-webpack-plugin');
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
  },
  output: {
    path: config.assetsRoot,
    filename: '[name].js',
    publicPath: config.assetsPublicPath

  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src')
    }
  },
  externals: {
    "vue": "Vue" ,
    "vue-router":"VueRouter" ,
    "vuex":'Vuex',
    "axios":"axios",
    "gsum-uikit-vue": "GsumUikit"
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
        test: /\.vue$/,
        loader: 'htmllint-loader',
        exclude: /(node_modules)/,
        query: {
          config: '.htmllintrc', // path to custom config file
          failOnError: false,
          failOnWarning: false,
        }
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
    new sassLintPlugin({
      configFile: '.sass-lint.yml',
      glob: 'src/**/*.s?(a|c)ss'
    }),
    new TransferWebpackPlugin([
      {
        from: './libs',
        to: './libs'
      }
    ])
  ]
};
