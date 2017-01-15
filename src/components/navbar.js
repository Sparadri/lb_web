import React, { Component } from 'react';
import { Link }             from 'react-router';
import { connect } from 'react-redux';

// actions > CAREFUL > SHOULD IN APP.JS
import { validateToken } from '../actions/auth';

// for hiding navbar, to be updated
let initial_scroll = 0;

class Navbar extends Component {


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.props.validateToken();
  }


  handleScroll() {
    let last_scroll  = document.body.scrollTop;
    let delta = 5;

    const navbar_height = document.getElementById('navbar').scrollHeight;

    if ( last_scroll < initial_scroll ) {
      // document.getElementById('navbar').className = "navbar-wrapper navbar-fixed";
    } else {
      // document.getElementById('navbar').className = "navbar-wrapper";
    }
    initial_scroll = last_scroll
  }

  renderAuth() {
    if (this.props.auth) {
      if (this.props.auth.authenticated) {
        return (
          <div className="right menu-item margin-right-20">
            My Account
          </div>
        )
      } else {
        return (
          <div className="right menu-item margin-right-20">
            <Link to={`/login`}>Login</Link><Link to={`/signup`}> / Signup</Link>
          </div>
        )
      }
    }
  }


  render() {
    return (
      <div className="navbar-wrapper" id="navbar">
        <div className="left">
          <h1 className="margin-0">
            <Link to={`/`}>LE/BARDA</Link>
          </h1>
          <div className="menu-item margin-left-20">
            <Link to={`/`}>THIS WEEK</Link>
          </div>
          <div className="menu-item">
            <Link to={`/collections`}>COLLECTIONS</Link>
          </div>
          <div className="menu-item">
            <Link to={`/products`}>ALL ITEMS</Link>
          </div>
        </div>
        {this.renderAuth()}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth: auth };
}

export default connect(mapStateToProps, { validateToken })(Navbar);
