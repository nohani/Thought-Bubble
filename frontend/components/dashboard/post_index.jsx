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
    return (
      <div className="index-container">
        <ul>
          { this.props.posts.map(post => {
              return <PostIndexItem
                  post={post}
                  key={post.id}
                  currentUser={this.props.currentUser}
                />
          })}
        </ul>
      </div>
    )
  }
}