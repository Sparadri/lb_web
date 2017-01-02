import React from 'react';

// Import React Router Deps
import { Route, IndexRedirect } from 'react-router';

// Import Compoments
import App from './components/app'
import ProductList from './containers/product_list'

// Import Containers
import ProductsPage from './containers/products_page'
import CollectionPage from './containers/collection_page'
import CollectionsPage from './containers/collections_page'

// productList is a nested component
export default (
  <Route path="/" component={App} >
    <IndexRedirect to="/collection/91"/>
    <Route path="products" component={ProductsPage} />
    <Route path="collection/:id" component={CollectionPage} />
    <Route path="collections" component={CollectionsPage} />
  </Route>
);

// <Route path="categories" component={CategoryList} />
// root to > initial route
// <IndexRoute component={Collection}
