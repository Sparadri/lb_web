import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchProducts } from '../actions/index';

class FormNl extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    // careful, value of this will not be our formNl component
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    // to prevent browser from opening a new page on submit
    event.preventDefault();

    // we need to make a call to the API
    // this.props.fetchProducts(2);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input">
        <input
          placeholder="Search something"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}/>
        <span className="input-group=btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }

}

// fetchProducts causes the action creator and returns the action
// dispatch makes sure it flows down the middleware and then the reducers
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProducts }, dispatch);
}

// null > we just say we don't care about the current state (?)
export default connect(null, mapDispatchToProps)(FormNl)


// NEED TO BIND THE CONTEXT WHEN CALLBACK
// When input + button > web browser will automatically reload the page, hence we
// need to add 'on submit' > input has good functionalities (like pressing enter
// for submitting a form)
