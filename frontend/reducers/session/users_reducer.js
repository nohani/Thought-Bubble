<<<<<<< HEAD
import { RECEIVE_POSTS_AND_USERS} from '../../actions/post_actions';
import { RECEIVE_CURRENT_USER, RECEIVE_USER, RECEIVE_USERS  } from '../../actions/session';
import { RECEIVE_UNFOLLOWED_USERS } from '../../actions/follow_actions';
=======
import { RECEIVE_POSTS_AND_USERS} from '../../actions/post_actions'
import { RECEIVE_CURRENT_USER, RECEIVE_USER, RECEIVE_USERS  } from '../../actions/session'

>>>>>>> f55d524dd73b1f5fc03b2d639537fd3698a66b79

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_CURRENT_USER:
    case RECEIVE_USER:
      return Object.assign({}, state, action.user);
    case RECEIVE_USERS:
<<<<<<< HEAD
      return Object.assign({}, state, action.users);
=======
      return Object.assign({}, state, action.users)
>>>>>>> f55d524dd73b1f5fc03b2d639537fd3698a66b79
    case RECEIVE_POSTS_AND_USERS:
      return Object.assign({}, state, action.payload.users);
    default:
      return state;
  }
}