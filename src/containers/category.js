import React, { Component } from 'react';
import { connect } from 'react-redux';

class Category extends Component {
  render() {
    // on first render, this props.category will be null

    if (!this.props.category) {
      return <div>select a category</div>;
    }

    return (
      <div>
        details for: {this.props.category.name}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    category: state.activeCategory
  }
}

export default connect(mapStateToProps)(Category)
