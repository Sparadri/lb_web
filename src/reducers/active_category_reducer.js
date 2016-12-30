
// State argument here is not the application but only
// the state this reducer is responsible for.
// We need to default the value of state to null when the
// user first opens the app, nothing selected.
export default function(state = null, action) {
  switch(action.type) {
  case 'CATEGORY_SELECTED':
    return action.payload;
  }
  return state
}



