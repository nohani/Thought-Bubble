import React from 'react';

export default class AudioForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
      link: null,
      post_type: "audio"
    }

    this.handleClick = this.handleClick.bind(this);
    this.toggleStateBoolean = this.toggleStateBoolean.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    if (this.state.showDropdown === false) {
      this.setState({ showDropdown: true });
    }
  }

  handleFile(e) {
    this.setState({ link: e.currentTarget.files[0] });
  }

  toggleStateBoolean() {
    if (this.state.showDropdown === true) {
      this.setState({ showDropdown: false });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[post_type]', this.state.post_type);
    formData.append('post[audio]', this.state.link);

    this.props.createMediaPost(formData);
  }


  render() {
    console.log(this.state)
    return (
      <div className="post-form-container" >
        <div onClick={this.handleClick} className="post-bar-icons">
          <i className="fas fa-headphones-alt"></i>
          <span className="post-bar-text">Audio</span>
        </div>
        <div className={this.state.showDropdown ? "post-form-photo show" : "post-form-photo"}>
          <form onSubmit={this.handleSubmit}>

            <label htmlFor="file">File</label>
            <input id="file" type="file" onChange={this.handleFile} />

            <input type="submit" value="Post" />
          </form>
          <button className="close-button" onClick={() => this.toggleStateBoolean()}>Close</button>
        </div>
      </div>
    )
  }
}