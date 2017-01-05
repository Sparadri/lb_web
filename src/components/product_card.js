import React, { Component } from 'react';

import ProductLabel from './product_label'


class ProductCard extends Component {

  renderProductLabel(key) {
    return (
      <div key={key}>
        <ProductLabel categories={this.props.categories[key]}/>
      </div>
    )
  }

  render() {
    var that = this;
    return (
      <div className="product-card">
        <div className="product-picture">
        </div>
        <div className="product-content">
          <div className="product-title">
            {this.props.title}
          </div>
          <div className="product-price">
            {this.props.price} $
          </div>
          <div className="product-description">
            {this.props.description}
          </div>
          <div className="product-labels">
            {Object.keys(this.props.categories)
              .map(function (key) {
                return that.renderProductLabel(key)
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard
