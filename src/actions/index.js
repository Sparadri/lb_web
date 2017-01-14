// Utilities
import axios from 'axios';
import { getLocalStorage, setLocalStorage } from '../utilities/local_storage'


const API_KEY = 'lebardaweb';
const API_URL = 'http://localhost:3000/api/v1';


export function selectCategory(category) {
  return {
    type: 'CATEGORY_SELECTED',
    payload: category
  };
}

export const FETCH_PRODUCTS    = 'FETCH_PRODUCTS';
export const FETCH_COLLECTION  = 'FETCH_COLLECTION';
export const FETCH_COLLECTIONS = 'FETCH_COLLECTIONS';


export function fetchProducts(query = '') {

  // retrieve current and call API
  const current_url = window.location.search;
  const url         = `${API_URL}/products${current_url}`;
  const headers     = getLocalStorage()
  const request     = axios.get(url, {headers: headers})

  console.log('products request ', request);

  return {
    type: FETCH_PRODUCTS,
    payload: request
  };
}


export function fetchCollection(collection_id) {

  // retrieve current and call API
  const url         = `${API_URL}/collections/${collection_id}`;
  const request     = axios.get(url, {headers: getLocalStorage()})

  console.log('collection request ', request);

  return {
    type: FETCH_COLLECTION,
    payload: request
  };
}


export function fetchCollections() {

  // retrieve current and call API
  const url         = `${API_URL}/collections`;
  const request     = axios.get(url, {headers: getLocalStorage()})

  console.log('collections request ', request);

  return {
    type: FETCH_COLLECTIONS,
    payload: request
  };
}


// Action Creators:
//   - everytime someone interacts with the website, it dispatches an action
//   (like, add comment, ...)
//   - needs to return an action, which is an object with:
//      1. a type property
//      2. a payload > describes the piece of data

// To do: investigqte CORS ACCESS AJAX calls different origins

// Redux-Promise
//    - redux-promise sees the action and looks at the payload property
//    - if payload is a promise, redux-promise stops the action entirely
//    - and once the request finishes it dispatches a new action
// >> this is where this middleware starts to be fantastic
