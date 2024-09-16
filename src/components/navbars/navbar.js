import React from 'react';

const Navbar = ({ classList = '', webRoot = process.env.PUBLIC_URL }) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${classList}`}>
      <div className="container">

        {/* Brand */}
        <a className="navbar-brand" href={`${webRoot}/overview.html`}>
          Bertolucci Enterprise
        </a>

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
              <a className="nav-link" href={`${webRoot}/docs/getting-started.html`}>Home</a>

              {/* Menu */}
              {/* Replace this with a HomeDropdown component */}
              {/* <HomeDropdown /> */}
            </li>
            
            <li className="nav-item">
              {/* Toggle */}
              <a className="nav-link" href={`${webRoot}/docs/getting-started.html`}>Catalog</a>

              {/* Menu */}
              {/* Replace this with a CatalogDropdown component */}
              {/* <CatalogDropdown /> */}
            </li>
            
            <li className="nav-item">
              {/* Toggle */}
              <a className="nav-link" href={`${webRoot}/docs/getting-started.html`}>Shop</a>

              {/* Menu */}
              {/* Replace this with a ShopDropdown component */}
              {/* <ShopDropdown /> */}
            </li>
            
            <li className="nav-item">
              {/* Toggle */}
              <a className="nav-link" href={`${webRoot}/docs/getting-started.html`}>Pages</a>

              {/* Menu */}
              {/* Replace this with a PagesDropdown component */}
              {/* <PagesDropdown /> */}
            </li>
            
            <li className="nav-item">
              {/* Toggle */}
              <a className="nav-link" href={`${webRoot}/docs/getting-started.html`}>Blog</a>

              {/* Menu */}
              {/* Replace this with a BlogDropdown component */}
              {/* <BlogDropdown /> */}
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href={`${webRoot}/docs/getting-started.html`}>Docs</a>
            </li>
          </ul>

          {/* Nav */}
          <ul className="navbar-nav flex-row">
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="offcanvas" href="#modalSearch">
                <i className="fe fe-search"></i>
              </a>
            </li>
            <li className="nav-item ms-lg-n4">
              <a className="nav-link" href={`${webRoot}/account-orders.html`}>
                <i className="fe fe-user"></i>
              </a>
            </li>
            <li className="nav-item ms-lg-n4">
              <a className="nav-link" href={`${webRoot}/account-wishlist.html`}>
                <i className="fe fe-heart"></i>
              </a>
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