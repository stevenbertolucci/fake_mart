import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ classList = '' }) => {
  return (
    <footer
      className={`bg-dark bg-cover ${classList}`}
      style={{ backgroundImage: './assets/img/patterns/pattern-2.svg' }}
    >
      <div className="py-12 border-bottom border-gray-700">
        <div className="container">

          <div className="row">
            <div className="col-12 col-md-3">
              {/* Heading */}
              <h4 className="mb-6 text-white">Fake Mart</h4>

              {/* Social */}
              <ul className="list-unstyled list-inline mb-7 mb-md-0">
                <li className="list-inline-item">
                  <a href="#!" className="text-gray-350">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="text-gray-350">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="text-gray-350">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="text-gray-350">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="text-gray-350">
                    <i className="fab fa-medium"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-sm">
              {/* Heading */}
              <h6 className="heading-xxs mb-4 text-white">Support</h6>

              {/* Links */}
              <ul className="list-unstyled mb-7 mb-sm-0">
                <li>
                  <Link className="text-gray-300" to="/contact-us">Contact Us</Link>
                </li>
                <li>
                  <Link className="text-gray-300" to="/faq">FAQs</Link>
                </li>
                <li>
                  <a className="text-gray-300" data-bs-toggle="modal" href="#modalSizeChart">Size Guide</a>
                </li>
                <li>
                  <a className="text-gray-300" href={`${process.env.PUBLIC_URL}/shipping-and-returns.html`}>
                    Shipping & Returns
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-sm">
              {/* Heading */}
              <h6 className="heading-xxs mb-4 text-white">Shop</h6>

              {/* Links */}
              <ul className="list-unstyled mb-7 mb-sm-0">
                <li>
                  <Link className="text-gray-300" to="/categories/Art">Art</Link>
                </li>
                <li>
                  <Link className="text-gray-300" to="/categories/Documents">Documents</Link>
                </li>
                <li>
                  <Link className="text-gray-300" to="/categories/Pharmacy">Pharmacy</Link>
                </li>
                <li>
                  <Link className="text-gray-300" to="/categories/Services">Services</Link>
                </li>
              </ul>
            </div>

            <div className="col-6 col-sm">
              {/* Heading */}
              <h6 className="heading-xxs mb-4 text-white">Company</h6>

              {/* Links */}
              <ul className="list-unstyled mb-0">
                <li>
                  <a className="text-gray-300" href={`${process.env.PUBLIC_URL}/about.html`}>Our Story</a>
                </li>
                <li>
                  <a className="text-gray-300" href="#!">Careers</a>
                </li>
                <li>
                  <a className="text-gray-300" href="#!">Terms & Conditions</a>
                </li>
                <li>
                  <a className="text-gray-300" href="#!">Privacy & Cookie policy</a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-sm">
              {/* Heading */}
              <h6 className="heading-xxs mb-4 text-white">Contact</h6>

              {/* Links */}
              <ul className="list-unstyled mb-0">
                <li>
                  <a className="text-gray-300" href="#!">1-202-555-0105</a>
                </li>
                <li>
                  <a className="text-gray-300" href="#!">1-202-555-0106</a>
                </li>
                <li>
                  <a className="text-gray-300" href="#!">help@fakemart.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6">
        <div className="container">
          <div className="row">
            <div className="col">
              {/* Copyright */}
              <p className="mb-3 mb-md-0 fs-xxs text-muted">
                © Fake Mart 2024 All rights reserved.
              </p>
            </div>
            <div className="col-auto">
              {/* Payment methods */}
              <img
                className="footer-payment"
                src={`${process.env.PUBLIC_URL}/assets/img/payment/mastercard.svg`}
                alt="Mastercard"
              />
              <img
                className="footer-payment"
                src={`${process.env.PUBLIC_URL}/assets/img/payment/visa.svg`}
                alt="Visa"
              />
              <img
                className="footer-payment"
                src={`${process.env.PUBLIC_URL}/assets/img/payment/amex.svg`}
                alt="Amex"
              />
              <img
                className="footer-payment"
                src={`${process.env.PUBLIC_URL}/assets/img/payment/paypal.svg`}
                alt="Paypal"
              />
              <img
                className="footer-payment"
                src={`${process.env.PUBLIC_URL}/assets/img/payment/maestro.svg`}
                alt="Maestro"
              />
              <img
                className="footer-payment"
                src={`${process.env.PUBLIC_URL}/assets/img/payment/klarna.svg`}
                alt="Klarna"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;