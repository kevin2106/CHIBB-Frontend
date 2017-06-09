import decode from 'jwt-decode';
import { browserHistory } from 'react-router';
import { registerUser, loginUser, logoutUser } from './AuthUtils';
import {cookie} from 'react-cookie';

const ACCESS_TOKEN_KEY = 'accessToken';
const USERNAME_KEY = 'userName';

export function setAccessToken(token){
  console.log(token);
    sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
    //cookie.set(ACCESS_TOKEN_KEY, token);

}

export function setUsername(userName){
  console.log(userName);
  sessionStorage.setItem(USERNAME_KEY, userName);
}
