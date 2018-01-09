//nginx 代理地址
var prefix = 'http://10.201.81.83:85';

var navUrls = require('./online.navUrls');

var newPreFix = 'http://jm-in.pub.internal.gridsumdissector.com';


var clientConfigs = {
    urlPrefix: {

        //用户中心
        userCenter: newPreFix + '/package/user_center',
        //案件中心
        caseCenter: newPreFix + '/package/case_center',
        //证据中心
        evidenceCenter: newPreFix +'/package/material_center',
        //文件中心
        fileCenter: newPreFix  + '/package/file_center',
        //资源预约
        courtReserve: newPreFix + '/package/resource_reservation',
        //消息中心
        messageCenter: newPreFix + '/package/notice_center',
        // 网上立案
        onlineRegister:newPreFix + "/package/case_register_outside",
        //远程立案
        remoteFiling:newPreFix + '/package/case_register_outside',

        // 审流立案
        windowCase:newPreFix + '/package/case_register_inside',
        //支付接口
        pay:newPreFix + "/package/case_register_outside",



        //远程排期
        remoteReserve:  'http://ecourt.gridsumdissector.com:8088/remoteplanOnline/' + 'v1',

        //庭审语音
        remoteTrailRecord: 'http://ecourt.gridsumdissector.com:8088/remotetrialrecordOnline/' +'v1',



        //数据字典
        dataDirectionary: newPreFix+'/package/data_dictionary',

        //知识库
        knowledgeBase: 'http://api.ipslaw.cn'
    },
    systemPrivilegeConfig: {
        systemId: "evidenceSystem",
        ticketName: "evidenceSystemTicket",
        routePrivilege: {
            "court": "30",
            "boardroom": "40",
            "schedule": "50",
            "newTrial": "41"
        },
        operatePrivilege: {
            "31": "新增法庭",
            "32": "编辑法庭",
            "33": "删除法庭",
            "34": "搜索法庭",
            "41": "新增会议室",
            "42": "编辑会议室",
            "43": "删除会议室",
            "44": "搜索会议室",
            "51": "排期搜索",
            "52": "新增会议",
            "53": "编辑会议",
            "54": "删除会议"
        }
    },
    navUrls: navUrls
};
module.exports = '(function (eCourtApp) {  var configs = ' + JSON.stringify(clientConfigs) + '; eCourtApp.configs = configs; window.eCourtApp = eCourtApp;})(window.eCourtApp||{});';
