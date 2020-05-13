import React from 'react';
import { Link, Route } from 'react-router-dom'

export default class Dropdown extends React.Component{
  constructor (props) {
    super(props);

    this.state = {
      showDropdown: false,
    }

    this.ref = React.createRef();
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    // this.documentClick = this.documentClick.bind(this);
  }

  // handleClick(e) {
  //   e.preventDefault();
  //   if (this.state.showDropdown === false) {
  //     this.setState({showDropdown: true});
  
  //     const documentClick = (e) => {
  //       if (!this.ref.current.contains(e.target)){
  //         this.setState({showDropdown: false});
  //         document.removeEventListener("click", documentClick);
  //       }
  //     }
  //     document.addEventListener("click", this.documentClick(e));
  //   }
  // }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showDropdown: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu) {
      document.removeEventListener('click', this.closeMenu)
    } else if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showDropdown: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    } 
  }

  // componentWillUnmount(){
  //   document.removeEventListener("click", this.documentClick(e));
  // }

  render() {
    return (
      <div className="dropdown-container" >
        <div onClick={this.showMenu} className="menu-icons"><i className="fas fa-user"></i></div>
        <div className={this.state.showDropdown ? "dropdown show" : "dropdown"} ref={element => this.dropdownMenu = element}>
          <div id="myDropdown" className="dropdown-content">
            <ul>
              <li className="dropdown-header"><strong>ACCOUNT</strong> <Link to="/signup" onClick={this.props.logout}>Logout</Link></li>
              <li className="dropdown-list-item"><Link to="/likes"><div><span className="heart"><i className="fas fa-heart"></i></span> Likes</div></Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
