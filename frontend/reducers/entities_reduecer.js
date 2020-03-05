import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
// import several reducers here in the future

export default combineReducers({
  users: usersReducer,
})