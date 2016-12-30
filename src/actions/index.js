import axios from 'axios';

export function selectFilter(filter) {
  // selectFilter is an actionCreator, it needs to return an action,
  // an object with a type property
  // payload > describes the piece of data
  return {
    type: 'FILTER_SELECTED',
    payload: filter
  }
}
