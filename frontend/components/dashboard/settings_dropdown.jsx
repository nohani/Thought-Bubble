import React from 'react';

export default class SettingsDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
    }

    this.ref = React.createRef();
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    // this.toggleStateBoolean = this.toggleStateBoolean.bind(this);
    // this.documentClick = this.documentClick.bind(this);
  }

  // documentClick(e){
  //   const documentClick = function (e){
  //    if (!this.ref.current.contains(e.target)) {
  //       this.setState({ showDropdown: false });
  //      document.removeEventListener("click", documentClick);
  //     }
  //   }
  // }

  // handleClick(e) {
  //   if (this.state.showDropdown === false) {
  //     this.setState({ showDropdown: true });

  //     const documentClick = function (e){
  //       if (!this.ref.current.contains(e.target)) {
  //         this.setState({ showDropdown: false });
  //         document.removeEventListener("click", documentClick);
  //       }
  //     }
  //     document.addEventListener("click", this.documentClick);
  //   }
  // }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showDropdown: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showDropdown: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }

  // toggleStateBoolean() {
  //   if (this.state.showDropdown === true) {
  //     this.setState({ showDropdown: false });
  //   }
  // }

  handleDelete(e) {
    e.preventDefault();
    this.props.deletePost(this.props.post.id);
  }


  render() { 
    return (
      <div className="settings-dd-container" >
        <div onClick={this.showMenu} className="post-index-icons">
          <i className="fas fa-cog"></i>
        </div>
        <div className={this.state.showDropdown ? "settings-dd show" : "settings-dd"} ref={element => {this.dropdownMenu = element}}>
            <div className="sd-item" onClick={() => this.props.editModeBoolean(true)}>Edit</div>
          <form>
            <div className="sd-item" onClick={this.handleDelete}>Delete</div>
          </form>
        </div>
      </div>
    )
  }
}