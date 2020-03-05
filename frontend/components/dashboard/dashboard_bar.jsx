import React from 'react';
import { Link, Route } from 'react-router-dom';
import Dropdown from '../navbar/dropdown';


export default ({ currentUser, logout }) => {

  const display = currentUser ? (
    <div className="menu-bar">
      <div className="single-letter"><Link to="/dashboard">t</Link></div>
      <ul>
        <li><Dropdown logout={logout} /></li>
        <li><div className="menu-icons"><i className="fas fa-home"></i></div></li>
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