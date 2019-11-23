import { createStore, combineReducers } from 'redux';

import boxesReducer from './boxes-reducer';
import profileReducer from './profile-reducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  boxes: boxesReducer
})

const myStore = createStore(rootReducer);

export default myStore;