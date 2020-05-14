import React from 'react';
import PostIndexItemContainer from './post_index_item_container';
import { Link, Route, withRouter } from 'react-router-dom'; 
import { render } from 'react-dom';

export default class PostIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    
<<<<<<< HEAD
    this.props.fetchPosts();

  }

  

=======
    this.props.fetchPosts()

  }

>>>>>>> f55d524dd73b1f5fc03b2d639537fd3698a66b79
  // componentWillUnmount(){
  //   this.props.clearPostErrors();
  // }

  // renderPostErrors(){
  //   return (
  //     <ul className="posts-errors">
  //       {this.props.errors.map((error, i) => {
  //         return <li key={i}>{error}</li>
  //       })}
  //     </ul>
  //   ) 
  // }

  render() {
    return (
      <div className="index-container">
        <ul>
          {/* <li> {this.renderPostErrors()} </li> */}
          {this.props.posts.map(post => {
              return <PostIndexItemContainer
                  user={this.props.users[post.author_id]}
                  post={post}
                  key={post.id}
                />
          })}
        </ul>
      </div>
    )
  }
}