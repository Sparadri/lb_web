import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

// Import Actions
import { fetchCollections } from '../actions/index';


class CollectionsPage extends Component {

  componentDidMount() {
    // why is he taking care of getting back the products?
    this.props.fetchCollections();
  }


  render() {
    if (!this.props.collections) {
      return <div>no collections</div>;
    }

    var that = this;
    return (
      <div>
        {Object.keys(this.props.collections).map(function (key) {
            const id   = that.props.collections[key]['details']['id'];
            const name = that.props.collections[key]['details']['title'];

            return (
              <div key={id}>
                <Link to={`collection/${key}`}>{name}</Link>
              </div>
            )
          })
        }
      </div>
    )

  }
}

function mapStateToProps({ collections }) {
  if (!collections) {
    return {collections}
  }
  return {
    ...collections
 };
}

export default connect(mapStateToProps, { fetchCollections })(CollectionsPage);
