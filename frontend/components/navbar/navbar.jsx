import React from 'react';


export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
    <span className="greeting">Hello {currentUser.username} </span>
    <button onClick={logout} className="logout">Logout</button>
    </div>
  ) : (
    null
  )

  return (
    <div>
      {display}
    </div>
  )
}