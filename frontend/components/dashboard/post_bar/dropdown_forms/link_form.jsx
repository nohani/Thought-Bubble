import React from 'react';

export default class LinkForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
      link: '',
      post_type: "link"
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
    const { link, post_type } = this.state
    this.props.createPost({
      link,
      post_type
    });
  }


  render() {
    return (
      <div className="post-form-container" >
        <div onClick={this.handleClick} className="post-bar-icons">
          <i className="fas fa-link"></i>
          <span className="post-bar-link">Link</span>
        </div>
        <div className={this.state.showDropdown ? "post-form-link show" : "post-form-link"}>
          <form onSubmit={this.handleSubmit}>

            <label htmlFor="link">Link</label>
            <input type="url" id="link" value={this.state.link} onChange={this.update('link')} placeholder="Link" pattern="https://.*"/>

            <input type="submit" value="Post" />
          </form>
          <button className="close-button" onClick={() => this.toggleStateBoolean()}>Close</button>
        </div>
      </div>
    )
  }
}