import * as types from './Types';
import SensorApi from '../Api/SensorApi';

//All sensor actions
export function loadSensorSuccess(sensors){
  return {type: types.LOAD_SENSOR_SUCCESS, sensors};
}

export function createSensorSuccess(sensor) {
  return {type: types.CREATE_SENSOR_SUCCESS, sensor};
}

export function deleteSensorSuccess(sensor){
  return {type: types.DELETE_SENSOR_SUCCESS};
}

export function getSensors(home) {
  return function(dispatch) {
    return SensorApi.getAllSensors(home).then(sensors => {
      console.log(sensors);
      dispatch(loadSensorSuccess(sensors));
    }).catch(error => {
      throw(error);
    });
  };
  }
