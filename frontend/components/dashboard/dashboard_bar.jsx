import React from 'react';
import { Link, Route } from 'react-router-dom';
import Dropdown from '../navbar/dropdown';


export default ({ currentUser, logout }) => {

  const display = currentUser ? (
    <div className="menu-bar">
      <ul>
        <li><Dropdown logout={logout} /></li>
        {/* <li><div className="menu-icons"><i className="fas fa-bolt"></i></div></li>
        <li><div className="menu-icons"><i class="fas fa-comments"></i></div></li>
        <li><div className="menu-icons"><i class="fas fa-envelope"></i></div></li>
        <li><div className="menu-icons"><i class="far fa-compass"></i></div></li> */}
        <li><div className="menu-icons"><i class="fas fa-home"></i></div></li>
      </ul>
    </div>
  ) : (
      null
    )

  return (
    <header className="dashboard-header">
      {display}
    </header>
  )
}