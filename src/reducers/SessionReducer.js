import * as types from '../actions/Types';
import initialState from './initialState';
import {browserHistory} from 'react-router';

export default function sessionReducer(state = initialState.session, action) {
  switch(action.type) {
    case types.LOG_IN_SUCCESS:
      browserHistory.push('/homes')
      return !!sessionStorage.accessToken;
    case types.LOG_OUT:
      browserHistory.push('/')
      return !!sessionStorage.accessToken;
    default:
      return state;
  }
}
