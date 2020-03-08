import React from 'react';

export default ({post, deletePost, editPost, currentUser}) => {

  switch (post.post_type){
    case "text":
      return(
        <li key={post.id}>
          <div className={post.post_type}>
            {currentUser.username}
            {post.id}
            <div className="text-title">{post.title}</div>
            <div className="text-content">{post.content}</div>
          </div>
        </li>
      )
    case "chat":
      return (
        <li key={post.id}>
          <div className={post.post_type}>
            {currentUser.username}
            {post.id}
            <div className="chat-content">{post.content}</div>
          </div>
        </li>
      )
    case "quote":
      return (
        <li key={post.id}>
          <div className={post.post_type}>
            {currentUser.username}
            {post.id}
            <div className="quote-quote">{post.quote}</div>
            <div className="quote-source">{post.source}</div>
          </div>
        </li>
      )
    case "audio":
      return (
        <li key={post.id}>{currentUser.username}{post.id}</li>
      )
    case "video":
      return (
        <li key={post.id}>
          {currentUser.username}
          {post.id}
          <video>
            <source src={post.video_url} />
          </video>
        </li>
      )
    case "link":
      return (
        <li key={post.id}>
          <div className={post.post_type}>
            {currentUser.username}
            {post.id}
            <div className="link-link">{post.link}</div>
          </div>
        </li>
      )
    case "photo":
      return (
        <li key={post.id}>
          <div className={post.post_type}>
            {currentUser.username}
            {post.id}
            <img src={post.image_url} />
          </div>
        </li>
      )
    default:
      return(
      <li key={post.id}>{post.id}</li>
      )
  }
}