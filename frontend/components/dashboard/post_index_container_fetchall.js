import { connect } from 'react-redux';
import { fetchPosts, editPost, deletePost, clearPostErrors } from '../../actions/post_actions';
import { fetchAllUsers } from '../../actions/session';
import { Link, Route, withRouter } from 'react-router-dom'
import PostIndex from './post_index';

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.entities.posts),
    users: state.entities.users,
    currentUser: state.session.currentUser,
    errors: state.errors.posts,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  // editPost: (post) => dispatch(editPost(post)),
  // deletePost: (postId) => dispatch(deletePost(postId)),
  clearPostErrors: () => dispatch(clearPostErrors()),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
