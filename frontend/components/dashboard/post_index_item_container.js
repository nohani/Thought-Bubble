import { connect } from 'react-redux';
import { createLike, deleteLike } from '../../actions/like_actions';
import PostIndexItem from './post_index_item';

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.entities.posts),
    users: state.entities.users,
    currentUser: state.session.currentUser,
  }
}

const mapDispatchToProps = (dispatch) => ({
  createLike: (postId) => dispatch(createLike(postId)),
  deleteLike: (postId) => dispatch(deleteLike(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexItem);
