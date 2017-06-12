var rp = require('request-promise');
var parser = require('json-parser');
import React, { Component } from 'react';

const BASE_URL = 'http://85.214.199.246';

// API Connector for Sensor Nodes
class SensorApi {
  static getAllSensors(home) {
    var options = {
    method: 'GET',
    uri: `${BASE_URL}/api/Sensor/GetSensorsWithoutReadings?home=${home}`,
    headers: {
      'Authorization': `Bearer ${sessionStorage.accessToken}`
      }
    }
    return rp(options).then(function (response){
      var data = parser.parse(response);
      return data;
    }).catch(function(error) {
      //var data = parser.parse(error);
      return error;
    });
  }

  static getSensorReadings(home, sensorId) {
    var options = {
    method: 'GET',
    uri: `${BASE_URL}/api/Sensor/GetSensorBySensorId?id=${sensorId}&home=${home}`,
    headers: {
      'Authorization': `Bearer ${sessionStorage.accessToken}`
      }
    }
    return rp(options).then(function(response){
      var data = parser.parse(response);
      return data
    }).catch(function(error) {
      return error;
    });
  }
}
export default SensorApi;
