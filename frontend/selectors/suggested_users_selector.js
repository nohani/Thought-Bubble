export default (users) => {

  const usersArray = Object.values(users);

  const suggestedUsers = [];
  const indices = [];

  for (let i=0; i < 3;){
    
    let index = Math.floor(Math.random() * usersArray.length);

    if(!indices.includes(index)){
      suggestedUsers.push(usersArray[index]);
      i++;
    }
  }

  return suggestedUsers;
}