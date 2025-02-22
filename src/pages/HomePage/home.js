import React from 'react';
import { Link } from 'react-router-dom';
import Head from '../../components/head';
import Footer from '../../components/footers/footer';
import Scripts from '../../components/scripts';
import Navbar from '../../components/navbars/navbar';

const Home = () => {
    return (
        <div>
            <Head title="Fake Mart" />

            {/* <!-- NAVBAR --> */}
            <Navbar />

            {/* <!-- CATEGORIES --> */}
            <section>
            <div className="row gx-0 d-block d-lg-flex flickity flickity-lg-none" data-flickity='{"watchCSS": true}'>

                {/* <!-- Item --> */}
                <div className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover" style={{backgroundImage: `url('/assets/img/covers/pharmacy_home.jpg')`}}>
                <div className="card bg-dark-5 bg-hover text-white text-center" style={{minHeight: '470px'}}>
                    <div className="card-body mt-auto mb-n11 py-8">

                    {/* <!-- Heading --> */}
                    <h1 className="mb-0 fw-bolder">
                        Pharmacy
                    </h1>

                    </div>
                    <div className="card-body mt-auto py-8">

                    {/* <!-- Button --> */}
                    <Link className="btn btn-white stretched-link" to="/categories/Pharmacy">
                        Shop Pharmacy <i className="fe fe-arrow-right ms-2"></i>
                    </Link>

                    </div>
                </div>
                </div>

                {/* <!-- Card --> */}
                <div className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover" style={{backgroundImage: `url('/assets/img/covers/sci-fi-home.jpg')`}}>
                <div className="card bg-dark-5 bg-hover text-white text-center" style={{minHeight: '470px'}}>
                    <div className="card-body mt-auto mb-n11 py-8">

                    {/* <!-- Heading --> */}
                    <h1 className="mb-0 fw-bolder">
                        Sci-Fi
                    </h1>

                    </div>
                    <div className="card-body mt-auto py-8">

                    {/* <!-- Button --> */}
                    <Link className="btn btn-white stretched-link" to="/categories/Sci-Fi">
                        Shop Sci-Fi <i className="fe fe-arrow-right ms-2"></i>
                    </Link>

                    </div>
                </div>
                </div>

                {/* <!-- Card --> */}
                <div className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover" style={{backgroundImage: `url('/assets/img/covers/tools_home.jpg')`}}>
                <div className="card bg-dark-5 bg-hover text-white text-center" style={{minHeight: '470px'}}>
                    <div className="card-body mt-auto mb-n11 py-8">

                    {/* <!-- Heading --> */}
                    <h1 className="mb-0 fw-bolder">
                        Tools
                    </h1>

                    </div>
                    <div className="card-body mt-auto py-8">

                    {/* <!-- Button --> */}
                    <Link className="btn btn-white stretched-link" to="/categories/Tools">
                        Shop Tools <i className="fe fe-arrow-right ms-2"></i>
                    </Link>

                    </div>
                </div>
                </div>

            </div>
            </section>

            {/* <!-- FEATURES --> */}
            <section className="pt-7">
            <div className="container">
                <div className="row pb-7 border-bottom">
                <div className="col-12 col-md-6 col-lg-3">

                    {/* <!-- Item --> */}
                    <div className="d-flex mb-6 mb-lg-0">

                    {/* <!-- Icon --> */}
                    <i className="fe fe-truck fs-lg text-primary"></i>

                    {/* <!-- Body --> */}
                    <div className="ms-6">

                        {/* <!-- Heading --> */}
                        <h6 className="heading-xxs mb-1">
                        Free shipping
                        </h6>

                        {/* <!-- Text --> */}
                        <p className="mb-0 fs-sm text-muted">
                        From all orders over $100
                        </p>

                    </div>

                    </div>

                </div>
                <div className="col-12 col-md-6 col-lg-3">

                    {/* <!-- Item --> */}
                    <div className="d-flex mb-6 mb-lg-0">

                    {/* <!-- Icon --> */}
                    <i className="fe fe-repeat fs-lg text-primary"></i>

                    {/* <!-- Body --> */}
                    <div className="ms-6">

                        {/* <!-- Heading --> */}
                        <h6 className="mb-1 heading-xxs">
                        Free returns
                        </h6>

                        {/* <!-- Text --> */}
                        <p className="mb-0 fs-sm text-muted">
                        Return money within 30 days
                        </p>

                    </div>

                    </div>

                </div>
                <div className="col-12 col-md-6 col-lg-3">

                    {/* <!-- Item --> */}
                    <div className="d-flex mb-6 mb-md-0">

                    {/* <!-- Icon --> */}
                    <i className="fe fe-lock fs-lg text-primary"></i>

                    {/* <!-- Body --> */}
                    <div className="ms-6">

                        {/* <!-- Heading --> */}
                        <h6 className="mb-1 heading-xxs">
                        Secure shopping
                        </h6>

                        {/* <!-- Text --> */}
                        <p className="mb-0 fs-sm text-muted">
                        You're in safe hands
                        </p>

                    </div>

                    </div>

                </div>
                <div className="col-12 col-md-6 col-lg-3">

                    {/* <!-- Item --> */}
                    <div className="d-flex">

                    {/* <!-- Icon --> */}
                    <i className="fe fe-tag fs-lg text-primary"></i>

                    {/* <!-- Body --> */}
                    <div className="ms-6">

                        {/* <!-- Heading --> */}
                        <h6 className="mb-1 heading-xxs">
                        Over 10,000 Styles
                        </h6>

                        {/* <!-- Text --> */}
                        <p className="mb-0 fs-sm text-muted">
                        We have everything you need
                        </p>

                    </div>

                    </div>

                </div>
                </div>
            </div>
            </section>

            {/* <!-- BEST PICKS --> */}
            <section className="pt-12">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">

                    {/* <!-- Preheading --> */}
                    <h6 className="heading-xxs mb-3 text-gray-400">
                    New Collection
                    </h6>

                    {/* <!-- Heading --> */}
                    <h2 className="mb-4">Best Picks 2025</h2>

                    {/* <!-- Subheading --> */}
                    <p className="mb-10 text-gray-500">
                    Appear, dry there darkness they're seas, dry waters thing fly midst. Beast, above fly brought Very green.
                    </p>

                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-5 col-lg-4 d-flex flex-column">

                    {/* <!-- Card --> */}
                    <div className="card mb-7 text-white" style={{ minHeight: '400px' }}>

                    {/* <!-- Background --> */}
                    <div className="card-bg">
                    <div className="card-bg-img bg-cover" style={{ minHeight: '400px', backgroundImage: `url('./assets/img/products/documents-2.png')` }} />
                    </div>

                    {/* <!-- Body --> */}
                    <div className="card-body my-auto text-center">

                        {/* <!-- Heading --> */}
                        <h4 className="mb-0">Documents</h4>

                        {/* <!-- Link --> */}
                        <Link className="btn btn-link stretched-link text-reset px-0" href="shop.html">
                        Documents <i className="fe fe-arrow-right ms-2"></i>
                        </Link>

                    </div>

                </div>

            </div>

            <div className="col-12 col-md-7 col-lg-8 d-flex flex-column">

                    {/* <!-- Card --> */}
                    <div className="card mb-7 text-white" style={{minHeight: '400px'}}>

                        {/* <!-- Background --> */}
                        <div className="card-bg">
                            <div className="card-bg-img bg-cover" style={{backgroundImage: `url('./assets/img/products/services-2.png')`}}></div>
                        </div>

                        {/* <!-- Body --> */}
                        <div className="card-body my-auto px-md-10 text-center text-md-start">

                            {/* <!-- Circle -->
                            <div className="card-circle card-circle-lg card-circle-end">
                            <strong>save</strong>
                            <span className="fs-4 fw-bold">30%</span>
                            </div> */}

                            {/* <!-- Heading --> */}
                            <h4 className="mb-0">Services</h4>

                            {/* <!-- Link --> */}
                            <a className="btn btn-link stretched-link px-0 text-reset" href="shop.html">
                            Shop Now <i className="fe fe-arrow-right ms-2"></i>
                            </a>

                        </div>

                    </div>

            </div>
                <div className="col-12 col-md-7 col-lg-8 d-flex flex-column">

                    {/* <!-- Card --> */}
                    <div className="card mb-7 mb-md-0 text-body" style={{minHeight: '400px'}}>

                    {/* <!-- Background --> */}
                    <div className="card-bg">
                        <div className="card-bg-img bg-cover" style={{backgroundImage: `url('./assets/img/products/pharmacy-2.png')`}}></div>
                    </div>

                    {/* <!-- Body --> */}
                    <div className="card-body my-auto px-md-10 text-center text-md-start">

                        {/* <!-- Heading --> */}
                        <h4 className="mb-0">Pharmacy</h4>

                        {/* <!-- Link --> */}
                        <a className="btn btn-link stretched-link px-0 text-reset" href="shop.html">
                        Shop Now <i className="fe fe-arrow-right ms-2"></i>
                        </a>

                    </div>

                    </div>

                </div>
                <div className="col-12 col-md-5 col-lg-4 d-flex flex-column">

                    {/* <!-- Card --> */}
                    <div className="card text-white" style={{minHeight: '400px'}}>

                    {/* <!-- Background --> */}
                    <div className="card-bg">
                        <div className="card-bg-img bg-cover" style={{backgroundImage: `url('./assets/img/products/software.jpg')`}}></div>
                    </div>

                    {/* <!-- Body --> */}
                    <div className="card-body my-auto text-center">

                        {/* <!-- Heading --> */}
                        <h4 className="mb-0">Software</h4>

                        {/* <!-- Link --> */}
                        <a className="btn btn-link stretched-link text-reset" href="shop.html">
                        Shop Now <i className="fe fe-arrow-right ms-2"></i>
                        </a>

                    </div>

                    </div>

                </div>
                </div>
            </div>
            </section>

            {/* <!-- TOP SELLERS --> */}
            <section className="py-12">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8 col-xl-6">

                    {/* <!-- Heading --> */}
                    <h2 className="mb-4 text-center">Top month Sellers</h2>
                    <br/>
                    <br/>

                    {/* <!-- Nav -->
                    <div className="nav justify-content-center mb-10">
                    <a className="nav-link active" href="#topSellersTab" data-bs-toggle="tab">Women</a>
                    <a className="nav-link" href="#topSellersTab" data-bs-toggle="tab">Men</a>
                    <a className="nav-link" href="#topSellersTab" data-bs-toggle="tab">Kids</a>
                    </div> */}

                </div>
                </div>
                <div className="tab-content">
                <div className="tab-pane fade show active" id="topSellersTab">
                    <div className="row">
                    <div className="col-6 col-md-4 col-lg-3">

                        {/* <!-- Card --> */}
                        <div className="card mb-7">

                        {/* <!-- Badge --> */}
                        <div className="badge bg-warning text-body card-badge text-uppercase">
                            TRENDING
                        </div>

                        {/* <!-- Image --> */}
                        <div className="card-img">

                            {/* <!-- Image --> */}
                            <Link className="card-img-hover" to="/products/green-goblin-formula">
                            <img className="card-img-top card-img-back" src="./assets/img/products/goblin_formula_rage.png" alt="..."/>
                            <img className="card-img-top card-img-front" src="./assets/img/products/goblin_formula.png" alt="..."/>
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
                            <Link className="text-muted" to="/categories/Pharmacy">Pharmacy</Link>
                            </div>

                            {/* <!-- Title --> */}
                            <div className="fw-bold">
                            <Link className="text-body" to="/products/green-goblin-formula">
                            Oscorp's Green Goblin Formula
                            </Link>
                            </div>

                            {/* <!-- Price --> */}
                            <div className="fw-bold text-muted">
                            $9,999.99
                            </div>

                        </div>

                        </div>

                    </div>
                    <div className="col-6 col-md-4 col-lg-3">

                        {/* <!-- Card --> */}
                        <div className="card mb-7">

                        {/* <!-- Image --> */}
                        <div className="card-img">

                            {/* <!-- Image --> */}
                            <Link className="card-img-hover" to="/products/phased-plasma-40-watt-range">
                            <img className="card-img-top card-img-back" src="./assets/img/products/pal.jpg" alt="..."/>
                            <img className="card-img-top card-img-front" src="./assets/img/products/phased_plasma.png" alt="..."/>
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
                            <Link className="text-muted" to="/categories/Sci-Fi">Sci-Fi</Link>
                            </div>

                            {/* <!-- Title --> */}
                            <div className="fw-bold">
                            <Link className="text-body" to="/products/phased-plasma-40-watt-range">
                                Phased Plasma in the 40 Watt Range
                            </Link>
                            </div>

                            {/* <!-- Price --> */}
                            <div className="fw-bold text-muted">
                            $8,799.99
                            </div>

                        </div>

                        </div>

                    </div>
                    <div className="col-6 col-md-4 col-lg-3">

                        {/* <!-- Card --> */}
                        <div className="card mb-7">

                        {/* <!-- Badge --> */}
                        <div className="badge bg-dark card-badge card-badge-start text-uppercase">
                            NEW
                        </div>

                        {/* <!-- Image --> */}
                        <div className="card-img">

                            {/* <!-- Image --> */}
                            <Link className="card-img-hover" to="/products/anakin-lightsaber">
                            <img className="card-img-top card-img-back" src="./assets/img/products/anakin_lightsaber.png" alt="..."/>
                            <img className="card-img-top card-img-front" src="./assets/img/products/anakin.png" alt="..."/>
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
                            <Link className="text-muted" to="/categories/Tools">Tools</Link>
                            </div>

                            {/* <!-- Title --> */}
                            <div className="fw-bold">
                            <Link className="text-body" to="/products/anakin-lightsaber">
                                Anakin Skywalker's Lightsaber
                            </Link>
                            </div>

                            {/* <!-- Price --> */}
                            <div className="fw-bold text-muted">
                            $39,999.99
                            </div>

                        </div>

                        </div>

                    </div>
                    <div className="col-6 col-md-4 col-lg-3">

                        {/* <!-- Card --> */}
                        <div className="card mb-7">

                        {/* <!-- Badge --> */}
                        <div className="badge bg-warning text-body card-badge text-uppercase">
                            TRENDING
                        </div>

                        {/* <!-- Image --> */}
                        <div className="card-img">

                            {/* <!-- Image --> */}
                            <Link to="/products/the-kramer">
                            <img className="card-img-top card-img-front" src="./assets/img/products/the_kramer.png" alt="..."/>
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
                            <Link className="text-muted" to="/categories/Art">Art</Link>
                            </div>

                            {/* <!-- Title --> */}
                            <div className="fw-bold">
                            <Link className="text-body" to="/products/the-kramer">
                                The Kramer
                            </Link>
                            </div>

                            {/* <!-- Price --> */}
                            <div className="fw-bold text-muted">
                            $14,999.99
                            </div>

                        </div>

                        </div>

                    </div>
                    <div className="col-6 col-md-4 col-lg-3">

                        {/* <!-- Card --> */}
                        <div className="card mb-7">

                        {/* <!-- Image --> */}
                        <div className="card-img">

                            {/* <!-- Image --> */}
                            <Link to="/products/morris-worm">
                            <img className="card-img-top card-img-front" src="./assets/img/products/morris-worm.png" alt="..."/>
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
                            <Link className="text-muted" to="/categories/Software">Software</Link>
                            </div>

                            {/* <!-- Title --> */}
                            <div className="fw-bold">
                            <Link className="text-body" to="/products/morris-worm">
                                Morris Worm Source Code
                            </Link>
                            </div>

                            {/* <!-- Price --> */}
                            <div className="fw-bold text-muted">
                            $99.99
                            </div>

                        </div>

                        </div>

                    </div>
                    <div className="col-6 col-md-4 col-lg-3">

                        {/* <!-- Card --> */}
                        <div className="card mb-7">

                        {/* <!-- Badge --> */}
                        <div className="badge bg-dark card-badge card-badge-start text-uppercase">
                            Sale
                        </div>

                        {/* <!-- Image --> */}
                        <div className="card-img">

                            {/* <!-- Image --> */}
                            <Link className="card-img-hover" to="/products/buddy-love-weight-loss-potion">
                            <img className="card-img-top card-img-back" src="./assets/img/products/buddy_love.png" alt="..."/>
                            <img className="card-img-top card-img-front" src="./assets/img/products/before_after.png" alt="..."/>
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
                            <Link className="text-muted" to="/categories/Pharmacy">Pharmacy</Link>
                            </div>

                            {/* <!-- Title --> */}
                            <div className="fw-bold">
                            <Link className="text-body" to="/products/buddy-love-weight-loss-potion">
                                Buddy Love's Weight Loss Potion
                            </Link>
                            </div>

                            {/* <!-- Price --> */}
                            <div className="fw-bold">
                            <span className="fs-xs text-gray-350 text-decoration-line-through">$99.00</span>
                            <span className="text-primary"> $79.00</span>
                            </div>

                        </div>

                        </div>

                    </div>
                    <div className="col-6 col-md-4 col-lg-3">

                        {/* <!-- Card --> */}
                        <div className="card mb-7">

                        {/* <!-- Image --> */}
                        <div className="card-img">

                            {/* <!-- Image --> */}
                            <Link className="card-img-hover" to="/products/mithril">
                            <img className="card-img-top card-img-back" src="./assets/img/products/mithril_frodo.png" alt="..."/>
                            <img className="card-img-top card-img-front" src="./assets/img/products/mithril.jpg" alt="..."/>
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
                            <Link className="text-muted" to="/categories/Clothing">Clothing</Link>
                            </div>

                            {/* <!-- Title --> */}
                            <div className="fw-bold">
                            <Link className="text-body" to="/products/mithril">
                                Mithril
                            </Link>
                            </div>

                            {/* <!-- Price --> */}
                            <div className="fw-bold text-muted">
                            $19.00
                            </div>

                        </div>

                        </div>

                    </div>
                    <div className="col-6 col-md-4 col-lg-3">

                        {/* <!-- Card --> */}
                        <div className="card mb-7">

                        {/* <!-- Badge --> */}
                        <div className="badge bg-dark card-badge card-badge-start text-uppercase letter-spacing-lg">
                            New
                        </div>

                        {/* <!-- Image --> */}
                        <div className="card-img">

                            {/* <!-- Image --> */}
                            <Link className='card-img-hover' to="/products/bully-maguire-courses">
                            <img className="card-img-top card-img-back" src="./assets/img/products/bully_maguire_dirt.jpg" alt="..."/>
                            <img className="card-img-top card-img-front" src="./assets/img/products/bully_maguire_home.png" alt="..."/>
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
                            <Link className="text-muted" to="/categories/Education">Education</Link>
                            </div>

                            {/* <!-- Title --> */}
                            <div className="fw-bold">
                            <Link className="text-body" to="/products/bully-maguire-courses">
                                Bully Maguire Courses
                            </Link>
                            </div>

                            {/* <!-- Price --> */}
                            <div className="fw-bold text-muted">
                            $9.99
                            </div>

                        </div>

                        </div>

                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-12">

                    {/* <!-- Link  --> */}
                    <div className="mt-7 text-center">
                    <Link className="link-underline" to="/products">Discover more</Link>
                    </div>

                </div>
                </div>
            </div>
            </section>

            {/* <!-- COUNTDOWN --> */}
            <section className="py-13 bg-cover" style={{backgroundImage: `url('./assets/img/covers/cover-4.jpg')`}}>
            <div className="container">
                <div className="row justify-content-end">
                <div className="col-12 col-md-8 col-lg-6">

                    {/* <!-- Heading --> */}
                    <h3 className="mb-7">
                    Get 50% from <br />Summer Collection
                    </h3>

                    {/* <!-- Counter --> */}
                    <div className="d-flex mb-9" data-countdown data-date="Dec 31, 2025 00:00:00">
                    <div className="text-center">
                        <div className="fs-1 fw-bolder text-primary" data-days>00</div>
                        <div className="heading-xxs text-muted">Days</div>
                    </div>
                    <div className="px-1 px-md-4">
                        <div className="fs-2 fw-bolder text-primary">:</div>
                    </div>
                    <div className="text-center">
                        <div className="fs-1 fw-bolder text-primary" data-hours>00</div>
                        <div className="heading-xxs text-muted">Hours</div>
                    </div>
                    <div className="px-1 px-md-4">
                        <div className="fs-2 fw-bolder text-primary">:</div>
                    </div>
                    <div className="text-center">
                        <div className="fs-1 fw-bolder text-primary" data-minutes>00</div>
                        <div className="heading-xxs text-muted">Minutes</div>
                    </div>
                    <div className="px-1 px-md-4">
                        <div className="fs-2 fw-bolder text-primary">:</div>
                    </div>
                    <div className="text-center">
                        <div className="fs-1 fw-bolder text-primary" data-seconds>00</div>
                        <div className="heading-xxs text-muted">Seconds</div>
                    </div>
                    </div>

                    {/* <!-- Button --> */}
                    <a className="btn btn-dark" href="shop.html">
                    Shop Now <i className="fe fe-arrow-right ms-2"></i>
                    </a>

                </div>
                </div>
            </div>
            </section>

            {/* <!-- REVIEWS --> */}
            <section className="py-12">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">

                    {/* <!-- Preheading --> */}
                    <h6 className="heading-xxs mb-3 text-gray-400">
                    What buyers say
                    </h6>

                    {/* <!-- Heading --> */}
                    <h2 className="mb-10">Latest buyers Reviews</h2>

                </div>
                </div>
                <div className="row">
                <div className="col-12">

                    {/* <!-- Slider --> */}
                    <div data-flickity='{"pageDots": true}'>
                    <div className="col-12 col-sm-8 col-md-6 col-lg-4 px-4">

                        {/* <!-- Card --> */}
                        <div className="card-lg card border">
                        <div className="card-body">

                            {/* <!-- Header --> */}
                            <div className="row align-items-center mb-6">
                            <div className="col-4">

                                {/* <!-- Image --> */}
                                <img src="./assets/img/products/product-13.jpg" alt="..." className="img-fluid"/>

                            </div>
                            <div className="col-8 ms-n2">

                                {/* <!-- Preheading --> */}
                                <a className="fs-xs text-muted" href="shop.html">
                                Shoes
                                </a>

                                {/* <!-- Heading --> */}
                                <a className="d-block fw-bold text-body" href="product.html">
                                Low top Sneakers
                                </a>

                                {/* <!-- Rating --> */}
                                <div className="rating fs-xxs text-warning" data-value="3">
                                <div className="rating-item">
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className="rating-item">
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className="rating-item">
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className="rating-item">
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className="rating-item">
                                    <i className="fas fa-star"></i>
                                </div>
                                </div>

                            </div>
                            </div>

                            {/* <!-- Blockquote --> */}
                            <blockquote className="mb-0">
                            <p className="text-muted">
                                From creepeth said moved given divide make multiply of him shall itself also above second doesn't unto created saying land herb sea midst night wherein.
                            </p>
                            <footer className="fs-xs text-muted">
                                Logan Edwards, <time dateTime="2019-06-01">01 Jun 2019</time>
                            </footer>
                            </blockquote>

                        </div>
                        </div>

                    </div>
                    <div className="col-12 col-sm-8 col-md-6 col-lg-4 px-4">

                        {/* <!-- Card --> */}
                        <div className="card-lg card border">
                        <div className="card-body">

                            {/* <!-- Header --> */}
                            <div className="row align-items-center mb-6">
                            <div className="col-4">

                                {/* <!-- Image --> */}
                                <img src="./assets/img/products/product-14.jpg" alt="..." className="img-fluid"/>

                            </div>
                            <div className="col-8 ms-n2">

                                {/* <!-- Preheading --> */}
                                <a className="fs-xs text-muted" href="shop.html">
                                Dresses
                                </a>

                                {/* <!-- Heading --> */}
                                <a className="d-block fw-bold text-body" href="product.html">
                                Cotton print Dress
                                </a>

                                {/* <!-- Rating --> */}
                                <div className="rating fs-xxs text-warning" data-value="5">
                                <div className="rating-item">
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className="rating-item">
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className="rating-item">
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className="rating-item">
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className="rating-item">
                                    <i className="fas fa-star"></i>
                                </div>
                                </div>

                            </div>
                            </div>

                            {/* <!-- Blockquote --> */}
                            <blockquote className="mb-0">
                            <p className="text-muted">
                                God every fill great replenish darkness unto. Very open. Likeness their that light. Given under image to. Subdue of shall cattle day fish form saw spirit and given stars, us you whales may, land, saw fill unto.
                            </p>
                            <footer className="fs-xs text-muted">
                                Jane Jefferson, <time dateTime="2019-05-29">29 May 2019</time>
                            </footer>
                            </blockquote>

                        </div>
                        </div>

                    </div>
                    <div className="col-12 col-sm-8 col-md-6 col-lg-4 px-4">

                        {/* <!-- Card --> */}
                        <div className="card-lg card border">
                        <div className="card-body">

                            {/* <!-- Header --> */}
                            <div className="row align-items-center mb-6">
                            <div className="col-4">

                                {/* <!-- Image --> */}
                                <img src="./assets/img/products/product-15.jpg" alt="..." className="img-fluid"/>

                            </div>
                            <div className="col-8 ms-n2">

                                {/* <!-- Preheading --> */}
                                <a className="fs-xs text-muted" href="shop.html">
                                T-shirts
                                </a>

                                {/* <!-- Heading --> */}
                                <a className="d-block fw-bold text-body" href="product.html">
                                Oversized print T-shirt
                                </a>

                                {/* <!-- Rating --> */}
                                <div className="rating fs-xxs text-warning" data-value="4">
                                <div className="rating-item">
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className="rating-item">
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className="rating-item">
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className="rating-item">
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className="rating-item">
                                    <i className="fas fa-star"></i>
                                </div>
                                </div>

                            </div>
                            </div>

                            {/* <!-- Blockquote --> */}
                            <blockquote className="mb-0">
                            <p className="text-muted">
                                Fill his waters wherein signs likeness waters. Second light gathered appear sixth fourth, seasons behold creeping female.
                            </p>
                            <footer className="fs-xs text-muted">
                                Darrell Baker, <time dateTime="2019-05-18">18 May 2019</time>
                            </footer>
                            </blockquote>

                        </div>
                        </div>

                    </div>
                    <div className="col-12 col-sm-8 col-md-6 col-lg-4 px-4">

                        {/* <!-- Card --> */}
                        <div className="card-lg card border">
                        <div className="card-body">

                            {/* <!-- Header --> */}
                            <div className="row align-items-center mb-6">
                            <div className="col-4">

                                {/* <!-- Image --> */}
                                <img src="./assets/img/products/product-10.jpg" alt="..." className="img-fluid"/>

                            </div>
                            <div className="col-8 ms-n2">

                                {/* <!-- Preheading --> */}
                                <a className="fs-xs text-muted" href="shop.html">
                                Bags & Accessories
                                </a>

                                {/* <!-- Heading --> */}
                                <a className="d-block fw-bold text-body" href="product.html">
                                Suede cross body Bag
                                </a>

                                {/* <!-- Rating --> */}
                                <div className="rating fs-xxs text-warning" data-value="4">
                                <div className="rating-item">
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className="rating-item">
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className="rating-item">
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className="rating-item">
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className="rating-item">
                                    <i className="fas fa-star"></i>
                                </div>
                                </div>

                            </div>
                            </div>

                            {/* <!-- Blockquote --> */}
                            <blockquote className="mb-0">
                            <p className="text-muted">
                                God every fill great replenish darkness unto. Very open. Likeness their that light. Given under image to. Subdue of shall cattle day fish form saw spirit and given stars.
                            </p>
                            <footer className="fs-xs text-muted">
                                Pavel Doe, <time dateTime="2019-05-29">29 May 2019</time>
                            </footer>
                            </blockquote>

                        </div>
                        </div>

                    </div>
                    </div>

                </div>
                </div>
            </div>
            </section>

            {/* <!-- BRANDS --> */}
            <section className="py-12 bg-light">
            <div className="container">
                <div className="row">
                <div className="col-12 text-center">

                    {/* <!-- Heading --> */}
                    <h2 className="mb-3">@fakemart</h2>

                    {/* <!-- Subheading --> */}
                    <p className="mb-10 fs-lg text-gray-500">
                    "Don't believe everything you see on the internet." - Abraham Lincoln
                    </p>

                </div>
                </div>
                <div className="row mx-n1 mb-10">
                <div className="col-6 col-sm-4 col-md px-1">

                    {/* <!-- Card --> */}
                    <div className="card mb-2">

                    {/* <!-- Image --> */}
                    <img src="./assets/img/products/product-16.jpg" alt="..." className="card-img"/>

                    {/* <!-- Overlay --> */}
                    <a className="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40" href="blog-post.html">
                        <p className="my-0 fs-xxs text-center text-white">
                        <i className="fe fe-heart me-2"></i> 248 <i className="fe fe-message-square me-2 ms-3"></i> 7
                        </p>
                    </a>

                    </div>

                </div>
                <div className="col-6 col-sm-4 col-md px-1">

                    {/* <!-- Card --> */}
                    <div className="card mb-2">

                    {/* <!-- Image --> */}
                    <img src="./assets/img/products/product-17.jpg" alt="..." className="card-img"/>

                    {/* <!-- Overlay --> */}
                    <a className="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40" href="blog-post.html">
                        <p className="my-0 fs-xxs text-center text-white">
                        <i className="fe fe-heart me-2"></i> 248 <i className="fe fe-message-square me-2 ms-3"></i> 7
                        </p>
                    </a>

                    </div>

                </div>
                <div className="col-6 col-sm-4 col-md px-1">

                    {/* <!-- Card --> */}
                    <div className="card mb-2">

                    {/* <!-- Image --> */}
                    <img src="./assets/img/products/product-18.jpg" alt="..." className="card-img"/>

                    {/* <!-- Overlay --> */}
                    <a className="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40" href="blog-post.html">
                        <p className="my-0 fs-xxs text-center text-white">
                        <i className="fe fe-heart me-2"></i> 248 <i className="fe fe-message-square me-2 ms-3"></i> 7
                        </p>
                    </a>

                    </div>

                </div>
                <div className="col-6 col-sm-4 col-md px-1">

                    {/* <!-- Card --> */}
                    <div className="card mb-2">

                    {/* <!-- Image --> */}
                    <img src="./assets/img/products/product-19.jpg" alt="..." className="card-img"/>

                    {/* <!-- Overlay --> */}
                    <a className="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40" href="blog-post.html">
                        <p className="my-0 fs-xxs text-center text-white">
                        <i className="fe fe-heart me-2"></i> 248 <i className="fe fe-message-square me-2 ms-3"></i> 7
                        </p>
                    </a>

                    </div>

                </div>
                <div className="col-6 col-sm-4 col-md px-1">

                    {/* <!-- Card --> */}
                    <div className="card">

                    {/* <!-- Image --> */}
                    <img src="./assets/img/products/product-20.jpg" alt="..." className="card-img"/>

                    {/* <!-- Overlay --> */}
                    <a className="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40" href="blog-post.html">
                        <p className="my-0 fs-xxs text-center text-white">
                        <i className="fe fe-heart me-2"></i> 248 <i className="fe fe-message-square me-2 ms-3"></i> 7
                        </p>
                    </a>

                    </div>

                </div>
                <div className="col-6 col-sm-4 col-md px-1">

                    {/* <!-- Card --> */}
                    <div className="card">

                    {/* <!-- Image --> */}
                    <img src="./assets/img/products/product-21.jpg" alt="..." className="card-img"/>

                    {/* <!-- Overlay --> */}
                    <a className="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40" href="blog-post.html">
                        <p className="my-0 fs-xxs text-center text-white">
                        <i className="fe fe-heart me-2"></i> 248 <i className="fe fe-message-square me-2 ms-3"></i> 7
                        </p>
                    </a>

                    </div>

                </div>
                </div>
                <div className="row">
                <div className="col-4 col-sm-3 col-md text-center">

                    {/* <!-- Brand --> */}
                    <img src="./assets/img/brands/gray-350/mango.svg" alt="..." className="img-fluid mb-7 mb-md-0"/>

                </div>
                <div className="col-4 col-sm-3 col-md text-center">

                    {/* <!-- Brand --> */}
                    <img src="./assets/img/brands/gray-350/zara.svg" alt="..." className="img-fluid mb-7 mb-md-0"/>

                </div>
                <div className="col-4 col-sm-3 col-md text-center">

                    {/* <!-- Brand --> */}
                    <img src="./assets/img/brands/gray-350/reebok.svg" alt="..." className="img-fluid mb-7 mb-md-0"/>

                </div>
                <div className="col-4 col-sm-3 col-md text-center">

                    {/* <!-- Brand --> */}
                    <img src="./assets/img/brands/gray-350/asos.svg" alt="..." className="img-fluid mb-7 mb-md-0"/>

                </div>
                <div className="col-4 col-sm-3 col-md text-center">

                    {/* <!-- Brand --> */}
                    <img src="./assets/img/brands/gray-350/stradivarius.svg" alt="..." className="img-fluid mb-6 mb-sm-0"/>

                </div>
                <div className="col-4 col-sm-3 col-md text-center">

                    {/* <!-- Brand --> */}
                    <img src="./assets/img/brands/gray-350/adidas.svg" alt="..." className="img-fluid mb-6 mb-sm-0"/>

                </div>
                <div className="col-4 col-sm-3 col-md text-center">

                {/* <!-- Brand --> */}
                <img src="./assets/img/brands/gray-350/bershka.svg" alt="..." className="img-fluid"/>

                </div>
            </div>
        </div>
    </section>

    {/* <!-- FOOTER --> */}
    <Footer />

    {/* <!-- JAVASCRIPT --> */}
    <Scripts />

</div>
  );
};

export default Home;