import { connect } from 'react-redux';
import { fetchPosts, editPost, deletePost } from '../../actions/post_actions';
import SettingsDropdown from './settings_dropdown';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPost: () => dispatch(fetchPosts()),
  editPost: (post) => dispatch(editPost(post)),
  deletePost: (postId) => dispatch(deletePost(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsDropdown);
