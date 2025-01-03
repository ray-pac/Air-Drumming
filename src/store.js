// src/store.js
import { createStore } from 'redux';
import rootReducer from './reducers';

// Create the Redux store with a reducer
const store = createStore(rootReducer);

export default store;