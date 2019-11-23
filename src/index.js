import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import myStore from './store';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={myStore}>
    <App/>
  </Provider>,
document.getElementById('root'));

window.myStore = myStore

// myStore.dispatch({ type: null });
