import axios from 'axios';

// Utilities
import { setLocalStorage, getLocalStorage } from '../utilities/local_storage'

// to make changes of the URL
import { browserHistory } from 'react-router';

// API variables
const API_KEY     = 'lebardaweb';
const API_URL     = 'http://localhost:3000/auth/';

// type variables
export const AUTH_USER   = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';
export const AUTH_ERROR  = 'AUTH_ERROR';

export function validateToken() {

  return function(dispatch) {

      axios.get(`${API_URL}validate_token`, {headers: getLocalStorage() })
        .then( response => {
          dispatch({ type: AUTH_USER });
        })
        .catch( error => {
          console.log('-------------------------------------------');
        })
  }

}

export function signupUser({ email, password }) {

  return function(dispatch) {

      axios.post(`${API_URL}`, { email: email, password: password })
        .then( response => {
          dispatch({ type: AUTH_USER });
          setLocalStorage(response);
          browserHistory.push('/collections');
        })
        .catch( error => {
          console.log('-------------------------------------------');
        })
  }

}

export function signinUser({ email, password }) {

  return function(dispatch) {

      axios.post(`${API_URL}sign_in`, { email: email, password: password })
        .then( response => {
          dispatch({ type: AUTH_USER });
          console.log(response.headers);
          setLocalStorage(response);
          browserHistory.push('/products');
        })
        .catch( error => {
          console.log('-------------------------------------------');
        })
  }

}





// export function authError(error) {
//   return {
//     type: AUTH_ERROR,
//     payload: error
//   }
// }

// auth uses redux-thunk as a middleware (not redux-promise)
// redux-thunk allows you to return a function, not only an object
// with redux-thunk, not limited to one action, and insert some other logics
