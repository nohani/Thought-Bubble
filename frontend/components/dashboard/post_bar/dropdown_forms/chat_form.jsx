import React from 'react';

export default class ChatForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
      content: '',
      post_type: "chat"
    }

    this.handleClick = this.handleClick.bind(this);
    this.toggleStateBoolean = this.toggleStateBoolean.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


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
    const { content, post_type } = this.state
    this.props.createPost({
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
          <form onSubmit={this.handleSubmit}>

            <label htmlFor="chat">Chat</label>
            <textarea id="chat" value={this.state.content} onChange={this.update('content')} placeholder="chat" pattern="https://.*" />

            <input type="submit" value="Post" />
          </form>
          <button className="close-button" onClick={() => this.toggleStateBoolean()}>Close</button>
        </div>
      </div>
    )
  }
}