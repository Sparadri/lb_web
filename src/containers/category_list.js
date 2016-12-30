import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux'; // makes sure our action flows all of our reducers

import { selectCategory } from '../actions/index';

class CategoryList extends Component {

  renderList() {
    return this.props.categories.map((category) => {
      return (
        <li
          key={category.name}
          onClick={() => this.props.selectCategory(category)}
          className="list-group-item">{category.name}</li>
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

// map application/redux state and returned results will show up as props of categoriesList
// as soon as our application state changes, our component categoriesList will automatically re-render
function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

// Anything returned from this function will end up as props
// on the FilterList container > so we can now call this.props.selectBook
// it will call our actionCreator
function mapDispatchToProps(dispatch) {
  // whenever selectCategory is called, the result should be passed to all our reducers
  console.log('------------------');
  return bindActionCreators({ selectCategory: selectCategory}, dispatch);
}

// we want to return the component WITH data
// Promote FilterList from a component to a container - it needs to know about
// this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
