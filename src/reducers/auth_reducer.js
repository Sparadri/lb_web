import { AUTH_USER, UNAUTH_USER } from '../actions/auth';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  console.log(`action received in auth reducer`, action)
  console.log(`auth user `, AUTH_USER);
  console.log(AUTH_USER);

  switch (action.type) {

    case AUTH_USER:
      console.log('oooooooooooooooooooooooooooooooooooooooo');
      return { ...state, authenticated: true };

    case UNAUTH_USER:
      return { ...state, authenticated: false };

    default:
      return state;

  }

  return state
}
