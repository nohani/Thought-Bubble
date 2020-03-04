import React from 'react';
import {Link, Route} from 'react-router-dom'


export default (props) => {

  return (
    <header className="splash-header">
      <div className="single-letter"><Link to ="/">t</Link></div>
      
      <Route path="/signup"
        render={() => (<Link to="/login" className="link-button">Login</Link>)}
      />
      <Route path="/login"
        render={() => (<Link to="/signup" className="link-button">Sign up</Link>)}
      />
    </header>
  )
}