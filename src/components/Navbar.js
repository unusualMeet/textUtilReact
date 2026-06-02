import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar({
  title = "TextUtils2",
  sectitle = "about"
}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{title}</a>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="/">{sectitle}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">contact</a>
          </li>
        </ul>
        <form className="d-flex ms-auto " role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  sectitle: PropTypes.string
};