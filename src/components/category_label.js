import React, { Component } from 'react';

// Utility libraries
import _ from 'lodash';
import classNames from 'classnames/bind';

class CategoryLabel extends Component {

  constructor(props) {
    super(props);

    // this.state = ({ selected_categories: [] });
  }

  render() {
    const name = this.props.name ? this.props.name : this.props.first_name

    // classes
    let label = classNames({
      'category-label': true,
      'is-all': this.props.isAll,
      'is-selected': this.props.isSelected
    });

    return (
      <div className={label}>
        {name}
        <span className="number"> ({this.props.nb_products})</span>
      </div>
    )
  }
}

export default CategoryLabel;
