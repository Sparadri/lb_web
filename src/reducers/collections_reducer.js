import { FETCH_COLLECTIONS } from '../actions/index';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  console.log(`action received in collections reducer`, action)

  switch (action.type) {
    case FETCH_COLLECTIONS:
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
