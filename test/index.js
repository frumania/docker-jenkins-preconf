/****START SETTINGS****/
var jenkins_user = "SAP";   //TODO PARAM
var jenkins_password = "SAP";   //TODO PARAM
var baseUrl = 'http://'+jenkins_user+':'+jenkins_password+'@localhost:8080';  //TODO PARAM
/****END SETTINGS****/

var jenkins = require('jenkins')({ baseUrl: baseUrl, crumbIssuer: true });
/* Doc https://github.com/silas/node-jenkins#readme */

jenkins.info(function(err, data) {
    if (err) throw err;
  
    console.log('info', data);
});