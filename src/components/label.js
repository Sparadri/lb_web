import React, { Component } from 'react';

// Utility libraries
import _ from 'lodash';
import classNames from 'classnames/bind';

class Label extends Component {

  constructor(props) {
    super(props);

    // this.state = ({ selected_categories: [] });
  }

  render() {
    const name = this.props.name ? this.props.name : this.props.first_name

    // classes
    let label = classNames({
      'lb-label': true,
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

export default Label;
