import { connect } from 'react-redux';
import PostMediaEditForm from './post_media_edit_form';
import { editMediaPost, fetchPosts } from '../../../actions/post_actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  editMediaPost: (post) => dispatch(editMediaPost(post, ownProps.post.id)),
  fetchPosts: () => dispatch(fetchPosts()),
  fetchPost: (postId) => dispatch(fetchPost(postId))
})

export default connect(null, mapDispatchToProps)(PostMediaEditForm);