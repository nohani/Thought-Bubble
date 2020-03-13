import React from 'react';


export default class SuggestedUserItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  }

  handleFollow(e, userId) {
    e.preventDefault();
    this.props.createFollow(userId);
  }

  handleUnfollow(e, userId) {
    e.preventDefault();
    this.props.deleteFollow(userId);
  }

  render() {
    const {users, currentUser, user} = this.props;
    
    const cUser = users[currentUser.id];
    const followButton = cUser.followed_user_ids.includes(user.id) ? (
      <div className="null-plus-icon"><i className="fas fa-plus-square"></i></div>
    ) : (<button className="follow-button" onClick={(e) => this.handleFollow(e, user.id)}><div className="plus-icon"><i className="fas fa-plus-square"></i></div></button>)

    return (
      <li className="suggested-user">
        {user.username}
        {followButton}
      </li>
    )
  }
}
