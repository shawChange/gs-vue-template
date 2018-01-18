var utils = require('../dev/utils')
var config = require('../dev/config');


module.exports = {
  loaders: utils.cssLoaders({
    sourceMap:  config.cssSourceMap,
    extract: false
  })
};
