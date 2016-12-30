import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchProducts } from '../actions/index';
import ProductCard from '../components/product_card';


class ProductList extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchProducts(2);
  }

  renderProduct(key) {
    let details     = this.props.products[key]['details']
    let categories  = this.props.products[key]['categories']

    return (
      <div key={key} className="col-xs-12 col-md-6 col-md-4">
        <ProductCard details={details} categories={categories}/>
      </div>
    )
  }

  render() {
    if (!this.props.products) {
      return <div>no products</div>;
    }

    // lodash for mapping: https://lodash.com/docs/4.17.3#mapKeys
    // https://lodash.com/docs/4.17.3#mapValues
    let that = this;
    return (
      <div className="container">
        <div className="row">
          {Object.keys(this.props.products)
            .map(function (key) {
              return that.renderProduct(key)
            })
          }
        </div>
      </div>
    )
  }
}

// condensed below
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchProducts }, dispatch);
// }

// ES6 syntax
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

// we're not exporting ProductList but the connected version of ProductList
// mapDispatchToProps gives access to this.props.fetchProducts
export default connect(mapStateToProps, { fetchProducts })(ProductList);
