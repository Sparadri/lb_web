import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchProducts } from '../actions/index';
import {Editor, EditorState} from 'draft-js';

// Utility libraries
import classNames from 'classnames/bind';



class NewsletterForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: '',
      is_clicked: false,
      editorState: EditorState.createEmpty()
    };

    this.onChange = (editorState) => this.setState({editorState});

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

  // <input
  //   placeholder="Receive weekly collections"
  //   className="input-form"
  //   value={this.state.term}
  //   onChange={this.onInputChange}/>



  render() {
    let input = classNames({
      'editor': true,
      'focused': this.state.is_clicked
    });

    return (
      <form onSubmit={this.onFormSubmit} className="lb-form">
        <div className={input} onClick={() => this.setState({ is_clicked: true })} >
          <Editor
            placeholder="receive new collections every week"
            editorState={this.state.editorState}
            onChange={this.onChange} />
        </div>
        <span className="">
          <div type="submit" className="btn-form">Subscribe</div>
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
export default connect(null, mapDispatchToProps)(NewsletterForm)


// NEED TO BIND THE CONTEXT WHEN CALLBACK
// When input + button > web browser will automatically reload the page, hence we
// need to add 'on submit' > input has good functionalities (like pressing enter
// for submitting a form)
