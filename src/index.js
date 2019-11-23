import React from 'react';
import ReactDOM from 'react-dom';

import myStore from './store';
import './index.css';
import App from './App';

myStore.subscribe(() => ReactDOM.render(
  <App {...myStore.getState()}/>,
  document.getElementById('root'))
);

window.myStore = myStore

myStore.dispatch({ type: null });
