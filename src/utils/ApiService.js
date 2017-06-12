import axios from 'axios';
var request = require('request');
var rp = require('request-promise');
var parser = require('json-parser');


const BASE_URL = 'http://85.214.199.246';

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
  }).catch(function (error) {
  });
}
