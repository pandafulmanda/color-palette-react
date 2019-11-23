import React from 'react';
// import './App.css';

import ColorBox from './ColorBox';
import myStore from './store';

// const React = require('react')
// const logo = require('./logo.svg')
// require('./App.css')

function ColorBoxes(props) {
  return (
    <div className="text-center">
      <button onClick={() => myStore.dispatch({type: 'RANDOMIZE'})}>Randomize!</button>
      <button onClick={() => myStore.dispatch({type: 'ADD_BOX'})}>Add Box</button>
      <button onClick={() => myStore.dispatch({type: 'REMOVE_BOX'})}>Remove Box</button>
      <div className="d-flex justify-content-center">
        {props.boxes.map((box, idx) => (
          <ColorBox {...box} key={idx} toggleLock={() => myStore.dispatch({
            type: 'TOGGLE_BOX',
            boxIndex: idx
          })}/>
        ))}
      </div>
    </div>
  );
}

export default ColorBoxes;

// module.exports = App
