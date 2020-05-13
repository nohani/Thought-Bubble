import { connect } from 'react-redux';
import { createFollow, deleteFollow } from '../../../actions/follow_actions';
import SuggestedUsers from './suggested_users';
import suggestedSelector from '../../../selectors/suggested_users_selector';
import {fetchUnfollowedUsers} from '../../../actions/follow_actions';
import { fetchPosts } from '../../../actions/post_actions';

const mapStateToProps = (state) => {
  const unfollowedUsers = state.entities.follows.unfollowed ? state.entities.follows.unfollowed.users : {}
  return {
    selectedUsers: suggestedSelector(unfollowedUsers),
    currentUser: state.session.currentUser,
    users: state.entities.users,
  }
}

const mapDispatchToProps = (dispatch) => ({
  createFollow: (userId) => dispatch(createFollow(userId)),
  deleteFollow: (userId) => dispatch(deleteFollow(userId)), 
  fetchUnfollowedUsers: () => dispatch(fetchUnfollowedUsers()),
  fetchPosts: () => dispatch(fetchPosts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SuggestedUsers);
