import authentication from '../auth/Authentication';
import sessionApi from '../Api/SessionApi';
import * as types from './Types';

const ACCESS_TOKEN_KEY = 'accessToken';
const USERNAME_KEY = 'userName';

export function loginSuccess() {
  return { type: types.LOG_IN_SUCCESS}

}



export function loginUser(data){
  return function(dispatch) {
    console.log(data);
    return sessionApi.login(data).then(response => {
      console.log(response.access_token);
      sessionStorage.setItem(ACCESS_TOKEN_KEY, response.access_token);
      console.log(loginSuccess());
      dispatch(loginSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}

export function logOutUser(){
  authentication.logOut();
  return { type: types.LOG_OUT}
}
