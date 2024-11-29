import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ classList = '', webRoot = process.env.PUBLIC_URL }) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${classList}`}>
      <div className="container">

        {/* Brand */}
        <Link className="navbar-brand" to={'/'}>
          Fake Mart
        </Link>

        {/* Toggler */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapse */}
        <div className="collapse navbar-collapse" id="navbarCollapse">

          {/* Nav */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              {/* Toggle */}
              <Link className="nav-link" to="/">Home</Link>

              {/* Menu */}
              {/* Replace this with a HomeDropdown component */}
              {/* <HomeDropdown /> */}
            </li>
            
            <li className="nav-item">
              {/* Toggle */}
              <Link className="nav-link" to='/products'>Products</Link>

              {/* Menu */}
              {/* Replace this with a ShopDropdown component */}
              {/* <ShopDropdown /> */}
            </li>
            
            <li className="nav-item">
              {/* Toggle */}
              <Link className="nav-link" href={`${webRoot}/docs/getting-started.html`}>Blog</Link>

              {/* Menu */}
              {/* Replace this with a BlogDropdown component */}
              {/* <BlogDropdown /> */}
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" href={`${webRoot}/docs/getting-started.html`}>Contact</Link>
            </li>
          </ul>

          {/* Nav */}
          <ul className="navbar-nav flex-row">
            <li className="nav-item">
              <Link className="nav-link" data-bs-toggle="offcanvas" href="#modalSearch">
                <i className="fe fe-search"></i>
              </Link>
            </li>
            <li className="nav-item ms-lg-n4">
              <Link className="nav-link" href={`${webRoot}/account-orders.html`}>
                <i className="fe fe-user"></i>
              </Link>
            </li>
            <li className="nav-item ms-lg-n4">
              <Link className="nav-link" href={`${webRoot}/account-wishlist.html`}>
                <i className="fe fe-heart"></i>
              </Link>
            </li>
            <li className="nav-item ms-lg-n4">
              <a className="nav-link" data-bs-toggle="offcanvas" href="#modalShoppingCart">
                <span data-cart-items="2">
                  <i className="fe fe-shopping-cart"></i>
                </span>
              </a>
            </li>
          </ul>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;