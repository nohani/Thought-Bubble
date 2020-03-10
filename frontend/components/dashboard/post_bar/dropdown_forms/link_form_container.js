import { connect } from 'react-redux';
import LinkForm from './link_form';
import { createPost, fetchPosts } from '../../../../actions/post_actions'


const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => dispatch(createPost(post)),
  fetchPosts: () => dispatch(fetchPosts()),
  clearPostErrors: () => dispatch(clearPostErrors())
})

export default connect(null, mapDispatchToProps)(LinkForm)