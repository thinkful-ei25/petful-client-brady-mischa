import {combineReducers} from 'redux';
import catReducer from './cat';
import dogReducer from './dog';

export default combineReducers({
  catReducer, dogReducer
});