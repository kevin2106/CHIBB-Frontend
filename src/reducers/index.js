import {combineReducers} from 'redux';
import session from './SessionReducer';
import homes from './HomeReducer';

const rootReducer = combineReducers({
  // short hand property names
  homes,
  session
})

export default rootReducer;
