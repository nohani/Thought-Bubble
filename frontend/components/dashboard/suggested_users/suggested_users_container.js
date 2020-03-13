import { connect } from 'react-redux';
import { createFollow, deleteFollow } from '../../../actions/follow_actions';
import SuggestedUsers from './suggested_users';
import suggestedSelector from '../../../selectors/suggested_users_selector'
import {fetchAllUsers} from '../../../actions/session'

const mapStateToProps = (state) => {
  return {
    selectedUsers: suggestedSelector(state.entities.users),
    currentUser: state.session.currentUser,
    users: state.entities.users,
  }
}

const mapDispatchToProps = (dispatch) => ({
  createFollow: (userId) => dispatch(createFollow(userId)),
  deleteFollow: (userId) => dispatch(deleteFollow(userId)), 
  fetchAllUsers: () => dispatch(fetchAllUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SuggestedUsers);
