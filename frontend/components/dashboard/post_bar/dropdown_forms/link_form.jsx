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
    const { link, post_type } = this.state
    this.props.createPost({
      link,
      post_type
    });
    this.toggleStateBoolean();
  }


  render() {
    return (
      <div className={this.state.showDropdown ? "post-form-container expand-link" : "post-show-container"} >
        <div onClick={this.handleClick} className="post-bar-icons pbi-link">
          <i className="fas fa-link"></i>
          <span className="post-bar-text">Link</span>
        </div>
        <div className={this.state.showDropdown ? "post-form-link show" : "post-form-link"}>
          <form>

            <label htmlFor="link">Link</label>
            <input type="url" id="link" value={this.state.link} onChange={this.update('link')} placeholder="Type URL here" pattern="https://.*"/>

            <div className="form-buttons-link">
              <button className="form-close-button" onClick={() => this.toggleStateBoolean()}>Close</button>
              <input className="form-post-button" type="submit" value="Post" onClick={this.handleSubmit} />
            </div>
          </form>
        </div>
      </div>
    )
  }
}