import { combineReducers } from 'redux';
import sessionErrorsReducer from './session/session_errors_reducer'
import postsErrorsReducer from './posts/posts_errors_reducer'

export default combineReducers({
  session: sessionErrorsReducer,
  posts: postsErrorsReducer
})