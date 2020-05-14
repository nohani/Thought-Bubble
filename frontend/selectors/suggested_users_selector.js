export default (users) => {

<<<<<<< HEAD
  if (users === undefined) return [];
  let usersArray = Object.values(users);
    
  const suggestedUsers = [];
      
  while (usersArray.length && suggestedUsers.length < 3) {

    let index = Math.floor(Math.random() * usersArray.length);
    suggestedUsers.push(usersArray[index]);
    usersArray.splice(index, 1)
  }

  return suggestedUsers;
}

=======
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
>>>>>>> f55d524dd73b1f5fc03b2d639537fd3698a66b79
