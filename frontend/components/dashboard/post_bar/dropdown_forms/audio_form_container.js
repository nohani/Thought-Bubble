import { connect } from 'react-redux';
import AudioForm from './audio_form';
import { createMediaPost, fetchPosts } from '../../../../actions/post_actions'

const mapDispatchToProps = (dispatch) => ({
  createMediaPost: (post) => dispatch(createMediaPost(post)),
  fetchPosts: () => dispatch(fetchPosts())
})

export default connect(null, mapDispatchToProps)(AudioForm);