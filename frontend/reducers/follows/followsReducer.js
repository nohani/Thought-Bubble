import { RECEIVE_UNFOLLOWED_USERS } from '../../actions/follow_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_UNFOLLOWED_USERS:
      return Object.assign({}, state, { unfollowed: action.users })
    default:
      return state;
  }
}