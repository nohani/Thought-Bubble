import { RECEIVE_POST_ERRORS, 
  CLEAR_POST_ERRORS, 
  RECEIVE_POST, 
  REMOVE_POST,
  RECEIVE_POSTS } from '../../actions/post_actions'

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POST_ERRORS:
      return action.errors;
    case RECEIVE_POST:
    case REMOVE_POST:
    case RECEIVE_POSTS:
    case CLEAR_POST_ERRORS:
      return [];
    default:
      return state;
  }
}