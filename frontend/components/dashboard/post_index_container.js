import { connect } from 'react-redux';
import { fetchPosts, editPost, deletePost } from '../../actions/post_actions';
import PostIndex from './post_index';

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.entities.posts),
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  editPost: (post) => dispatch(editPost(post)),
  deletePost: (postId) => dispatch(deletePost(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
