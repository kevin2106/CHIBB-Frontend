import axios from 'axios';
var request = require('request');
var rp = require('request-promise');
import { setAccessToken, setUsername } from './AuthUtils';
var parser = require('json-parser');


const BASE_URL = 'http://85.214.199.246';

export {getSensorTemps};
var header = {

  headers: { "Content-Type": "application/x-www-form-urlencoded"
              }
};

var optionss = {
  url: 'http://localhost:52369',
  headers: {
    'User-Agent': 'request',
    'Content-Type': 'application.x-www-form-urlencoded'
  }
};

var userInfo = {Email: "kappa12312@live.nl", Password: "Kappa123!", ConfirmPassword: "Kappa123!"};

function getSensorTemps() {
  const url = `${BASE_URL}/api/Sensor`;
  return axios.get(url, header).then(response => response.data);
}

/*export function registerUser(data) {
  const url = `${BASE_URL}/api/Account/Register`;
  console.log(data);
  return request.post('http://localhost:52369/api/Account/Register').form(data), function optionalCallback(err, httpResponse, body){
    console.log(err);
  };
}*/

export function registerUser(data){
  var options = {
    method: 'POST',
    uri: `${BASE_URL}/api/Account/Register`,
    form: data,
    headers: {
      'Content-Type': 'application.x-www-form-urlencoded'
    },
    resolveWithFullResponse: true
  };

  return rp(options).then(function (response) {
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });
}

export function loginUser(data){
  var options = {
    method: 'POST',
    uri: `${BASE_URL}/TOKEN`,
    form: data,
    headers: {
      'Content-Type': 'application.x-www-form-urlencoded'
    }
  }
  return rp(options).then(function (response){
    var data = parser.parse(response);
    setAccessToken(data.access_token);
    setUsername(data.userName);
    window.location.href= "/";
    console.log(data);
  }).catch(function(error) {
    var data = parser.parse(error.error);
    console.log(data.error_description);
  });
}

/*function getSensorItems(){
  const url = `${BASE_URL}/api/sensors`;
  return axios.get(url, header).then(response => response.data);
}

function postNewSensor(data){
  const url = `${BASE_URL}/api/Sensor`;
  return axios.post(url, data, header).then(response => response.data);
}
*/
