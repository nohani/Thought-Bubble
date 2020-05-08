import React from 'react';
import SuggestedUserItem from './suggested_user_item';

export default class SuggestedUsers extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchUnfollowedUsers();
  }

  render() {
    
    const { deleteFollow, createFollow, selectedUsers, users, currentUser } = this.props;
    console.log(selectedUsers)
    return (
      <>
      <h2>Recommended Users:</h2>
      <ul>
        {selectedUsers && selectedUsers.map((user, i) => {
          return <SuggestedUserItem 
            deleteFollow={deleteFollow}
            createFollow={createFollow}
            user={user}
            users={users}
            currentUser={currentUser}
            key={i}
            />
        })}
      </ul >
      </>
    )
  }


}