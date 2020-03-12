import React from 'react';
import SettingsDropdownContainer from './settings_dropdown_container';
import PostEditFormContainer from './edit_forms/post_edit_form_container';
import PostMediaEditFormContainer from './edit_forms/post_media_edit_form_container';

export default class PostIndexItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      editMode: false,
    }

    this.editModeBoolean = this.editModeBoolean.bind(this);
  }

  editModeBoolean(boolean){
    this.setState({editMode: boolean})
  }
  
  renderPost(){
    const { post, currentUser, user } = this.props;
    const settingsIcon = currentUser.id === post.author_id ?
      <SettingsDropdownContainer editModeBoolean={this.editModeBoolean} post={post} /> : null

    const likeIcon = post.liked_by_user === true ? 
      <div className="full-heart" onClick={() => this.props.deleteLike(post.id)}><i className="fas fa-heart"></i></div> :
      <div className="post-index-icons empty-heart" onClick={() => this.props.createLike(post.id)}><i className="far fa-heart"></i></div>

    let numLikes;
    if (post.num_likes > 1) {
      numLikes = `${post.num_likes} likes`
    } else if (post.num_likes === 1) {
      numLikes = `${post.num_likes} like`
    } else {
      numLikes = null
    }

    // const numLikes = post.num_likes > 0 ?  `${post.num_likes} likes` : null
    switch (post.post_type) {
      case "text":
        return (
          <li key={post.id}>
            <div className={post.post_type}>
              <div className="username">{user.username}</div>
              <div className="text-title">{post.title}</div>
              <div className="text-content">{post.content}</div>
              <div className="pii-bottom">
                <div className="num-likes">
                  {numLikes}
                </div>
                <ul>
                  <li>{settingsIcon}</li>
                  <li>{likeIcon}</li>
                </ul>
              </div>
            </div>
          </li>
        )
      case "chat":
        return (
          <li key={post.id}>
            <div className={post.post_type}>
              <div className="username">{ user.username }</div>
              <div className="chat-title">{post.title}</div>
              <div className="chat-content">{post.content}</div>
              <div className="pii-bottom">
                <div className="num-likes">
                  {numLikes}
                </div>
                <ul>
                  <li>{settingsIcon}</li>
                  <li>{likeIcon}</li>
                </ul>
              </div>
            </div>
          </li>
        )
      case "quote":
        return (
          <li key={post.id}>
            <div className={post.post_type}>
              <div className="username">{user.username}</div>
              <div className="quote-quote">"{post.quote}"</div>
              <span>-</span>
              <div className="quote-source">{post.source}</div>
              <div className="pii-bottom">
                <div className="num-likes">
                  {numLikes}
                </div>
                <ul>
                  <li>{settingsIcon}</li>
                  <li>{likeIcon}</li>
                </ul>
              </div>
            </div>
          </li>
        )
      case "audio":
        return (
          <li key={post.id}>
            <div className={post.post_type}>
              <div className="username">{user.username}</div>
              <div className="audio-text">Listen to this:</div>
              <div className="audio-link"><a href={`https://${post.link}`} target="_blank">{post.link}</a></div>
              <div className="pii-bottom">
                <div className="num-likes">
                  {numLikes}
                </div>
                <ul>
                  <li>{settingsIcon}</li>
                  <li>{likeIcon}</li>
                </ul>
              </div>
            </div>
          </li>
        )
      case "video":
        return (
          <li key={post.id}>
            <div className={post.post_type}>
              <div className="username">{user.username}</div>
              <video controls>
                <source src={`${post.video_url}`} />
              </video>
              <div className="pii-bottom">
                <div className="num-likes">
                  {numLikes}
                </div>
                <ul>
                  <li>{settingsIcon}</li>
                  <li>{likeIcon}</li>
                </ul>
              </div>
            </div>
          </li>
        )
      case "link":
        return (
          <li key={post.id}>
            <div className={post.post_type}>
              <div className="username">{user.username}</div>
              <div className="link-link"><a href={`https://${post.link}`} target="_blank">{post.link}</a></div>
              <div className="pii-bottom">
                <div className="num-likes">
                  {numLikes}
                </div>
                <ul>
                  <li>{settingsIcon}</li>
                  <li>{likeIcon}</li>
                </ul>
              </div>
            </div>
          </li>
        )
      case "photo":
        return (
          <li key={post.id}>
            <div className={post.post_type}>
              <div className="username">{user.username}</div>
              <img src={post.image_url} />
              <div className="pii-bottom">
                <div className="num-likes">
                  {numLikes}
                </div>
                <ul>
                  <li>{settingsIcon}</li>
                  <li>{likeIcon}</li>
                </ul>
              </div>
            </div>
          </li>
        )
      default:
        return (
          <li key={post.id}>
            <div className="username">{user.username}</div>
            <div className="pii-bottom">
              <div className="num-likes">
                {numLikes}
              </div>
              <ul>
                <li>{settingsIcon}</li>
                <li>{likeIcon}</li>
              </ul>
            </div>
          </li>
        )
    }
  }

  renderEditForm(){
    const { post } = this.props;

      switch(post.post_type){
        case "photo":
        case "video":
          return (
          <li key={post.id}>
              <div className={`${post.post_type}-edit`}>
              <PostMediaEditFormContainer post={post} editModeBoolean={this.editModeBoolean} />
            </div>
          </li>
          )
        default:
          return(
          <li key={post.id}>
              <div className={`${post.post_type}-edit`}>
              <PostEditFormContainer post={post} editModeBoolean={this.editModeBoolean}/>
            </div>
          </li>
          )
    }
  }

  render() {

      if (this.state.editMode === true){
        return this.renderEditForm();
      } else {
        return this.renderPost();
      }
   } 
}