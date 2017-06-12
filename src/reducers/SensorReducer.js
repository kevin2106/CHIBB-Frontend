import * as types from '../actions/Types';
import initialState from './initialState';
import {browserHistory} from 'react-router';

export default function sensorReducer (state = initialState.sensors, action){
  switch(action.type) {
    case types.LOAD_SENSOR_SUCCESS:
    console.log(action.sensors);
      return Object.assign([], state, action.sensors)

    case types.CREATE_SENSOR_SUCCESS:
      browserHistory.push(`/homes/${action.sensor.name}`)
      return [
        ...state.filter(sensor => sensor.Name !== action.sensor.Name),
        Object.assign({}, action.sensor)
      ]

    /*case types.UPDATE_HOME_SUCCESS:
      return [
        ...state.filter(home => home.name !== action.home.name),
        Object.assign({}, action.home)
      ]
    case types.DELETE_HOME_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfHomeToDelete = state.findIndex(home => {return home.name == action.home.name})
      newState.splice(indexOfHomeToDelete, 1);
      browserHistory.push('/homes');
      return newState;
    }*/
    default:
      return state;
  }

}
