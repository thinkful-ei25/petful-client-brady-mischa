
//TODO: NEED TO ADD THE API_BASE_URL TO CONFIG
import { API_BASE_URL } from '../config';


export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = results => ({
  type: FETCH_DOG_SUCCESS,
  results
});

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST
});

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = error => ({
  type: FETCH_DOG_ERROR,
  error
});

export const fetchDog = () => {
  return dispatch => {
    console.log('Dispatching fetchDogRequest');
    dispatch(fetchDogRequest());
    console.log('Fetching api');
    fetch(`${API_BASE_URL}/pets/Dogs`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(results => {
        console.log(
          'This is the Dogs get request result ==>  ' + JSON.stringify(results)
        );
        dispatch(fetchDogSuccess(results));
      })
      .catch(error => dispatch(fetchDogError(error)));
  };
};

export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS';
export const adoptDogSuccess = results => ({
  type: ADOPT_DOG_SUCCESS,
  results
});

export const ADOPT_DOG_REQUEST = 'ADOPT_DOG_REQUEST';
export const adoptDogRequest = () => ({
  type: ADOPT_DOG_REQUEST
});

export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR';
export const adoptDogError = error => ({
  type: ADOPT_DOG_ERROR,
  error
});

export const adoptDog = () => {
  return dispatch => {
    console.log('Dispatching adoptDogRequest');
    dispatch(adoptDogRequest());
    fetch(`${API_BASE_URL}/pets/Dogs`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(dispatch(fetchDog()))
      .catch(error => dispatch(adoptDogError(error)));
  };
};
