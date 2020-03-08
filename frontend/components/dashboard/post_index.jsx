import React from 'react';
import PostIndexItem from './post_index_item';

export default class PostIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props.posts);
    return (
      <div className="index-container">
        <ul>
          { this.props.posts.map(post => {
              return <PostIndexItem
                  post={post}
                  key={post.id}
                  deletePost={this.props.deletePost}
                  editPost={this.props.editPost}
                  currentUser={this.props.currentUser}
                />
          })}
        </ul>
      </div>
    )
  }
}