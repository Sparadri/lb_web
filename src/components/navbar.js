import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <h1 className="margin-0">Le/Barda</h1>
        <div className="menu-item">HOME</div>
        <div className="menu-item">COLLECTIONS</div>
        <div className="menu-item">ALL ITEMS</div>
      </div>
    );
  }
}

export default Navbar
