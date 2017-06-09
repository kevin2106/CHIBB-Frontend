import * as types from './Types';
import HomeApi from '../Api/HomeApi';

export function loadHomesSuccess(homes) {
  return {type: types.LOAD_HOME_SUCCESS, homes};
}

export function createHomeSuccess(home) {
  return {type: types.CREATE_HOME_SUCCESS, home};
}

export function deleteCatSuccess(home){
  return {type: types.DELETE_HOME_SUCCESS};
}

export function loadHomes() {
  return function(dispatch) {
    return HomeApi.getAllHomes().then(homes => {
      console.log(homes);
      dispatch(loadHomesSuccess(homes));
    }).catch(error => {
      throw(error);
    });
  };
}
