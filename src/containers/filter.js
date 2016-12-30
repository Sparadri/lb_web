import React, { Component } from 'react';
import { connect } from 'react-redux';

class Filter extends Component {
  render() {
    // on first render, this props.filter will be null

    if (!this.props.filter) {
      return <div>select a filter</div>;
    }

    return (
      <div>
        details for: {this.props.filter.name}
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(`mapPropsToState. state > ${state}`);
  console.log(state);
  return {
    filter: state.activeFilter
  }
}

export default connect(mapStateToProps)(Filter)
