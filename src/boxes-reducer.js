

const makeRandomColor = () => {
  return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}

const makeNewBox = () => {
  return {
    color: makeRandomColor(),
    isLocked: false
  }
}

const makeDeepCopy = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}

const initialState = [
  makeNewBox(),
  makeNewBox(),
  makeNewBox()
]

const reducer = (state = initialState, action) => {
  const newState = makeDeepCopy(state)
  console.log(newState)

  if (action.type === 'ADD_BOX') {
    return [
      ...newState,
      makeNewBox()
    ]
  } else if (action.type === 'REMOVE_BOX') {
    const newBoxes = [...newState]
    newBoxes.pop()
    return newBoxes

  } else if (action.type === 'TOGGLE_BOX') {
    const newBoxes = [...newState]
    newBoxes[action.boxIndex].isLocked = !newBoxes[action.boxIndex].isLocked
    return newBoxes
  } else if (action.type === 'RANDOMIZE') {
    const currentBoxes = [...newState]
    const newBoxes = currentBoxes.map((box) => {
      if (!box.isLocked) {
        box.color = makeRandomColor();
      }
      return box;
    })
    return newBoxes
  }

  return newState
}

export default reducer;