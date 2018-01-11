import httpService from './httpService'

httpService.post({
  url: 'http://10.203.40.151:8101/api/department/searchDepartment'
}).then(res => console.log(res))
