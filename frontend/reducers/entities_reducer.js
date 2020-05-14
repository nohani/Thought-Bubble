import {combineReducers} from 'redux';
import usersReducer from './session/users_reducer';
import postsReducer from './posts/posts_reducer';
<<<<<<< HEAD
import followsReducer from './follows/followsReducer';

export default combineReducers({
  users: usersReducer,
  posts: postsReducer,
  follows: followsReducer,
=======

export default combineReducers({
  users: usersReducer,
  posts: postsReducer
>>>>>>> f55d524dd73b1f5fc03b2d639537fd3698a66b79
})