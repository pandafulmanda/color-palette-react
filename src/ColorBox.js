import React from "react";

function ColorBox (props, idx, _allBoxes) {
  const style = {
    border: "2px solid black",
    backgroundColor: props.color,
    width: "100px",
    height: "200px"
  }

  let btnText = 'Unlocked'
  if (props.isLocked) {
    btnText = 'Locked'
  }

  return (
    <div key={idx} style={style}>
      <button onClick={props.toggleLock}>{btnText}</button>
      <h1>{props.color}</h1>
    </div>
  )
}

export default ColorBox;