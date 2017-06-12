import sessionApi from '../Api/SessionApi';
import * as types from './Types';

const ACCESS_TOKEN_KEY = 'accessToken';
const USERNAME_KEY = 'userName';

export function loginSuccess() {
  return { type: types.LOG_IN_SUCCESS}
}

export function registerSuccess() {
  return { type: types.REGISTER_SUCCESS}
}

export function logOut(){
  return { type: types.LOG_OUT}
}

export function loginUser(data){
  return function(dispatch) {
    return sessionApi.login(data).then(response => {
      sessionStorage.setItem(ACCESS_TOKEN_KEY, response.access_token);
      console.log(loginSuccess());
      dispatch(loginSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}

export function registerUser(data){
  return function(dispatch) {
    return sessionApi.registerUser(data).then(response => {
      console.log(response);
      dispatch(registerSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}

export function logOutUser(){
  return function(dispatch) {
    console.log('logout');
    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    dispatch(logOut());
  }
}

export function isLoggedIn(){
  return !!sessionStorage.getItem(ACCESS_TOKEN_KEY);
}
