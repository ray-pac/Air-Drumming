// src/reducers/index.js
import { combineReducers } from 'redux';
import statusReducer from './status';

const rootReducer = combineReducers({
  status: statusReducer,
});

export default rootReducer;
