var rp = require('request-promise');
var parser = require('json-parser');
import React, { Component } from 'react';

const BASE_URL = 'http://85.214.199.246';

class HomeApi {

  static requestHeaders() {
    return {'Authorization': `Bearer ${sessionStorage.accessToken}`}
  }

  static getAllHomes() {
    const headers = this.requestHeaders();
    var options = {
    method: 'GET',
    uri: `${BASE_URL}/api/Home`,
    headers: {
      'Authorization': `Bearer ${sessionStorage.accessToken}`
      }
    }
    return rp(options).then(function (response){
      var data = parser.parse(response);
      return data;
    }).catch(function(error) {
      console.log(options);
      console.log(error);
      //var data = parser.parse(error);
      return error;
    });
  }
  }
  export default HomeApi;
