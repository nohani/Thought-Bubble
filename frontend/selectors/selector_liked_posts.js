export default (posts = {}, users = {}, currentUser = {}) => {

  const cUser = users[currentUser.id];

  const likedPostIds = cUser.liked_post_ids

  const likedPosts = [];

  if (likedPostIds && likedPostIds.length > 0){
    // const max = Math.max(...likedPostIds);

      for(let i = 0; i < likedPostIds.length; i++){
          likedPosts.push(posts[likedPostIds[i]])
      }
  }

return likedPosts;
}