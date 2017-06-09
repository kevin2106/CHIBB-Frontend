var rp = require('request-promise');
var parser = require('json-parser');

const BASE_URL = 'http://85.214.199.246';

class SessionApi {
  static login(creds){
  var options = {
  method: 'POST',
  uri: `${BASE_URL}/TOKEN`,
  form: creds,
  headers: {
    'Content-Type': 'application.x-www-form-urlencoded'
    }
  }
  return rp(options).then(function (response){
    var data = parser.parse(response);
    return data;
    console.log(data);
  }).catch(function(error) {
    var data = parser.parse(error.error);
    return error;
  });
}
}
export default SessionApi;
