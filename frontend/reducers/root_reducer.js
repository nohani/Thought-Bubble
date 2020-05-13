import {combineReducers} from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session/session';
import errorsReducer from './errors_reducer';

export default combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  errors: errorsReducer,
})