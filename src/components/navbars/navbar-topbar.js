import React from 'react';

const NavbarTopbar = ({ classList = '' }) => {
  return (
    <div className={`navbar navbar-topbar navbar-expand-xl navbar-light ${classList}`}>
      <div className="container">

        {/* Promo */}
        <div className="me-xl-8">
          <i className="fe fe-truck me-2"></i>
          <span className="heading-xxxs">Free shipping worldwide</span>
        </div>

        {/* Toggler */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topbarCollapse" aria-controls="topbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapse */}
        <div className="collapse navbar-collapse" id="topbarCollapse">

          {/* Nav */}
          <ul className="nav nav-divided navbar-nav me-auto">
            <li className="nav-item dropdown">
              {/* Toggle */}
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">
                <img className="mb-1 me-1" src={`${process.env.PUBLIC_URL}/assets/img/flags/usa.svg`} alt="USA" /> United States
              </a>

              {/* Menu */}
              <div className="dropdown-menu min-w-0">
                <a className="dropdown-item" href="#!">
                  <img className="mb-1 me-2" src={`${process.env.PUBLIC_URL}/assets/img/flags/usa.svg`} alt="USA" /> United States
                </a>
                <a className="dropdown-item" href="#!">
                  <img className="mb-1 me-2" src={`${process.env.PUBLIC_URL}/assets/img/flags/canada.svg`} alt="Canada" /> Canada
                </a>
                <a className="dropdown-item" href="#!">
                  <img className="mb-1 me-2" src={`${process.env.PUBLIC_URL}/assets/img/flags/germany.svg`} alt="Germany" /> Germany
                </a>
              </div>
            </li>

            <li className="nav-item dropdown">
              {/* Toggle */}
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">USD</a>

              {/* Menu */}
              <div className="dropdown-menu min-w-0">
                <a className="dropdown-item" href="#!">USD</a>
                <a className="dropdown-item" href="#!">EUR</a>
              </div>
            </li>

            <li className="nav-item dropdown">
              {/* Toggle */}
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">English</a>

              {/* Menu */}
              <div className="dropdown-menu min-w-0">
                <a className="dropdown-item" href="#">English</a>
                <a className="dropdown-item" href="#">French</a>
                <a className="dropdown-item" href="#">German</a>
              </div>
            </li>
          </ul>

          {/* Nav */}
          <ul className="nav navbar-nav me-8">
            <li className="nav-item">
              <a className="nav-link" href={`${process.env.PUBLIC_URL}/shipping-and-returns.html`}>Shipping</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`${process.env.PUBLIC_URL}/faq.html`}>FAQ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`${process.env.PUBLIC_URL}/contact-us.html`}>Contact</a>
            </li>
          </ul>

          {/* Social Nav */}
          <ul className="nav navbar-nav flex-row">
            <li className="nav-item">
              <a className="nav-link text-gray-350" href="#!">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="nav-item ms-xl-n4">
              <a className="nav-link text-gray-350" href="#!">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="nav-item ms-xl-n4">
              <a className="nav-link text-gray-350" href="#!">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="nav-item ms-xl-n4">
              <a className="nav-link text-gray-350" href="#!">
                <i className="fab fa-medium"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarTopbar;