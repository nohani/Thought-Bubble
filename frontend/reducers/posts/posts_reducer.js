import {
  RECEIVE_POSTS_AND_USERS, 
  RECEIVE_POST, 
  REMOVE_POST } from '../../actions/post_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_POSTS_AND_USERS:
      return Object.assign({}, state, action.payload.posts);
    case RECEIVE_POST:
      return Object.assign({}, state,{ [action.post.id] : action.post } );
    case REMOVE_POST:
      let newState = Object.assign({}, state);
      delete newState[action.postId];
      return newState;
    default:
      return state;

  }
}