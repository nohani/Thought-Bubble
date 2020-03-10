import { connect } from 'react-redux';
import VideoForm from './video_form';
import { createMediaPost, fetchPosts } from '../../../../actions/post_actions'

const mapDispatchToProps = (dispatch) => ({
  createMediaPost: (post) => dispatch(createMediaPost(post)),
  fetchPosts: () => dispatch(fetchPosts()),
  clearPostErrors: () => dispatch(clearPostErrors())
})

export default connect(null, mapDispatchToProps)(VideoForm)