import { connect } from 'react-redux';
import { fetchPosts, clearPostErrors } from '../../actions/post_actions';
import { fetchAllUsers } from '../../actions/session';
import { fetchLikedPosts } from '../../actions/post_actions';
import { Link, Route, withRouter } from 'react-router-dom'
import PostIndex from './post_index';
import likedPostsSelector from '../../selectors/selector_liked_posts';

const mapStateToProps = (state) => {
  return {
    posts: likedPostsSelector(state.entities.posts, state.entities.users, state.session.currentUser),
    users: state.entities.users,
    currentUser: state.session.currentUser,
    errors: state.errors.posts,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchLikedPosts()),
  clearPostErrors: () => dispatch(clearPostErrors()),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
