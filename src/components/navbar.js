import React, { Component } from 'react';
import { Link } from 'react-router';

// for hiding navbar, to be updated
let initial_scroll = 0;

class Navbar extends Component {


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
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
        <div className="right menu-item margin-right-20">
          SIGN IN
        </div>
      </div>
    );
  }
}

export default Navbar;
