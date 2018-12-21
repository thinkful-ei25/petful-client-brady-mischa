import {combineReducers} from 'redux';
import cat from './cat';
import dog from './dog';

const rootReducer = combineReducers({
  cat, dog
});
export default rootReducer;