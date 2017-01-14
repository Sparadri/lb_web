import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

// actions
import { signupUser } from '../../actions/auth';

// import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class SignupForm extends Component {

  handleFormSubmit({ email, password }) {
    this.props.dispatch(signupUser({ email, password }));
  }

  render() {
    const { handleSubmit, fields: { email, password} } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email"/>
        </div>
        <div>
          <label htmlFor="password">Last Name</label>
          <Field name="password" component="input" type="text"/>
        </div>
        <button type="submit">SIGN UP</button>
      </form>
    );
  }
};


function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
};


// Decorate the form component
export default reduxForm({
  form: 'signup', // a unique name for this form
  fields: ['email', 'password'],
  signupUser
}, mapStateToProps)(SignupForm);
