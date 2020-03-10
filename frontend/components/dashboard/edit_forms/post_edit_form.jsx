import React from 'react';
import { render } from 'react-dom';

export default class PostEditForm extends React.Component{
  constructor(props){
    super(props);

    const { post } = this.props

    this.state = {
      id: post.id,
      title: post.title,
      content: post.content,
      post_type: post.post_type,
      source: post.source,
      quote: post.quote,
      link: post.link,
    }

    this.update = this.update.bind(this);
    this.handleTextSubmit = this.handleTextSubmit.bind(this);
    this.handleQuoteSubmit = this.handleQuoteSubmit.bind(this);
    this.handleLinkSubmit = this.handleLinkSubmit.bind(this);
    this.handleChatSubmit = this.handleChatSubmit.bind(this);
    this.handleAudioSubmit = this.handleAudioSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  renderTextEdit(){
    return(
      <form>

        <label htmlFor="title">Title</label>
        <input id="title" type="text" value={this.state.title} onChange={this.update('title')} placeholder="Title" />

        <label htmlFor="content">Content</label>
        <textarea rows="6" id="content" value={this.state.content} onChange={this.update('content')} placeholder="Your text here" />
        <div className="edit-form-buttons">

          <button className="form-close-button" onClick={() => this.props.editModeBoolean(false)}>Close</button>
          <input className="form-post-button" type="submit" value="Save" onClick={this.handleTextSubmit} />
        </div>
      </form>
    )
  }

  handleTextSubmit(e) {
    e.preventDefault();
    const { title, post_type, content, id} = this.state
    this.props.editPost({
      id,
      title,
      content,
      post_type
    });
    this.props.editModeBoolean(false);
    // this.props.history.push("/dashboard");
  }

  renderQuoteEdit() {
    return (
      <form>

        <label htmlFor="quote">Quote</label>
        <textarea id="quote" rows="3" value={this.state.quote} onChange={this.update('quote')} placeholder='"Quote"' />
        <span>—</span>
        <label htmlFor="source">Source</label>
        <input type="text" id="source" value={this.state.source} onChange={this.update('source')} placeholder="Source" />

        <div className="edit-form-buttons">
          <button className="form-close-button" onClick={() => this.props.editModeBoolean(false)}>Close</button>
          <input className="form-post-button" type="submit" value="Save" onClick={this.handleQuoteSubmit} />
        </div>
      </form>
    )
  }

  handleQuoteSubmit(e) {
    e.preventDefault();
    const { source, post_type, quote, id } = this.state
    this.props.editPost({
      id,
      quote,
      source,
      post_type
    });
    this.props.editModeBoolean(false);
    // this.props.history.push("/dashboard");
  }

  renderLinkEdit() {
    return (
      <form>

        <label htmlFor="link">Link</label>
        <input type="url" id="link" value={this.state.link} onChange={this.update('link')} placeholder="Type URL here" pattern="https://.*" />

        <div className="edit-form-buttons-2">
          <button className="form-close-button" onClick={() => this.props.editModeBoolean(false)}>Close</button>
          <input className="form-post-button" type="submit" value="Save" onClick={this.handleLinkSubmit} />
        </div>
      </form>
    )
  }

  handleLinkSubmit(e) {
    e.preventDefault();
    const { post_type, link, id } = this.state
    this.props.editPost({
      id,
      link,
      post_type
    });
    this.props.editModeBoolean(false);
    // this.props.history.push("/dashboard");
  }

  renderChatEdit() {
    return (
      <form>

        <label htmlFor="title">Title</label>
        <input id="title" type="text" value={this.state.title} onChange={this.update('title')} placeholder="Title" />

        <label htmlFor="chat">Chat</label>
        <textarea id="chat" rows="8" value={this.state.content} onChange={this.update('content')}
          placeholder="Sarah: Hey what's up?&#10;Troy: Nm, U?&#10;Sarah: Bored AF" />

        <div className="edit-form-buttons">
          <button className="form-close-button" onClick={() => this.props.editModeBoolean(false)}>Close</button>
          <input className="form-post-button" type="submit" value="Save" onClick={this.handleChatSubmit} />
        </div>
      </form>
    )
  }

  handleChatSubmit(e) {
    e.preventDefault();
    const { post_type, title, content, id } = this.state
    this.props.editPost({
      id,
      title,
      content,
      post_type
    });
    this.props.editModeBoolean(false);
    // this.props.history.push("/dashboard");
  }

  renderAudioEdit() {
    return (
      <form>

        <label htmlFor="audio">Audio</label>
        <input type="url" id="audio" value={this.state.link} onChange={this.update('link')} placeholder="Type Audio URL here" pattern="https://.*" />

        <div className="edit-form-buttons-audio">
          <button className="form-close-button" onClick={() => this.props.editModeBoolean(false)}>Close</button>
          <input className="form-post-button" type="submit" value="Save" onClick={this.handleAudioSubmit} />
        </div>
      </form>
    )
  }

  handleAudioSubmit(e) {
    e.preventDefault();
    const { post_type, link, id } = this.state
    this.props.editPost({
      id,
      link,
      post_type
    });
    this.props.editModeBoolean(false);
    // this.props.history.push("/dashboard");
  }



render(){

    switch(`${this.state.post_type}-edit`) {
      case "text-edit":
        return this.renderTextEdit();
      case "quote-edit":
        return this.renderQuoteEdit();
      case "link-edit":
        return this.renderLinkEdit();
      case "chat-edit":
        return this.renderChatEdit();
      case "audio-edit":
        return this.renderAudioEdit();
      default:
        return <h1>NOT RENDERING EDIT FORM!</h1>

    }
  }
} 
