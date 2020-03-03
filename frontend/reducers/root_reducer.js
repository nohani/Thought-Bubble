import {combineReducers} from 'redux';
//import entities reducer
import sessionReducer from './session';

export default combineReducers({
  session: sessionReducer,
})