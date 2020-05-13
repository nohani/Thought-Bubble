import React from 'react';

export default class ChatForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
      title: '',
      content: '',
      post_type: "chat"
    }

    this.handleClick = this.handleClick.bind(this);
    this.toggleStateBoolean = this.toggleStateBoolean.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillUnmount() {
  //   this.props.clearPostErrors();
  // }


  handleClick(e) {
    e.preventDefault();
    if (this.state.showDropdown === false) {
      this.setState({ showDropdown: true });
    }
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  toggleStateBoolean() {
    if (this.state.showDropdown === true) {
      this.setState({ showDropdown: false });
    }
  }

  handleSubmit() {
    const { content, title, post_type } = this.state
    this.props.createPost({
      title, 
      content,
      post_type
    });

    this.toggleStateBoolean();
  }


  render() {
    return (
      <div className={this.state.showDropdown ? "post-form-container expand-chat" : "post-form-container"}>
        <div onClick={this.handleClick} className="post-bar-icons pbi-chat">
          <i className="far fa-comment-alt"></i>
          <span className="post-bar-text">Chat</span>
        </div>
        <div className={this.state.showDropdown ? "post-form-chat show" : "post-form-chat"}>
          <form>

            <label htmlFor="title">Title</label>
            <input id="title" type="text" value={this.state.title} onChange={this.update('title')} placeholder="Title" />

            <label htmlFor="chat">Chat</label>
            <textarea id="chat" rows="8" value={this.state.content} onChange={this.update('content')} 
              placeholder="Sarah: Hey what's up?&#10;Troy: Nm, U?&#10;Sarah: Bored AF" />

            <div className="form-buttons-chat">
              <button className="form-close-button" onClick={() => this.toggleStateBoolean()}>Close</button>
              <input className="form-post-button" onClick={this.handleSubmit} type="submit" value="Post" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}