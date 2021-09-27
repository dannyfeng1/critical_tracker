import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout } from './actions/session';
import Root from './components/root'
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUser: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState
  window.dispatch = store.dispatch
  window.login = login
  window.logout = logout


  ReactDOM.render(<Root store={store} />, root)
})