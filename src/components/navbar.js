import React from 'react';
import { Link } from 'react-router-dom';
import './calculator.css';

const NavBar = () => (
  <nav className="nav-bar">
    <h1 className="site-title">Math Magicians</h1>
    <div className="pages">
      <Link to="/" className="page homepage">Home</Link>
      |
      <Link to="/calculator" className="page calculator-page">Calculator</Link>
      |
      <Link to="/quote" className="page quote-page">Quote</Link>
    </div>
  </nav>
);

export default NavBar;
