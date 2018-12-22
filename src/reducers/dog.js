import {
  FETCH_DOG_REQUEST,
  FETCH_DOG_SUCCESS,
  FETCH_DOG_ERROR,
  ADOPT_DOG_REQUEST,
  ADOPT_DOG_SUCCESS,
  ADOPT_DOG_ERROR
} from '../actions';

const intitialState = {
  loading: false,
  error: null,
  pet: null
};


export default function dogsReducer(state = intitialState, action) {
  if (action.type === FETCH_DOG_REQUEST) {
    return {
      ...state,
      loading: true,
      error: null
    }
  }
  if (action.type === ADOPT_DOG_REQUEST) {
    return {
      ...state,
      loading: true,
      error: null
    }
  }
  if (action.type === FETCH_DOG_SUCCESS) {
    return {
      ...state,
      loading: false,
      error: null,
      pet: action.data
    }
  } if (action.type === ADOPT_DOG_SUCCESS) {
    return {
      ...state,
      loading: true,
      error: null,
      pet: null,
    }
  }
  if (action.type === FETCH_DOG_ERROR) {
    return {
      ...state,
      loading: true,
      error: action.error,
    }
  }
  if (action.type === ADOPT_DOG_ERROR) {
    return {
      ...state,
      error: action.error
    }
  }
  else {
    return state;
  }
}


