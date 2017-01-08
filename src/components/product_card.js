import React, { Component } from 'react';

// Components
import ProductLabel from './product_label'

// Utility libraries
import classNames from 'classnames/bind';



class ProductCard extends Component {

  constructor(props) {
    super(props);

    this.state = ({ is_liked: false });
  }


  renderProductLabel(key) {
    return (
      <div key={key}>
        <ProductLabel categories={this.props.categories[key]}/>
      </div>
    )
  }

  handleLike() {
    console.log(this);
    const is_liked = !this.state.is_liked;
    this.setState({ is_liked: is_liked });
  };

  render() {

    // classes
    let fa = classNames({
      'fa fa-heart-o': !this.state.is_liked,
      'fa fa-heart': this.state.is_liked
    });

    var that = this;
    return (
      <div className="product-card">
        <div className="product-picture">
        </div>
        <div className="product-content">
          <div className="content-header">
            <div className="header-title">
              <div className="product-title">
                {this.props.title}
              </div>
              <div className="product-price">
                {this.props.price} $
              </div>
            </div>
            <div onClick={this.handleLike.bind(this)}>
              <i className={fa}></i>
            </div>
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
