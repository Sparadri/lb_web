import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

// actions
import { signinUser } from '../../actions/auth';

// import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class SigninForm extends Component {

  handleFormSubmit({ email, password }) {
    this.props.dispatch(signinUser({ email, password }));
  }

  render() {
    const { handleSubmit, fields: { email, password} } = this.props;
    return (
      <div className="auth">
        <h1 className="title"> Welcome back</h1>
        <form className="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field name="email" component="input" type="email" placeholder="Please provide your email"/>
          <Field className="margin-top-30" name="password" component="input" type="text" placeholder="And your password"/>
          <button type="submit" className="btn margin-top-30">LOGIN</button>
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
  form: 'signin', // a unique name for this form
  fields: ['email', 'password'],
  signinUser
}, mapStateToProps)(SigninForm);
