// This is the highest level component

import React, { Component } from 'react';
import { combineReducers } from 'redux';
// react-redux is a binding
// Provider creates the React context
import { Provider } from 'react-redux';

import { createStore, renderDevTools } from '../store_enhancers/devTools';

import FriendListApp from './FriendListApp';
// ES6: Import everything that is exported from ../reducers
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
// Create the Redux store
const store = createStore(reducer);

// Component -------------------------------------

export default class App extends Component {
  render() {
    return (
      <div>
        {/*
          Provider creates React context to the children
          https://facebook.github.io/react/docs/context.html
        */}
        <Provider store={store}>
          {() => <FriendListApp /> }
        </Provider>

        {/* Redux dev tools rendered on the right side */}

        {renderDevTools(store)}
      </div>
    );
  }
}
