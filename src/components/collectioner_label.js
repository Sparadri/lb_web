import React, { Component } from 'react';

// Utility libraries
import _ from 'lodash';
import classNames from 'classnames/bind';

class CollectionerLabel extends Component {

  constructor(props) {
    super(props);

    // this.state = ({ selected_categories: [] });
  }

  render() {

    // classes
    let label = classNames({
      'collectioner-content': true,
      'is-selected': this.props.isSelected
    });

    return (
      <div className="collectioner-label">
        <div className="avatar-sm">

        </div>
        <div className={label}>
          <div>
            {this.props.first_name} {this.props.last_name}
            <span className="number"> ({this.props.nb_products})</span>
          </div>
          <div className="collection-title">
            blab alf fong r grfre oe mreo tomorroe nithg.
          </div>
        </div>
      </div>
    )
  }
}

export default CollectionerLabel;
