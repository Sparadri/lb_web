import React, { Component } from 'react';

import * as actions from '../actions';

// Components
import CardProduct from './card_product';
import FormNl from './form_nl';

// Containers
import FiltersList from '../containers/filters_list';
import Filter from '../containers/filter';

export default class App extends Component {
  componentWillMount() {
    // this.props.loadData();
  }
  render() {
    return (
      <div>
        <FiltersList/>
        <Filter/>
        <CardProduct/>
        <FormNl/>
      </div>
    );
  }
}
