import {combineReducers} from 'redux';
import usersReducer from './session/users_reducer';
import postsReducer from './posts/posts_reducer';

export default combineReducers({
  users: usersReducer,
  posts: postsReducer
})