import * as types from '../actions/Types';
import initialState from './initialState';
import {browserHistory} from 'react-router';

export default function homeReducer (state = initialState.homes, action){
  switch(action.type) {
    case types.LOAD_HOME_SUCCESS:
      console.log(action.homes);
    /*case types.CREATE_HOME_SUCCESS:
      browserHistory.push(`/homes/${action.home.name}`)
      return [
        ...state.filter(home => home.name !== action.home.name),
        Object.assign({}, action.home)
      ]
    case types.UPDATE_HOME_SUCCESS:
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
    console.log(state);
      return state
  }

}
