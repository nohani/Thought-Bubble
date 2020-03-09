import React from 'react';

export default class AudioForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
      link: "",
      post_type: "audio"
    }

    this.handleClick = this.handleClick.bind(this);
    this.toggleStateBoolean = this.toggleStateBoolean.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleFile = this.handleFile.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    if (this.state.showDropdown === false) {
      this.setState({ showDropdown: true });
    }
  }

  // handleFile(e) {
  //   this.setState({ link: e.currentTarget.files[0] });
  // }

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
    const formData = new FormData();
    formData.append('post[post_type]', this.state.post_type);
    formData.append('post[audio]', this.state.link);

    this.props.createMediaPost(formData);
    this.toggleStateBoolean();
  }


  render() {
    return (
      <div className={this.state.showDropdown ? "post-form-container expand-audio": "post-form-container" } >
        <div className={this.state.showDropdown ? "dark-background show" : "dark-background"}></div>
        <div onClick={this.handleClick} className="post-bar-icons pbi-audio">
          <i className="fas fa-headphones-alt"></i>
          <span className="post-bar-text">Audio</span>
        </div>
        <div className={this.state.showDropdown ? "post-form-audio show" : "post-form-audio"}>
          <form>
            
            <label htmlFor="audio">Audio</label>
            <input type="url" id="audio" value={this.state.link} onChange={this.update('link')} placeholder="Type Audio URL here" pattern="https://.*" />
            {/* <label htmlFor="file">File</label>
            <input id="file" type="file" onChange={this.handleFile} /> */}

            <div className="form-buttons-audio">
              <button className="form-close-button" onClick={() => this.toggleStateBoolean()}>Close</button>
              <input className="form-post-button" onClick={this.handleSubmit} type="submit" value="Post" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}