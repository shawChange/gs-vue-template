var utils = require('./utils')
var config = require('./config');

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: config.productionSourceMap,
    extract: true
  })
}
