import { connect } from 'react-redux';
import ChatForm from './chat_form';
import { createPost, fetchPosts } from '../../../../actions/post_actions'


const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => dispatch(createPost(post)),
  fetchPosts: () => dispatch(fetchPosts())
})

export default connect(null, mapDispatchToProps)(ChatForm)