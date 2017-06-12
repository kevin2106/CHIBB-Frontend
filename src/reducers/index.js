import {combineReducers} from 'redux';
import session from './SessionReducer';
import homes from './HomeReducer';
import sensors from './SensorReducer';

const rootReducer = combineReducers({
  // short hand property names
  homes,
  sensors,
  session
})

export default rootReducer;
