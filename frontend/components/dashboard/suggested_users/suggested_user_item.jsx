import React from 'react';


export default class SuggestedUserItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleFollow = this.handleFollow.bind(this);
  }
  
  handleFollow(e, userId) {
    e.preventDefault();
    this.props.createFollow(userId);
    this.props.fetchPosts();
    this.props.fetchUnfollowedUsers();
  } 

  render() {
    const {users, currentUser, user} = this.props;
    const cUser = users[currentUser.id];
    if (!user) return null;
    if (!cUser) return null;
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
