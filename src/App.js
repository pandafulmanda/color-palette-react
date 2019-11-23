import React from 'react';
// import './App.css';

import ColorBoxes from "./ColorBoxes";
import Profile from "./Profile";

// const React = require('react')
// const logo = require('./logo.svg')
// require('./App.css')

function App(props) {
  console.log(props, 'this is no longer the state object')
  return (
    <div className="container">
      <Profile />
      <ColorBoxes />
    </div>
  );
}

export default App;

// module.exports = App
