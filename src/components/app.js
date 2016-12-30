import React, { Component } from 'react';

import * as actions from '../actions';

// Components
import FormNl from './form_nl';
import Navbar from './navbar';

// Containers
import CategoryList from '../containers/category_list';
import Category from '../containers/category';
import ProductList from '../containers/product_list';

export default class App extends Component {
  render() {
    return (
      <div className="adrien">
        <Navbar/>
        {this.props.children}
        <FormNl/>
        <ProductList/>
      </div>
    );
  }
}
