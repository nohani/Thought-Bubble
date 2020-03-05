import {combineReducers} from 'redux';
import entitiesReducer from './entities_reduecer';
import sessionReducer from './session';
import errorsReducer from './errors_reducer';

export default combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  errors: errorsReducer,
})