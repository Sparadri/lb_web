import { FETCH_COLLECTION } from '../actions/index';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  console.log(`action received in collection reducer`, action)

  switch (action.type) {
    case FETCH_COLLECTION:
      return action.payload.data;
      // return (
      //   Object.assign({}, state, {
      //     collection: [
      //       ...state.collection, ...action.data.payload
      //     ]
      //   })
      // )
    default:
      return state;
  }

  return state
}

// For now, just remember that the reducer must be pure. Given the
// same arguments, it should calculate the next state and return it. No
// surprises. No side effects. No API calls. No mutations. Just a calculation.
