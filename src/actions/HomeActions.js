import * as types from './Types';
import HomeApi from '../Api/HomeApi';

//All home actions
export function loadHomesSuccess(homes) {
  return {type: types.LOAD_HOME_SUCCESS, homes};
}

export function createHomeSuccess(home) {
  return {type: types.CREATE_HOME_SUCCESS, home};
}

export function deleteHomeSuccess(home){
  return {type: types.DELETE_HOME_SUCCESS};
}

export function loadHomes() {
  return function(dispatch) {
    return HomeApi.getAllHomes().then(homes => {
      dispatch(loadHomesSuccess(homes));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createHome(home) {
  return function(dispatch) {
    console.log(home);
    return HomeApi.createHome(home).then(responseHome => {
      dispatch(createHomeSuccess(responseHome));
      return responseHome;
    }).catch(error => {
      throw(error);
    });
  };
}
