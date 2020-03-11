import { RECEIVE_POSTS_AND_USERS} from '../../actions/post_actions'
import { RECEIVE_CURRENT_USER } from '../../actions/session'

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_POSTS_AND_USERS:
      return Object.assign({}, state, action.payload.users)
    default:
      return state;
  }
}