import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import { fetchUnfollowedUsers } from './actions/follow_actions';

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

});