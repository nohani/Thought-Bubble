import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {fetchPosts, fetchPost, deletePost} from './actions/post_actions'

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: {
        currentUser: window.currentUser
      }
    }
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const rootEl = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, rootEl);

  window.store = store;
  window.fetchPosts = fetchPosts;
  window.fetchPost = fetchPost;
  window.deletePost = deletePost;
});