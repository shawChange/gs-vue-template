
var prefix = '';

// var navUrls = require('./dev.navUrls');

var newPreFix = '';


var clientConfigs = {
    urlPrefix: {


    },

    // navUrls: navUrls
};
module.exports = '(function (eCourtApp) {  var configs = ' + JSON.stringify(clientConfigs) + '; eCourtApp.configs = configs; window.eCourtApp = eCourtApp;})(window.eCourtApp||{});';
