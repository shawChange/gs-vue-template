var utils = require('./utils')
var config = require('./config');


module.exports = {
  loaders: utils.cssLoaders({
    sourceMap:  config.cssSourceMap,
    extract: false
  })
};
