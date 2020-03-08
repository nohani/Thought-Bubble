import React from 'react';

export default class PhotoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
      link: null, 
      post_type: "photo"
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
    formData.append('post[photo]', this.state.link);

    this.props.createMediaPost(formData);
    this.toggleStateBoolean();
  }


  render() {
    return (
      <div className={this.state.showDropdown ? "post-form-container expand-photo" : "post-show-container"} >
        <div onClick={this.handleClick} className="post-bar-icons pbi-photo">
          <i className="fas fa-camera-retro"></i>
          <span className="post-bar-text">Photo</span>
        </div>
        <div className={this.state.showDropdown ? "post-form-photo show" : "post-form-photo"}>
          <form onSubmit={this.handleSubmit}>

            <label htmlFor="file">File</label>
            <input id="file" type="file" onChange={this.handleFile} />
            <div className="form-buttons-photo">
              <input className="form-post-button" type="submit" value="Post" />
              <button className="form-close-button" onClick={() => this.toggleStateBoolean()}>Close</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}