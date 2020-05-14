import {combineReducers} from 'redux';
import usersReducer from './session/users_reducer';
import postsReducer from './posts/posts_reducer';
import followsReducer from './follows/followsReducer';

export default combineReducers({
  users: usersReducer,
  posts: postsReducer,
  follows: followsReducer,
})