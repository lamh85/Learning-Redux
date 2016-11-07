/*
  Create a wrapper around the store, and export this wrapper.
*/

import React from 'react';
import { createStore as initialCreateStore, compose } from 'redux';

export let createStore = initialCreateStore;

if (__DEV__) {
  createStore = compose(
    require('redux-devtools').devTools(),
    require('redux-devtools').persistState(
      window.location.href.match(/[?&]debug_session=([^&]+)\b/)
    ),
    createStore
  );
}

export function renderDevTools(store) {
  if (__DEV__) {
    /*
      Shorthand for:
      let DevTools = require('redux-devtools/lib/react').DevTools
      let DebugPanel = require('redux-devtools/lib/react').DebugPanel
      let LogMonitor = require('redux-devtools/lib/react').LogMonitor

      Equivalent of:
      import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react'

      See Destructuring:
      https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    */
    let {DevTools, DebugPanel, LogMonitor} = require('redux-devtools/lib/react');
    return (
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    );
  }
  return null;
}
