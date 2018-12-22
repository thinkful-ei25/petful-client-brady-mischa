import {
  FETCH_CAT_REQUEST,
  FETCH_CAT_SUCCESS,
  FETCH_CAT_ERROR,
  ADOPT_CAT_REQUEST,
  ADOPT_CAT_SUCCESS,
  ADOPT_CAT_ERROR
} from '../actions';

const intitialState = {
  loading: false,
  error: null,
  pet: null
};

export default function catsReducer(state = intitialState, action) {
  if(action.type === FETCH_CAT_REQUEST ) {
    return {
      ...state,
      loading: true,
      error: null
    }
  }
  if(action.type === ADOPT_CAT_REQUEST) {
    return {
      ...state,
      loading: true,
      error: null
    }
  }
  if(action.type === FETCH_CAT_SUCCESS) {
    return {
    ...state, 
    loading: false,
    error: null,
    pet: action.data
  }
  } if (action.type === ADOPT_CAT_SUCCESS) {
    return {
      ...state,
      loading: true,
      error: null,
      pet: null,
    }
  }
  if(action.type === FETCH_CAT_ERROR) {
    return {
      ...state,
      loading: true,
      error: action.error,
    }
  } 
  if (action.type === ADOPT_CAT_ERROR) {
    return {
      ...state,
      error: action.error
    } 
  }
  else {
    return state;
  }
}
