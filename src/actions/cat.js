
//TODO: NEED TO ADD THE API_BASE_URL TO CONFIG
import { API_BASE_URL } from '../config';

export const  FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = (results) => ({
  type: FETCH_CAT_SUCCESS,
  results
});

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = (error) => ({
  type: FETCH_CAT_ERROR,
  error
});

export const fetchCat = () => {
  return(dispatch) => {
    console.log('Dispatching fetchCatRequest');
    dispatch(fetchCatRequest());
    console.log('Fetching api');
    fetch(`${API_BASE_URL}/pets/cats`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then((results) => {
      console.log('This is the cats get request result ==>  ' + JSON.stringify(results));
      dispatch(fetchCatSuccess(results))
    })
      .catch(error => dispatch(fetchCatError(error)))
    }
}


export const DELETE_CAT_SUCCESS = 'DELETE_CAT_SUCCESS'
export const deleteCatSuccess = (results) => ({
  type: DELETE_CAT_SUCCESS,
  results
});

export const DELETE_CAT_REQUEST = 'DELETE_CAT_REQUEST';
export const deleteCatRequest = () => ({
  type: DELETE_CAT_REQUEST
});

export const DELETE_CAT_ERROR = 'DELETE_CAT_ERROR';
export const deleteCatError = (error) => ({
  type: DELETE_CAT_ERROR,
  error
});