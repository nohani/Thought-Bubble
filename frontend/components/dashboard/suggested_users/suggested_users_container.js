import { connect } from 'react-redux';
import { createFollow, deleteFollow } from '../../../actions/follow_actions';
import SuggestedUsers from './suggested_users';
<<<<<<< HEAD
import suggestedSelector from '../../../selectors/suggested_users_selector';
import {fetchUnfollowedUsers} from '../../../actions/follow_actions';
import { fetchPosts } from '../../../actions/post_actions';

const mapStateToProps = (state) => {
  const unfollowedUsers = state.entities.follows.unfollowed ? state.entities.follows.unfollowed.users : {}
  return {
    selectedUsers: suggestedSelector(unfollowedUsers),
=======
import suggestedSelector from '../../../selectors/suggested_users_selector'
import {fetchAllUsers} from '../../../actions/session'

const mapStateToProps = (state) => {
  return {
    selectedUsers: suggestedSelector(state.entities.users),
>>>>>>> f55d524dd73b1f5fc03b2d639537fd3698a66b79
    currentUser: state.session.currentUser,
    users: state.entities.users,
  }
}

const mapDispatchToProps = (dispatch) => ({
  createFollow: (userId) => dispatch(createFollow(userId)),
  deleteFollow: (userId) => dispatch(deleteFollow(userId)), 
<<<<<<< HEAD
  fetchUnfollowedUsers: () => dispatch(fetchUnfollowedUsers()),
  fetchPosts: () => dispatch(fetchPosts()),
=======
  fetchAllUsers: () => dispatch(fetchAllUsers()),
>>>>>>> f55d524dd73b1f5fc03b2d639537fd3698a66b79
})

export default connect(mapStateToProps, mapDispatchToProps)(SuggestedUsers);
