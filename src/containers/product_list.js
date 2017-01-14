import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchProducts } from '../actions/index';
import ProductCard from '../components/product_card';




class ProductList extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchProducts();
  }

  renderProduct(key) {
    let details     = this.props.products[key]['details']
    let categories  = this.props.products[key]['categories']

    return (
      <div key={key} className="col-xs-12 col-sm-6 col-md-4">
        <ProductCard {...details} categories={categories}/>
      </div>
    )
  }

  render() {
    if (!this.props) {
      return '';
    }

    let that = this;
    return (
      <div className="row">
        {Object.keys(this.props.products).map(function (key) {
            return that.renderProduct(key)
          })
        }
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
    products: products.products
 };
}

// we're not exporting ProductList but the connected version of ProductList
// mapDispatchToProps gives access to this.props.fetchProducts
export default connect(mapStateToProps, { fetchProducts })(ProductList);
