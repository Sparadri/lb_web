import React, { Component } from 'react';
import { Link } from 'react-router';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <h1 className="margin-0">
          <Link to={`/`}>LE/BARDA</Link>
        </h1>
        <div className="menu-item">
          <Link to={`/`}>THIS WEEK</Link>
        </div>
        <div className="menu-item">
          <Link to={`/collections`}>COLLECTIONS</Link>
        </div>
        <div className="menu-item">
          <Link to={`/products`}>ALL ITEMS</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
