import React from 'react';

export default class SettingsDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
    }

    this.ref = React.createRef();
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleStateBoolean = this.toggleStateBoolean.bind(this);
  }

  handleClick(e) {
    if (this.state.showDropdown === false) {
      this.setState({ showDropdown: true });

      const documentClick = (e) => {
        if (!this.ref.current.contains(e.target)) {
          this.setState({ showDropdown: false });
          document.removeEventListener("click", documentClick);
        }
      }
      document.addEventListener("click", documentClick);
    }
  }

  toggleStateBoolean() {
    if (this.state.showDropdown === true) {
      this.setState({ showDropdown: false });
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deletePost(this.props.post.id);
  }


  render() { 
    return (
      <div className="settings-dd-container" >
        <div onClick={this.handleClick} className="post-index-icons">
          <i className="fas fa-cog"></i>
        </div>
        <div className={this.state.showDropdown ? "settings-dd show" : "settings-dd"} ref={this.ref}>
            <div className="sd-item">Edit</div>
          <form>
            <div className="sd-item" onClick={this.handleDelete}>Delete</div>
          </form>
        </div>
      </div>
    )
  }
}