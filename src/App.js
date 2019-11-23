import React from 'react';
// import './App.css';

import ColorBoxes from "./ColorBoxes";
import Profile from "./Profile";

// const React = require('react')
// const logo = require('./logo.svg')
// require('./App.css')

function App(props) {
  return (
    <div className="container">
      <Profile profile={props.profile}/>
      <ColorBoxes boxes={props.boxes}/>
    </div>
  );
}

export default App;

// module.exports = App
