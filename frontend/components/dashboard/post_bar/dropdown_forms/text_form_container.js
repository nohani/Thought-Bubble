import { connect } from 'react-redux';
import TextForm from './text_form';
import { createPost, fetchPosts } from '../../../../actions/post_actions'

// const mapStateToProps = (state, ownProps) => ({
//   ownProps: ownProps
// })

const mapDispatchToProps = (dispatch, ownProps) => ({
  createPost: (post) => dispatch(createPost(post)),
  fetchPosts: () => dispatch(fetchPosts())
})

export default connect(null, mapDispatchToProps)(TextForm)