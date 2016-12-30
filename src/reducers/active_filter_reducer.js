
// State argument here is not the application but only
// the state this reducer is responsible for.
// We need to default the value of state to null when the
// user first opens the app, nothing selected.
export default function(state = null, action) {
  console.log(`in active_filter reducer. state > ${state}`);
  switch(action.type) {
  case 'FILTER_SELECTED':
    return action.payload;
  }
  console.log(state)
  return state
}



// FLOW IS THE FOLLOWING: CONTAINERS > ACTIONS > REDUCERS > ROOT REDUCER (STATE OF APP)
// redux is in charge of managing our application state
// component state different from application state
// application state is formed by our reducers
// for each key of our COmbineReducers, we assign 1 reducer
// each reducer is responsible for changing our application state over time
// action sends action to reducers
