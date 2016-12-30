<!-- https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet -->

<!-- to do: convert lewagon course into markdown -->
<!-- to do: assign pictures to  -->

## RANDOM
when post/patch method, need to specify the type of content in the header: Content-Type: application/json


## ES5

### Const / var / let
var   > keep it for legacy code
let   > for variables that will change their value over time
const > for variables which cannot be reassigned

### Arrow functions
difference: the value of 'this' is different from legacy functions
```javascript
const App = (a, b) => {
  return a + b
}

<input onChange={event => console.log(event.target.value)}
```

## REACT

### Random
⋅⋅* first file opened > index.html:
⋅⋅* bundle.js is the compile javascript for the entire application (through webpack and babel transpiling of es6 code)
⋅⋅* folder organisation (to be updated)
```javascript
// src
  // components
  // images
  // views
  // stylesheets
    // components
    // vendor
    // pages
    // shared
        _variables.scss
        _utilities.scss
      application.scss
  // reducers
  // actions
// config
// test
  .gitignore
  index.html
  index.js
  package.json
```
⋅⋅* React    > used to manage components
⋅⋅* Class Component > we're creating a class, not an instance
⋅⋅* Every react component must have a render method, to render the jsx
⋅⋅* ReactDOM > used to interact with the DOM
```javascript
ReactDOM.render(<App/>, document.querySelector('.container'))
```

### Export / import
⋅⋅* You can have one default export per file
export components > makes it available in other files.
```javascript
export default ComponentName;
```




// when import code from file we write, we need to provide folder reference / path
// './' represents the current directory
```javascript
import ComponentName from './components/component_name';
```

// external libraries from the node modules folder
```javascript
import React from 'react';
```

-------------------------
when requesting user email > see and example of newsletter

super(props) > like calling the parent method

in constructor: this.state
everywhere else: this.setState


SETTING STATES
this.state = {term: ''}; // only inside of the constructor
{this.state.term} // read
this.setState({ term: event.target.value}) // update the state


controlled component: has its value set by state.


SASS
npm run watch-css
npm start


# REDUX
### definition
separate the data from the view:
- data: list of books, currently selected books
- views: list view, list item, detail view
redux contains the state of the application
our application state is a plain javascript object


reducer:
- a function that returns a piece of the application state
- because our application can have many different pieces of state, we can have many reducers
- reducers produce the value of our state


CONTAINERS
react and redux are separate projects
we need to use react-redux > containters
containers = smart components
question: difference containers vs component???
containers should be the components connected to redux
container: the most parent component that cares about a change a state



ACTION CREATORS
1. when user clicks, goes to action creator
2. an action creator is a function that returns an object (action)
3. action/object is then automatically sent to all reducers. Action is just an object that flows through our reducers.
4. switch in reducer depending on the action type, reducer can choose to return a new piece of state.
5. updates application state










