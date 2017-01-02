import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Actions
import { fetchProducts } from '../actions/index';

import ProductList from './product_list';
import CategoryFilters from './category_filters';
import CollectionerFilters from './collectioner_filters';


class ProductsPage extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // why is he taking care of getting back the products?
    const query = window.location.search;
    this.props.fetchProducts(query);
  }

  render() {
    if (!this.props.products) {
      return <div>no products</div>;
    }

        // <CollectionerFilters/>
    return (
      <div className="container">
        <CategoryFilters
          categories={this.props.categories}
          nb_products={this.props.nb_products}
          />
        <div className="row">
          <div className="col-xs-10">
            <ProductList/>
          </div>
          <div className="col-xs-2">
            <CollectionerFilters/>
          </div>
        </div>

      </div>
    );
  }
}


function mapStateToProps({ products }) {
  if (!products) {
    return {products}
  }
  return {
    categories: products.categories,
    collectioners: products.collectioners,
    current_user: products.current_user,
    nb_products: products.nb_products,
    products: products.products
 };
}

export default connect(mapStateToProps, { fetchProducts })(ProductsPage);
