import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app'
import ProductList from './containers/product_list'
import CategoryList from './containers/category_list'

// productList is a nested component
export default (
  <Route path="/" component={App} >
    <Route path="products" component={ProductList} />
    <Route path="categories" component={CategoryList} />
  </Route>
);

// root to > initial route
// <IndexRoute component={Collection}
