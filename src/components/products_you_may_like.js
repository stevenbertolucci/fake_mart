import React from 'react';
import { Link } from 'react-router-dom';

const ProductYouMightLike = () => {

    return (
        <section className="pt-11">
            <div className="container">
                <div className="row">
                <div className="col-12">

                    {/* <!-- Heading --> */}
                    <h4 className="mb-10 text-center">You might also like</h4>

                    {/* <!-- Items --> */}
                    <div className="row">
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3">

                        {/* <!-- Card --> */}
                        <div className="card mb-7">

                        {/* <!-- Badge --> */}
                        <div className="badge bg-dark card-badge card-badge-start text-uppercase">
                            New
                        </div>

                        {/* <!-- Image --> */}
                        <div className="card-img">

                            {/* <!-- Image --> */}
                            <Link className="card-img-hover" to="/products/austin-powers-mojo">
                                <img className="card-img-top card-img-back" src="/assets/img/products/mojo.png" alt="..." />
                                <img className="card-img-top card-img-front" src="/assets/img/products/mojo.png" alt="..." />
                            </Link>

                            {/* <!-- Actions --> */}
                            <div className="card-actions">
                            <span className="card-action">
                                <button className="btn btn-xs btn-circle btn-white-primary" data-bs-toggle="modal" data-bs-target="#modalProduct">
                                <i className="fe fe-eye"></i>
                                </button>
                            </span>
                            <span className="card-action">
                                <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-shopping-cart"></i>
                                </button>
                            </span>
                            <span className="card-action">
                                <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-heart"></i>
                                </button>
                            </span>
                            </div>

                        </div>

                        {/* <!-- Body --> */}
                        <div className="card-body px-0">

                            {/* <!-- Category --> */}
                            <div className="fs-xs">
                            <Link className="text-muted" href="shop.html">Pharmacy</Link>
                            </div>

                            {/* <!-- Title --> */}
                            <div className="fw-bold">
                            <Link className="text-body" to="/products/austin-powers-mojo">
                                Austin Power's Mojo
                            </Link>
                            </div>

                            {/* <!-- Price --> */}
                            <div className="fw-bold text-muted">
                            $1299.99
                            </div>

                        </div>

                        </div>

                    </div>

                    <div className="col-6 col-sm-6 col-md-4 col-lg-3">

                        {/* <!-- Card --> */}
                        <div className="card mb-7">

                        {/* <!-- Badge --> */}
                        <div className="badge bg-dark card-badge card-badge-start text-uppercase">
                            Sale
                        </div>

                        {/* <!-- Image --> */}
                        <div className="card-img">

                            {/* <!-- Image --> */}
                            <Link className="card-img-hover" to="/products/buddy-love-weight-loss-potion" >
                                <img className="card-img-top card-img-back" src="/assets/img/products/before_after.png" alt="..." />
                                <img className="card-img-top card-img-front" src="/assets/img/products/before_after.png" alt="..." />
                            </Link>

                            {/* <!-- Actions --> */}
                            <div className="card-actions">
                            <span className="card-action">
                                <button className="btn btn-xs btn-circle btn-white-primary" data-bs-toggle="modal" data-bs-target="#modalProduct">
                                <i className="fe fe-eye"></i>
                                </button>
                            </span>
                            <span className="card-action">
                                <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-shopping-cart"></i>
                                </button>
                            </span>
                            <span className="card-action">
                                <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-heart"></i>
                                </button>
                            </span>
                            </div>

                        </div>

                        {/* <!-- Body --> */}
                        <div className="card-body px-0">

                            {/* <!-- Category --> */}
                            <div className="fs-xs">
                            <Link className="text-muted" href="shop.html">Pharmacy</Link>
                            </div>

                            {/* <!-- Title --> */}
                            <div className="fw-bold">
                            <Link className="text-body" to="/products/buddy-love-weight-loss-potion">
                                Buddy Love's Weight Loss Potion
                            </Link>
                            </div>

                            {/* <!-- Price --> */}
                            <div className="fw-bold text-muted">
                                <span className="fs-xs text-gray-350 text-decoration-line-through">$99.00</span>
                                <span className="text-primary">$79.00</span>
                            </div>

                        </div>

                        </div>

                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3">

                        {/* <!-- Card --> */}
                        <div className="card mb-7">

                        {/* <!-- Image --> */}
                        <div className="card-img">

                            {/* <!-- Image --> */}
                            <Link className="card-img-hover" to="/products/phased-plasma-40-watt-range">
                                <img className="card-img-top card-img-back" src="/assets/img/products/phased_plasma.png" alt="..." />
                                <img className="card-img-top card-img-front" src="/assets/img/products/phased_plasma.png" alt="..." />
                            </Link>

                            {/* <!-- Actions --> */}
                            <div className="card-actions">
                            <span className="card-action">
                                <button className="btn btn-xs btn-circle btn-white-primary" data-bs-toggle="modal" data-bs-target="#modalProduct">
                                <i className="fe fe-eye"></i>
                                </button>
                            </span>
                            <span className="card-action">
                                <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-shopping-cart"></i>
                                </button>
                            </span>
                            <span className="card-action">
                                <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-heart"></i>
                                </button>
                            </span>
                            </div>

                        </div>

                        {/* <!-- Body --> */}
                        <div className="card-body px-0">

                            {/* <!-- Category --> */}
                            <div className="fs-xs">
                            <a className="text-muted" href="shop.html">Sci-Fi</a>
                            </div>

                            {/* <!-- Title --> */}
                            <div className="fw-bold">
                            <Link className="text-body" to="/products/phased-plasma-40-watt-range">
                                Phased Plasma in the 40 Watt Range
                            </Link>
                            </div>

                            {/* <!-- Price --> */}
                            <div className="fw-bold text-muted">
                                $8799.99
                            </div>

                        </div>

                        </div>

                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-md-none d-lg-block">

                        {/* <!-- Card --> */}
                        <div className="card mb-7">

                        {/* <!-- Image --> */}
                        <div className="card-img">

                            {/* <!-- Image --> */}
                            <Link to="/products/declaration-of-independence">
                            <img className="card-img-top card-img-front" src="/assets/img/products/declaration_of_independence.jpg" alt="..." />
                            </Link>

                            {/* <!-- Actions --> */}
                            <div className="card-actions">
                            <span className="card-action">
                                <button className="btn btn-xs btn-circle btn-white-primary" data-bs-toggle="modal" data-bs-target="#modalProduct">
                                <i className="fe fe-eye"></i>
                                </button>
                            </span>
                            <span className="card-action">
                                <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-shopping-cart"></i>
                                </button>
                            </span>
                            <span className="card-action">
                                <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-heart"></i>
                                </button>
                            </span>
                            </div>

                        </div>

                        {/* <!-- Body --> */}
                        <div className="card-body px-0">

                            {/* <!-- Category --> */}
                            <div className="fs-xs">
                            <a className="text-muted" href="shop.html">Documents</a>
                            </div>

                            {/* <!-- Title --> */}
                            <div className="fw-bold">
                            <Link className="text-body" to="/products/declaration-of-independence">
                                Declaration of Independence
                            </Link>
                            </div>

                            {/* <!-- Price --> */}
                            <div className="fw-bold text-muted">
                            Contact Seller
                            </div>

                        </div>

                        </div>

                    </div>
                    </div>

                </div>
                </div>
            </div>
        </section>
    );
};

export default ProductYouMightLike;