import React from 'react';
import PostIndexItem from './post_index_item';
import { render } from 'react-dom';

export default class PostIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPosts();
  }

  componentWillUnmount(){
    this.props.clearPostErrors();
  }

  renderPostErrors(){
    return (
      <ul className="posts-errors">
        {this.props.errors.map((error, i) => {
          return <li key={i}>{error}</li>
        })}
      </ul>
    ) 
  }

  render() {
    return (
      <div className="index-container">
        <ul>
          <li> {this.renderPostErrors()} </li>
          { this.props.posts.map(post => {
              return <PostIndexItem
                  user={this.props.users[post.author_id]}
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