import { RECEIVE_POSTS_AND_USERS } from '../../actions/post_actions'

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_POSTS_AND_USERS:
      return Object.assign({}, state, action.payload.users)
    default:
      return state;
  }
}