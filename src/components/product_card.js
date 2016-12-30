import React, { Component } from 'react';

import CategoryLabel from './category_label'


class ProductCard extends Component {

  renderCategoryLabel(key) {
    return (
      <div key={key}>
        <CategoryLabel categories={this.props.categories[key]}/>
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
            {this.props.details.title}
          </div>
          <div className="product-price">
            {this.props.details.price} $
          </div>
          <div className="product-description">
            {this.props.details.description}
          </div>
          <div className="product-labels">
            {Object.keys(this.props.categories)
              .map(function (key) {
                return that.renderCategoryLabel(key)
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard
