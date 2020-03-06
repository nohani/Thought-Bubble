import React from 'react';

export default class TextForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
      title: "",
      content: "",
      post_type: "text"
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
    const { title, post_type, content } = this.state
    this.props.createPost({
      title, 
      content, 
      post_type
    });
  }


  render() {
    return (
      <div className="post-form-container" >
        <div onClick={this.handleClick} className="post-bar-icons">
          <i className="fas fa-font"></i>
          <span className="post-bar-text">Text</span>
        </div>
        <div className={this.state.showDropdown ? "post-form-text show" : "post-form-text"}>
            <form onSubmit={this.handleSubmit}>

              <label htmlFor="title">Title</label>
              <input id="title" type="text" value={this.state.title} onChange={this.update('title')}/>
              
              <label htmlFor="content">Content</label>
              <textarea id="content" value={this.state.content} onChange={this.update('content')} />

              <input type="submit" value="Post" />
            </form>
            <button className="close-button" onClick={() => this.toggleStateBoolean()}>Close</button>
          </div>
      </div>
    )
  }
}