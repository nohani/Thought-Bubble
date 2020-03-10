import { connect } from 'react-redux';
import AudioForm from './audio_form';
import { createPost, fetchPosts } from '../../../../actions/post_actions'

const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => dispatch(createPost(post)),
  fetchPosts: () => dispatch(fetchPosts())
})

export default connect(null, mapDispatchToProps)(AudioForm);