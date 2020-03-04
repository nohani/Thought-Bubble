import React from 'react';
import {Link, Route} from 'react-router-dom'


export default ({ currentUser, path, logout }) => {

  const display = currentUser ? (
    <div>
    {/* <span> {currentUser.username} </span> */}
    <button onClick={logout} className="link-button">Logout</button>
    
    </div>
  ) : (
    null
  )

  return (
    <header>
      {display}
      <Route path="/signup"
        render={() => (<Link to="/login" className="link-button">Login</Link>)}
      />
      <Route path="/login"
        render={() => (<Link to="/signup" className="link-button">Sign up</Link>)}
      />
    </header>
  )
}