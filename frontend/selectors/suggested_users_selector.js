export default (users) => {

  let usersArray = Object.values(users);
    
    
  const suggestedUsers = [];
      
  while (usersArray.length && suggestedUsers.length < 3) {

    let index = Math.floor(Math.random() * usersArray.length);
    suggestedUsers.push(usersArray[index]);
    usersArray.splice(index, 1)
    console.log(usersArray)
  }

  return suggestedUsers;
}

