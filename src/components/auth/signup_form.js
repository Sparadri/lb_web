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
      <div className="auth">
        <h1 className="title"> Welcome @leBarda</h1>
        <form className="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field name="email" component="input" type="email" placeholder="Please provide your email"/>
          <Field className="margin-top-30" name="password" component="input" type="text" placeholder="Choose a password"/>
          <button type="submit" className="btn margin-top-30">SIGN UP</button>
        </form>
      </div>
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
