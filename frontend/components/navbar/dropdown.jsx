import React from 'react';
import { Link, Route } from 'react-router-dom'

export default class Dropdown extends React.Component{
  constructor (props) {
    super(props);

    this.state = {
      showDropdown: false,
    }

    this.ref = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    // const dropdown = document.getElementsByClassName("dropdown");
    // if (this.ref.current.contains(e.target)){
    //   dropdown[0].classList.toggle("show");
    // } else {
    //   this.handleClickOutside();
    // }
    if (this.state.showDropdown === false) {
      this.setState({showDropdown: true});
  
      const documentClick = (e) => {
        if (!this.ref.current.contains(e.target)){
          this.setState({showDropdown: false});
          document.removeEventListener("click", documentClick);
        }
      }
      document.addEventListener("click", documentClick);
    }
  }


  render() {
    return (
      <div className="dropdown-container" >
        <button onClick={this.handleClick} className="dropbtn">User</button>
        <div className={this.state.showDropdown ? "dropdown show" : "dropdown"} ref={this.ref}>
          <div id="myDropdown" className="dropdown-content">
            <ul>
              <li className="dropdown-header"><strong>Account</strong> <Link to="/signup" onClick={this.props.logout}>Logout</Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
