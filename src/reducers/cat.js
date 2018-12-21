import {
  FETCH_CAT_REQUEST,
  FETCH_CAT_SUCCESS,
  FETCH_CAT_ERROR,
  ADOPT_CAT_REQUEST,
  ADOPT_CAT_SUCCESS,
  ADOPT_CAT_ERROR
} from '../actions';

const intitialState = {
  loading: true,
  error: null,
  pet: null
};

export default function catsReducer(state = intitialState, action) {
  if(action.type === FETCH_CAT_REQUEST || action.type === ADOPT_CAT_REQUEST) {
    return {
      ...state,
      loading: true,
      error: null
    }
  } else if(action.type === FETCH_CAT_SUCCESS || action.type === ADOPT_CAT_SUCCESS) {
    return {
    ...state, 
    loading: false,
    error: null,
    pet: action.data}
  } else if(action.type === FETCH_CAT_ERROR || action.type === ADOPT_CAT_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    }
  } else {
    return state;
  }
}
