import React from 'react';
import SettingsDropdownContainer from './settings_dropdown_container';

export default ({post, deletePost, editPost, currentUser}) => {
  const settingsIcon = currentUser.id === post.author_id ? <SettingsDropdownContainer post={post} /> : null


  switch (post.post_type){
    case "text":
      return(
        <li key={post.id}>
          <div className={post.post_type}>
            <div className="username">{currentUser.username}</div>
            <div className="text-title">{post.title}</div>
            <div className="text-content">{post.content}</div>
            <div className="pii-bottom">
              <ul>
                <li>{settingsIcon}</li>
              </ul>
            </div>
          </div>
        </li>
      )
    case "chat":
      return (
        <li key={post.id}>
          <div className={post.post_type}>
            <div className="username">{currentUser.username}</div>
            {post.id}
            <div className="chat-title">{post.title}</div>
            <div className="chat-content">{post.content}</div>
            <div className="pii-bottom">
              <ul>
                <li>{settingsIcon}</li>
              </ul>
            </div>
          </div>
        </li>
      )
    case "quote":
      return (
        <li key={post.id}>
          <div className={post.post_type}>
            <div className="username">{currentUser.username}</div>
            <div className="quote-quote">"{post.quote}"</div>
            <span>-</span>
            <div className="quote-source">{post.source}</div>
            <div className="pii-bottom">
              <ul>
                <li>{settingsIcon}</li>
              </ul>
            </div>
          </div>
        </li>
      )
    case "audio":
      return (
        <li key={post.id}>
          <div className="username">{currentUser.username}</div>
          <div className="pii-bottom">
            <ul>
              <li>{settingsIcon}</li>
            </ul>
          </div>
        </li>
      )
    case "video":
      return (
        <li key={post.id}>
          <div className="username">{currentUser.username}</div>
          <video>
            <source src={post.video_url} />
          </video>
          <div className="pii-bottom">
            <ul>
              <li>{settingsIcon}</li>
            </ul>
          </div>
        </li>
      )
    case "link":
      return (
        <li key={post.id}>
          <div className={post.post_type}>
          <div className="username">{currentUser.username}</div>
            <div className="link-link">{post.link}</div>
            <div className="pii-bottom">
              <ul>
                <li>{settingsIcon}</li>
              </ul>
            </div>
          </div>
        </li>
      )
    case "photo":
      return (
        <li key={post.id}>
          <div className={post.post_type}>
            <div className="username">{currentUser.username}</div>
            <img src={post.image_url} />
            <div className="pii-bottom">
              <ul>
                <li>{settingsIcon}</li>
              </ul>
            </div>
          </div>
        </li>
      )
    default:
      return(
      <li key={post.id}>
          <div className="username">{currentUser.username}</div>
          <div className="pii-bottom">
            <ul>
              <li>{settingsIcon}</li>
            </ul>
          </div>
      </li>
      )
  }
}