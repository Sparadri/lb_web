import axios from 'axios';

const API_KEY = 'lebardaweb';
const API_URL = 'http://localhost:3000/api/v1';


export function selectCategory(category) {
  // selectFilter is an actionCreator, it needs to return an action,
  // an object with a type property
  // payload > describes the piece of data
  return {
    type: 'CATEGORY_SELECTED',
    payload: category
  };
}

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export function fetchProducts(category_id) {

  const url     = `${API_URL}/products?category=${category_id}`;
  const request = axios.get(url)

  console.log('request ', request);

  return {
    type: FETCH_PRODUCTS,
    payload: request
  };
}






// actions are responsible as well
// using variables for actions better because in case they change
// no need to update the switch in reducers
// INVESTIGATE CORS ACCESS AJAX CALLS DIFFERENT ORIGINS

// Redux-Promise
// redux-promise sees the action and looks at the payload property
// if payload is a promise, redux-promise stops the action entirely
// and once the request finishes it dispatches a new action
// >> this is where this middleware starts to be fantastic
