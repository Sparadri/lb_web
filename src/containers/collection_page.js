import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Actions
import { fetchCollection } from '../actions/index';


class CollectionPage extends Component {

  componentDidMount() {
    this.props.fetchCollection(this.props.params.id);
  }


  render() {
    if (typeof this.props.details === 'undefined') {

      return <div>no collection</div>;
    }

    return (
      <div>
        <div>
          {this.props.details.id}
        </div>
        <div>
          {this.props.details.title}
        </div>
        <div>
          {this.props.collectioner.first_name}
        </div>
      </div>
    )

  }
}

function mapStateToProps({ collection }) {
  if (!collection) {
    return {collection}
  }
  return {
    details: collection.details,
    products: collection.products,
    user: collection.user,
    collectioner: collection.collectioner
 };
}

export default connect(mapStateToProps, { fetchCollection })(CollectionPage);
