import React from 'react';
import {connect} from 'react-redux';
// import './App.css';

import ColorBox from './ColorBox';
import myStore from './store';

// const React = require('react')
// const logo = require('./logo.svg')
// require('./App.css')

function ColorBoxes(props) {
  return (
    <div className="text-center">
      <button onClick={props.randomize}>Randomize!</button>
      <button onClick={props.addBox}>Add Box</button>
      <button onClick={() => myStore.dispatch({type: 'REMOVE_BOX'})}>Remove Box</button>
      <div className="d-flex justify-content-center">
        {props.boxes.map((box, idx) => (
          <ColorBox {...box} key={idx} toggleLock={() => {props.toggleLock(idx)}}/>
        ))}
      </div>
    </div>
  );
}

const ConnectedColorBoxes = connect(
  (state) => {
    return {
      boxes: state.boxes
    }
  },
  (dispatch) => {
    return {
      randomize: () => {
        console.log('is this running on click?')
        return dispatch({
          type: 'RANDOMIZE'
        })
      },
      addBox: () => {
        return dispatch({
          type: 'ADD_BOX'
        })
      },
      toggleLock: (index) => {
        return dispatch({
          type: 'TOGGLE_BOX',
          boxIndex: index
        })
      }
    }
  }
)(ColorBoxes)

export default ConnectedColorBoxes;

// module.exports = App
