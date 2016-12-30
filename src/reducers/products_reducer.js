import { FETCH_PRODUCTS } from '../actions/index';

const INITIAL_STATE = {};

// reducers are just functions
export default function(state = INITIAL_STATE, action) {
  console.log('action received', action)

  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload.data;
    default:
      return state;
  }

  return state
  // return [
  //   { title: 'adrien' },
  //   { title: 'francis' },
  //   { title: 'yop' }
  // ]
}

// LESSON: AVOIDING STATE MUTATING IN REDUX
// we never manipulate state directly, we mutate states:
  // state.push(action.payload.state)
// to change the state
//  state.concat([action.payload.data])
//  <=> [action.payload.data, ...state]

// 2 pieces of states: productList and product view { all: [], post: null }
