import { connect } from 'react-redux';
import PostEditForm from './post_edit_form';
import { editPost, fetchPosts } from '../../../actions/post_actions';

const mapDispatchToProps = (dispatch) => ({
  editPost: (post) => dispatch(editPost(post)),
  fetchPosts: () => dispatch(fetchPosts()),
  fetchPost: (postId) => dispatch(fetchPost(postId)),
  clearPostErrors: () => dispatch(clearPostErrors())
})

export default connect(null, mapDispatchToProps)(PostEditForm);