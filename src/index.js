import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromiseMiddleware from 'redux-promise'; // middleware for redux
import { Router, browserHistory } from 'react-router';

import reducers from './reducers';
import routes from './routes';

import rootReducer from './reducers/index';


// const createStoreWithMiddleware = applyMiddleware(ReduxPromiseMiddleware)(createStore);
// const store = createStoreWithMiddleware(reducers)


const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = applyMiddleware(ReduxPromiseMiddleware)(createStore)(reducers, enhancers)

// const store = createStore(reducers, applyMiddleware(ReduxPromiseMiddleware), enhancers);



ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('#root'));

// browserHistory is an object that tells react how to interpret the changes in the url
// means that whenever the url updates, react-router is going to update
