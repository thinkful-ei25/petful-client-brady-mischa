//TODO: NEED TO ADD THE API_BASE_URL TO CONFIG
import { API_BASE_URL } from '../config';

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = data => ({
  type: FETCH_CAT_SUCCESS,
  data
});

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = error => ({
  type: FETCH_CAT_ERROR,
  error
});

export const fetchCat = (dispatch) => {
  console.log('Dispatching fetchCatRequest');
  dispatch(fetchCatRequest());
  return fetch(`${API_BASE_URL}/pets/cats`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(pet => {
        console.log(
          'This is the cats get request result ==>  ' + JSON.stringify(pet)
        );
        dispatch(fetchCatSuccess(pet));
      })
      .catch(error => dispatch(fetchCatError(error)));
  };


export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
export const adoptCatSuccess = () => ({
  type: ADOPT_CAT_SUCCESS,
});

export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST';
export const adoptCatRequest = () => ({
  type: ADOPT_CAT_REQUEST
});

export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR';
export const adoptCatError = error => ({
  type: ADOPT_CAT_ERROR,
  error
});

export const adoptCat = (dispatch) => {
  console.log('Dispatching adoptCatRequest');
  dispatch(adoptCatRequest());
  return fetch(`${API_BASE_URL}/pets/cats`, {
      method: 'DELETE',
    })
    .then(()=> dispatch(adoptCatSuccess()))
    .then(dispatch(fetchCat()))
    .catch(error => dispatch(adoptCatError(error)));
  };
