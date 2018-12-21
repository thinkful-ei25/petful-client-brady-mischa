import {createStore, applyMiddleware, combineReducers} from 'redux';
import {catReducer, dogReducer} from './reducers/index.js';
import thunk from 'redux-thunk';


export const store = createStore(combineReducers({
  cat: catReducer,
  dog: dogReducer
}), applyMiddleware(thunk));