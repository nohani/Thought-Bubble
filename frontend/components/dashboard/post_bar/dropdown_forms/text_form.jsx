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

  handleSubmit(e) {
    e.preventDefault();
    const { title, post_type, content } = this.state
    this.props.createPost({
      title, 
      content, 
      post_type
    });
    this.toggleStateBoolean();
    // this.props.history.push("/dashboard");
  }


  render() {
    return (
      <div className={this.state.showDropdown ? "post-form-container expand-text" : "post-show-container"} >
        <div onClick={this.handleClick} className="post-bar-icons pbi-text">
          <i className="fas fa-font"></i>
          <span className="post-bar-text">Text</span>
        </div>
        <div className={this.state.showDropdown ? "post-form-text show" : "post-form-text"}>
            <form>

              <label htmlFor="title">Title</label>
              <input id="title" type="text" value={this.state.title} onChange={this.update('title')} placeholder="Title"/>
              
              <label htmlFor="content">Content</label>
              <textarea rows="6" id="content" value={this.state.content} onChange={this.update('content')} placeholder="Your text here"/>
              <div className="form-buttons-text">
                
                <button className="form-close-button" onClick={() => this.toggleStateBoolean()}>Close</button>
              <input className="form-post-button" type="submit" value="Post" onClick={this.handleSubmit} />
              </div>
            </form>
          </div>
      </div>
    )
  }
}