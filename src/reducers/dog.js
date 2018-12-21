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
  if (action.type === FETCH_DOG_REQUEST || action.type === ADOPT_DOG_REQUEST) {
    return {
      ...state,
      loading: true,
      error: null
    }
  } else if (action.type === FETCH_DOG_SUCCESS || action.type === ADOPT_DOG_SUCCESS) {
    return {
      ...state,
      loading: false,
      error: null,
      pet: action.data
    }
  } else if (action.type === FETCH_DOG_ERROR || action.type === ADOPT_DOG_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    }
  } else {
    return state;
  }
}
