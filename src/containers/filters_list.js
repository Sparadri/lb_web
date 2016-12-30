import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux'; // makes sure our action flows all of our reducers

import { selectFilter } from '../actions/index';

class FiltersList extends Component {

  renderList() {
    return this.props.filters.map((filter) => {
      return (
        <li
          key={filter.name}
          onClick={() => this.props.selectFilter(filter)}
          className="list-group-item">{filter.name}</li>
      )
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// map application/redux state and returned results will show up as props of FiltersList
// as soon as our application state changes, our component FiltersList will automatically re-render
function mapStateToProps(state) {
  return {
    filters: state.filters
  }
}

// Anything returned from this function will end up as props
// on the FilterList container > so we can now call this.props.selectBook
// it will call our actionCreator
function mapDispatchToProps(dispatch) {
  // whenever selectFilter is called, the result should be passed to all our reducers
  console.log('------------------');
  return bindActionCreators({ selectFilter: selectFilter}, dispatch);
}

// we want to return the component WITH data
// Promote FilterList from a component to a container - it needs to know about
// this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(FiltersList)
