import React, { Component } from 'react';

import _ from 'lodash';

class CategoryLabel extends Component {

  render() {
    return (
      <div className="product-label">
        {_.toUpper(this.props.categories.name)}
      </div>
    );
  }
}

export default CategoryLabel
