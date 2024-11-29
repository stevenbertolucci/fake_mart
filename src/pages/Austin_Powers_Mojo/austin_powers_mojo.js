import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Head from '../../components/head';
import Modals from '../../components/modal';
import Footer from '../../components/footers/footer';
import Scripts from '../../components/scripts';
import Navbar from '../../components/navbars/navbar';

const Austin_Powers_Mojo = () => {
    const [currentImage, setCurrentImage] = useState("/assets/img/products/mojo.png"); // Default image

    const handleImageClick = (newImage) => {
        setCurrentImage(newImage); // Update the big image
    };

    return (
        <div>

            <Head title="Fake Mart" />

            {/* <!-- MODALS --> */}
            <Modals />

            {/* <!-- NAVBAR --> */}
            {/* <NavbarTopbar /> */}

            {/* <!-- NAVBAR --> */}
            <Navbar />

            {/* <!-- BREADCRUMB --> */}
            <nav className="py-5">
            <div className="container">
                <div className="row">
                <div className="col-12">

                    {/* <!-- Breadcrumb --> */}
                    <ol className="breadcrumb mb-0 fs-xs text-gray-400">
                    <li className="breadcrumb-item">
                        <Link className="text-gray-400" to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link className="text-gray-400" to="/products">Products</Link>
                    </li>
                    <li className="breadcrumb-item active">
                        Austin Powers Mojo
                    </li>
                    </ol>

                </div>
                </div>
            </div>
            </nav>

            {/* <!-- PRODUCT --> */}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12 col-md-6">

                                    {/* <!-- Card --> */}
                                    <div className="card mb-4">

                                    {/* <!-- Badge --> */}
                                    <div className="badge bg-primary card-badge text-uppercase">
                                        Sale
                                    </div>

                                    {/* <!-- Slider --> */}
                                    <div className="col-12 col-md-6">
                                    
                                        {/* Main Image */}
                                        <div className="card mb-4">
                                            <img src={currentImage} alt="Product" className="card-img-top"/>
                                        </div>

                                        {/* Thumbnails */}
                                        <div className="d-flex justify-content-start align-items-center mx-n2 mb-10 mb-md-0">
                                            {/* Thumbnail 1 */}
                                            <div className="col-12 px-2" style={{ maxWidth: "113px" }} onClick={() => handleImageClick("/assets/img/products/mojo.png")} >
                                                <div className="ratio ratio-1x1 bg-cover" style={{ backgroundImage: "url(/assets/img/products/mojo.png)", cursor: "pointer" }}></div>
                                            </div>

                                            {/* Thumbnail 2 */}
                                            <div className="col-12 px-2" style={{ maxWidth: "113px" }} onClick={() => handleImageClick("/assets/img/products/anakin.png")}>
                                                <div className="ratio ratio-1x1 bg-cover" style={{ backgroundImage: "url(/assets/img/products/anakin.png)", cursor: "pointer" }}> </div>
                                            </div>

                                            {/* Thumbnail 3 */}
                                            <div className="col-12 px-2" style={{ maxWidth: "113px" }} onClick={() => handleImageClick("/assets/img/products/mithril.jpg")}>
                                                <div className="ratio ratio-1x1 bg-cover" style={{ backgroundImage: "url(/assets/img/products/mithril.jpg)", cursor: "pointer" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    <div className="col-12 col-md-6 ps-lg-10">

                        {/* <!-- Header --> */}
                        <div className="row mb-1">
                        <div className="col">

                            {/* <!-- Preheading --> */}
                            <a className="text-muted" href="shop.html">Pharmacy</a>

                        </div>
                        <div className="col-auto">

                            {/* <!-- Rating --> */}
                            <div className="rating fs-xs text-dark" data-value="5">
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

                            <a className="fs-sm text-reset ms-2" href="#reviews">
                            Reviews (6)
                            </a>

                        </div>
                        </div>

                        {/* <!-- Heading --> */}
                        <h3 className="mb-2">Austin Powers Mojo</h3>

                        {/* <!-- Price --> */}
                        <div className="mb-7">
                        <span className="ms-1 fs-5 fw-bolder text-primary">$1,299.99</span>
                        <span className="fs-sm ms-1">(In Stock)</span>
                        </div>

                        {/* <!-- Form --> */}
                        <form>
                       
                        <div className="form-group">

                            {/* <!-- Label --> */}
                            <p className="mb-5">
                            Size: <strong><span id="sizeCaption">7.5</span> US</strong>
                            </p>

                            {/* <!-- Radio --> */}
                            <div className="mb-2">
                            <div className="form-check form-check-inline form-check-size mb-2">
                                <input type="radio" className="form-check-input" name="sizeRadio" id="sizeRadioOne" value="6" data-toggle="form-caption" data-target="#sizeCaption" />
                                <label className="form-check-label" for="sizeRadioOne">6</label>
                            </div>
                            <div className="form-check form-check-inline form-check-size mb-2">
                                <input type="radio" className="form-check-input" name="sizeRadio" id="sizeRadioTwo" value="6.5" data-toggle="form-caption" data-target="#sizeCaption" disabled />
                                <label className="form-check-label" for="sizeRadioTwo">6.5</label>
                            </div>
                            <div className="form-check form-check-inline form-check-size mb-2">
                                <input type="radio" className="form-check-input" name="sizeRadio" id="sizeRadioThree" value="7" data-toggle="form-caption" data-target="#sizeCaption" />
                                <label className="form-check-label" for="sizeRadioThree">7</label>
                            </div>
                            <div className="form-check form-check-inline form-check-size mb-2">
                                <input type="radio" className="form-check-input" name="sizeRadio" id="sizeRadioFour" value="7.5" data-toggle="form-caption" data-target="#sizeCaption" checked />
                                <label className="form-check-label" for="sizeRadioFour">7.5</label>
                            </div>
                            <div className="form-check form-check-inline form-check-size mb-2">
                                <input type="radio" className="form-check-input" name="sizeRadio" id="sizeRadioFive" value="8" data-toggle="form-caption" data-target="#sizeCaption" />
                                <label className="form-check-label" for="sizeRadioFive">8</label>
                            </div>
                            <div className="form-check form-check-inline form-check-size mb-2">
                                <input type="radio" className="form-check-input" name="sizeRadio" id="sizeRadioSix" value="8.5" data-toggle="form-caption" data-target="#sizeCaption" />
                                <label className="form-check-label" for="sizeRadioSix">8.5</label>
                            </div>
                            <div className="form-check form-check-inline form-check-size mb-2">
                                <input type="radio" className="form-check-input" name="sizeRadio" id="sizeRadioSeven" value="9" data-toggle="form-caption" data-target="#sizeCaption" disabled />
                                <label className="form-check-label" for="sizeRadioSeven">9</label>
                            </div>
                            <div className="form-check form-check-inline form-check-size mb-2">
                                <input type="radio" className="form-check-input" name="sizeRadio" id="sizeRadioEight" value="9.5" data-toggle="form-caption" data-target="#sizeCaption" disabled />
                                <label className="form-check-label" for="sizeRadioEight">9.5</label>
                            </div>
                            <div className="form-check form-check-inline form-check-size mb-2">
                                <input type="radio" className="form-check-input" name="sizeRadio" id="sizeRadioNine" value="10" data-toggle="form-caption" data-target="#sizeCaption" />
                                <label className="form-check-label" for="sizeRadioNine">10</label>
                            </div>
                            <div className="form-check form-check-inline form-check-size mb-2">
                                <input type="radio" className="form-check-input" name="sizeRadio" id="sizeRadioTen" value="10.5" data-toggle="form-caption" data-target="#sizeCaption" />
                                <label className="form-check-label" for="sizeRadioTen">10.5</label>
                            </div>
                            <div className="form-check form-check-inline form-check-size mb-2">
                                <input type="radio" className="form-check-input" name="sizeRadio" id="sizeRadioEleven" value="11" data-toggle="form-caption" data-target="#sizeCaption" />
                                <label className="form-check-label" for="sizeRadioEleven">11</label>
                            </div>
                            <div className="form-check form-check-inline form-check-size mb-2">
                                <input type="radio" className="form-check-input" name="sizeRadio" id="sizeRadioTwelve" value="12" data-toggle="form-caption" data-target="#sizeCaption" />
                                <label className="form-check-label" for="sizeRadioTwelve">12</label>
                            </div>
                            <div className="form-check form-check-inline form-check-size mb-2">
                                <input type="radio" className="form-check-input" name="sizeRadio" id="sizeRadioThirteen" value="13" data-toggle="form-caption" data-target="#sizeCaption" />
                                <label className="form-check-label" for="sizeRadioThirteen">13</label>
                            </div>
                            <div className="form-check form-check-inline form-check-size mb-2">
                                <input type="radio" className="form-check-input" name="sizeRadio" id="sizeRadioFourteen" value="14" data-toggle="form-caption" data-target="#sizeCaption" />
                                <label className="form-check-label" for="sizeRadioFourteen">14</label>
                            </div>
                            </div>

                            {/* <!-- Size chart --> */}
                            <p className="mb-8">
                            <img src="/assets/img/icons/icon-ruler.svg" alt="..." className="img-fluid" /> 
                            <a className="text-reset text-decoration-underline ms-3" data-bs-toggle="modal" href="#modalSizeChart">Size chart</a>
                            </p>

                            <div className="row gx-5 mb-7">
                            <div className="col-12 col-lg-auto">

                                {/* <!-- Quantity --> */}
                                <select className="form-select mb-2">
                                <option value="1" selected>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                </select>

                            </div>
                            <div className="col-12 col-lg">

                                {/* <!-- Submit --> */}
                                <button type="submit" className="btn w-100 btn-dark mb-2">
                                Add to Cart <i className="fe fe-shopping-cart ms-2"></i>
                                </button>

                            </div>
                            <div className="col-12 col-lg-auto">

                                {/* <!-- Wishlist --> */}
                                <button className="btn btn-outline-dark w-100 mb-2" data-toggle="button">
                                Wishlist <i className="fe fe-heart ms-2"></i>
                                </button>

                            </div>
                            </div>

                            {/* <!-- Text --> */}
                            <p>
                            <span className="text-gray-500">Sold out? </span>
                            <a className="text-reset text-decoration-underline" data-bs-toggle="modal" href="#modalWaitList">Join the Wait List!</a>
                            </p>

                            {/* <!-- Share --> */}
                            <p className="mb-0">
                            <span className="me-4">Share:</span>
                            <a className="btn btn-xxs btn-circle btn-light fs-xxxs text-gray-350" href="#!">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="btn btn-xxs btn-circle btn-light fs-xxxs text-gray-350" href="#!">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="btn btn-xxs btn-circle btn-light fs-xxxs text-gray-350" href="#!">
                                <i className="fab fa-pinterest-p"></i>
                            </a>
                            </p>

                        </div>
                        </form>

                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

            {/* <!-- DESCRIPTION --> */}
            <section className="pt-11">
            <div className="container">
                <div className="row">
                <div className="col-12">

                    {/* <!-- Nav --> */}
                    <div className="nav nav-tabs nav-overflow justify-content-start justify-content-md-center border-bottom">
                    <a className="nav-link active" data-bs-toggle="tab" href="#descriptionTab">
                        Description
                    </a>
                    <a className="nav-link" data-bs-toggle="tab" href="#sizeTab">
                        Size & Fit
                    </a>
                    <a className="nav-link" data-bs-toggle="tab" href="#shippingTab">
                        Shipping & Return
                    </a>
                    </div>

                    {/* <!-- Content --> */}
                    <div className="tab-content">
                    <div className="tab-pane fade show active" id="descriptionTab">
                        <div className="row justify-content-center py-9">
                        <div className="col-12 col-lg-10 col-xl-8">
                            <div className="row">
                            <div className="col-12">

                                {/* <!-- Text --> */}
                                <p className="text-gray-500">
                                Won't herb first male seas, beast. Let upon, female upon third fifth every. Man subdue rule after years herb after
                                form. And image may, morning. Behold in tree day sea that together cattle whose. Fifth gathering brought
                                bearing. Abundantly creeping whose. Beginning form have void two. A whose.
                                </p>

                            </div>
                            <div className="col-12 col-md-6">

                                {/* <!-- List --> */}
                                <ul className="list list-unstyled mb-md-0 text-gray-500">
                                <li>
                                    <strong className="text-body">SKU</strong>: #61590437
                                </li>
                                <li>
                                    <strong className="text-body">Occasion</strong>: Lifestyle, Sport
                                </li>
                                <li>
                                    <strong className="text-body">Country</strong>: Italy
                                </li>
                                </ul>

                            </div>
                            <div className="col-12 col-md-6">

                                {/* <!-- List --> */}
                                <ul className="list list-unstyled mb-0">
                                <li>
                                    <strong>Outer</strong>: Leather 100%, Polyamide 100%
                                </li>
                                <li>
                                    <strong>Lining</strong>: Polyester 100%
                                </li>
                                <li>
                                    <strong>CounSoletry</strong>: Rubber 100%
                                </li>
                                </ul>

                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="sizeTab">
                        <div className="row justify-content-center py-9">
                        <div className="col-12 col-lg-10 col-xl-8">
                            <div className="row">
                            <div className="col-12 col-md-6">

                                {/* <!-- Text --> */}
                                <p className="mb-4">
                                <strong>Fitting information:</strong>
                                </p>

                                {/* <!-- List --> */}
                                <ul className="mb-md-0 text-gray-500">
                                <li>
                                    Upon seas hath every years have whose
                                    subdue creeping they're it were.
                                </li>
                                <li>
                                    Make great day bearing.
                                </li>
                                <li>
                                    For the moveth is days don't said days.
                                </li>
                                </ul>

                            </div>
                            <div className="col-12 col-md-6">

                                {/* <!-- Text --> */}
                                <p className="mb-4">
                                <strong>Model measurements:</strong>
                                </p>

                                {/* <!-- List --> */}
                                <ul className="list-unstyled text-gray-500">
                                <li>Height: 1.80 m</li>
                                <li>Bust/Chest: 89 cm</li>
                                <li>Hips: 91 cm</li>
                                <li>Waist: 65 cm</li>
                                <li>Model size: M</li>
                                </ul>

                                {/* <!-- Size --> */}
                                <p className="mb-0">
                                <img src="/assets/img/icons/icon-ruler.svg" alt="..." className="img-fluid" />
                                    <a className="text-reset text-decoration-underline ms-3" data-bs-toggle="modal" href="#modalSizeChart">Size chart</a>
                                </p>

                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="shippingTab">
                        <div className="row justify-content-center py-9">
                        <div className="col-12 col-lg-10 col-xl-8">

                            {/* <!-- Table --> */}
                            <div className="table-responsive">
                            <table className="table table-bordered table-sm table-hover">
                                <thead>
                                <tr>
                                    <th>Shipping Options</th>
                                    <th>Delivery Time</th>
                                    <th>Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Standard Shipping</td>
                                    <td>Delivery in 5 - 7 working days</td>
                                    <td>$8.00</td>
                                </tr>
                                <tr>
                                    <td>Express Shipping</td>
                                    <td>Delivery in 3 - 5 working days</td>
                                    <td>$12.00</td>
                                </tr>
                                <tr>
                                    <td>1 - 2 day Shipping</td>
                                    <td>Delivery in 1 - 2 working days</td>
                                    <td>$12.00</td>
                                </tr>
                                <tr>
                                    <td>Free Shipping</td>
                                    <td>
                                    Living won't the He one every subdue meat replenish
                                    face was you morning firmament darkness.
                                    </td>
                                    <td>$0.00</td>
                                </tr>
                                </tbody>
                            </table>
                            </div>

                            {/* <!-- Caption --> */}
                            <p className="mb-0 text-gray-500">
                            May, life blessed night so creature likeness their, for. <a className="text-body text-decoration-underline" href="#!">Find out more</a>
                            </p>

                        </div>
                        </div>
                    </div>
                    </div>

                </div>
                </div>
            </div>
            </section>

            {/* <!-- PRODUCTS --> */}
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
                        <div className="badge bg-white text-body card-badge card-badge-start text-uppercase">
                            New
                        </div>

                        {/* <!-- Image --> */}
                        <div className="card-img">

                            {/* <!-- Image --> */}
                            <a className="card-img-hover" href="product.html">
                            <img className="card-img-top card-img-back" src="/assets/img/products/mojo.png" alt="..." />
                            <img className="card-img-top card-img-front" src="/assets/img/products/mojo.png" alt="..." />
                            </a>

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
                            <a className="text-muted" href="shop.html">Shoes</a>
                            </div>

                            {/* <!-- Title --> */}
                            <div className="fw-bold">
                            <a className="text-body" href="product.html">
                                Leather mid-heel Sandals
                            </a>
                            </div>

                            {/* <!-- Price --> */}
                            <div className="fw-bold text-muted">
                            $129.00
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
                            <a className="card-img-hover" href="product.html" >
                            <img className="card-img-top card-img-back" src="/assets/img/products/mojo.png" alt="..." />
                            <img className="card-img-top card-img-front" src="/assets/img/products/mojo.png" alt="..." />
                            </a>

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
                            <a className="text-muted" href="shop.html">Dresses</a>
                            </div>

                            {/* <!-- Title --> */}
                            <div className="fw-bold">
                            <a className="text-body" href="product.html">
                                Cotton floral print Dress
                            </a>
                            </div>

                            {/* <!-- Price --> */}
                            <div className="fw-bold text-muted">
                            $40.00
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
                            <a className="card-img-hover" href="product.html">
                            <img className="card-img-top card-img-back" src="/assets/img/products/product-122.jpg" alt="..." />
                            <img className="card-img-top card-img-front" src="/assets/img/products/product-7.jpg" alt="..." />
                            </a>

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
                            <a className="text-muted" href="shop.html">Shoes</a>
                            </div>

                            {/* <!-- Title --> */}
                            <div className="fw-bold">
                            <a className="text-body" href="product.html">
                                Austin Powers Mojo
                            </a>
                            </div>

                            {/* <!-- Price --> */}
                            <div className="fw-bold">
                            <span className="fs-xs text-gray-350 text-decoration-line-through">$85.00</span>
                            <span className="text-primary">$85.00</span>
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
                            <a href="#!">
                            <img className="card-img-top card-img-front" src="/assets/img/products/product-8.jpg" alt="..." />
                            </a>

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
                            <a className="text-muted" href="shop.html">Tops</a>
                            </div>

                            {/* <!-- Title --> */}
                            <div className="fw-bold">
                            <a className="text-body" href="product.html">
                                Cropped cotton Top
                            </a>
                            </div>

                            {/* <!-- Price --> */}
                            <div className="fw-bold text-muted">
                            $29.00
                            </div>

                        </div>

                        </div>

                    </div>
                    </div>

                </div>
                </div>
            </div>
            </section>

            {/* <!-- Reviews --> */}
            <section className="pt-9 pb-11" id="reviews">
            <div className="container">
                <div className="row">
                <div className="col-12">

                    {/* <!-- Heading --> */}
                    <h4 className="mb-10 text-center">Customer Reviews</h4>

                    {/* <!-- Header --> */}
                    <div className="row align-items-center">
                    <div className="col-12 col-md-auto">

                        {/* <!-- Dropdown --> */}
                        <div className="dropdown mb-4 mb-md-0">

                        {/* <!-- Toggle --> */}
                        <a className="dropdown-toggle text-reset" data-bs-toggle="dropdown" href="#">
                            <strong>Sort by: Newest</strong>
                        </a>

                        {/* <!-- Menu --> */}
                        <div className="dropdown-menu mt-3">
                            <a className="dropdown-item" href="#!">Newest</a>
                            <a className="dropdown-item" href="#!">Oldest</a>
                        </div>

                        </div>

                    </div>
                    <div className="col-12 col-md text-md-center">

                        {/* <!-- Rating --> */}
                        <div className="rating text-dark h6 mb-4 mb-md-0" data-value="5">
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

                        {/* <!-- Count --> */}
                        <strong className="fs-sm ms-2">Reviews (3)</strong>

                    </div>
                    <div className="col-12 col-md-auto">

                        {/* <!-- Button --> */}
                        <a className="btn btn-sm btn-dark" data-bs-toggle="collapse" href="#reviewForm">
                        Write Review
                        </a>

                    </div>
                    </div>

                    {/* <!-- New Review --> */}
                    <div className="collapse" id="reviewForm">

                    {/* <!-- Divider --> */}
                    <hr className="my-8" />

                    {/* <!-- Form --> */}
                    <form>
                        <div className="row">
                        <div className="col-12 mb-6 text-center">

                            {/* <!-- Text --> */}
                            <p className="mb-1 fs-xs">
                            Score:
                            </p>

                            {/* <!-- Rating form --> */}
                            <div className="rating-form">

                            {/* <!-- Input --> */}
                            <input className="rating-input" type="range" min="1" max="5" value="5" />

                            {/* <!-- Rating --> */}
                            <div className="rating h5 text-dark" data-value="5">
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
                        <div className="col-12 col-md-6">

                            {/* <!-- Name --> */}
                            <div className="form-group">
                            <label className="visually-hidden" for="reviewName">Your Name:</label>
                            <input className="form-control form-control-sm" id="reviewName" type="text" placeholder="Your Name *" required />
                            </div>

                        </div>
                        <div className="col-12 col-md-6">

                            {/* <!-- Email --> */}
                            <div className="form-group">
                            <label className="visually-hidden" for="reviewEmail">Your Email:</label>
                            <input className="form-control form-control-sm" id="reviewEmail" type="email" placeholder="Your Email *" required />
                            </div>

                        </div>
                        <div className="col-12">

                            {/* <!-- Name --> */}
                            <div className="form-group">
                            <label className="visually-hidden" for="reviewTitle">Review Title:</label>
                            <input className="form-control form-control-sm" id="reviewTitle" type="text" placeholder="Review Title *" required />
                            </div>

                        </div>
                        <div className="col-12">

                            {/* <!-- Name --> */}
                            <div className="form-group">
                            <label className="visually-hidden" for="reviewText">Review:</label>
                            <textarea className="form-control form-control-sm" id="reviewText" rows="5" placeholder="Review *" required></textarea>
                            </div>

                        </div>
                        <div className="col-12 text-center">

                            {/* <!-- Button --> */}
                            <button className="btn btn-outline-dark" type="submit">
                            Post Review
                            </button>

                        </div>
                        </div>
                    </form>

                    </div>

                    {/* <!-- Reviews --> */}
                    <div className="mt-8">

                    {/* <!-- Review --> */}
                    <div className="review">
                        <div className="review-body">
                        <div className="row">
                            <div className="col-12 col-md-auto">

                            {/* <!-- Avatar --> */}
                            <div className="avatar avatar-xxl mb-6 mb-md-0">
                                <span className="avatar-title rounded-circle">
                                <i className="fa fa-user"></i>
                                </span>
                            </div>

                            </div>
                            <div className="col-12 col-md">

                            {/* <!-- Header --> */}
                            <div className="row mb-6">
                                <div className="col-12">

                                {/* <!-- Rating --> */}
                                <div className="rating fs-sm text-dark" data-value="5">
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
                                <div className="col-12">

                                {/* <!-- Time --> */}
                                <span className="fs-xs text-muted">
                                    Logan Edwards, <time datetime="2019-07-25">25 Jul 2019</time>
                                </span>

                                </div>
                            </div>

                            {/* <!-- Title --> */}
                            <p className="mb-2 fs-lg fw-bold">
                                So cute!
                            </p>

                            {/* <!-- Text --> */}
                            <p className="text-gray-500">
                                Justo ut diam erat hendrerit. Morbi porttitor, per eu. Sodales curabitur diam sociis. Taciti lobortis nascetur. Ante laoreet odio hendrerit.
                                Dictumst curabitur nascetur lectus potenti dis sollicitudin habitant quis vestibulum.
                            </p>

                            {/* <!-- Footer --> */}
                            <div className="row align-items-center">
                                <div className="col-auto d-none d-lg-block">

                                {/* <!-- Text --> */}
                                <p className="mb-0 fs-sm">Was this review helpful?</p>

                                </div>
                                <div className="col-auto me-auto">

                                {/* <!-- Rate --> */}
                                <div className="rate">
                                    <a className="rate-item" data-toggle="vote" data-count="3" href="#" role="button">
                                    <i className="fe fe-thumbs-up"></i>
                                    </a>
                                    <a className="rate-item" data-toggle="vote" data-count="0" href="#" role="button">
                                    <i className="fe fe-thumbs-down"></i>
                                    </a>
                                </div>

                                </div>
                                <div className="col-auto d-none d-lg-block">

                                {/* <!-- Text --> */}
                                <p className="mb-0 fs-sm">Comments (0)</p>

                                </div>
                                <div className="col-auto">

                                {/* <!-- Button --> */}
                                <a className="btn btn-xs btn-outline-border" href="#!">
                                    Comment
                                </a>

                                </div>
                            </div>

                            </div>
                        </div>
                        </div>
                    </div>

                    {/* <!-- Review --> */}
                    <div className="review">

                        {/* <!-- Body --> */}
                        <div className="review-body">
                        <div className="row">
                            <div className="col-12 col-md-auto">

                            {/* <!-- Avatar --> */}
                            <div className="avatar avatar-xxl mb-6 mb-md-0">
                                <span className="avatar-title rounded-circle">
                                <i className="fa fa-user"></i>
                                </span>
                            </div>

                            </div>
                            <div className="col-12 col-md">

                            {/* <!-- Header --> */}
                            <div className="row mb-6">
                                <div className="col-12">

                                {/* <!-- Rating --> */}
                                <div className="rating fs-sm text-dark" data-value="3">
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
                                <div className="col-12">

                                {/* <!-- Time --> */}
                                <span className="fs-xs text-muted">
                                    Sophie Casey, <time datetime="2019-07-07">07 Jul 2019</time>
                                </span>

                                </div>
                            </div>

                            {/* <!-- Title --> */}
                            <p className="mb-2 fs-lg fw-bold">
                                Cute, but too small
                            </p>

                            {/* <!-- Text --> */}
                            <p className="text-gray-500">
                                Shall good midst can't. Have fill own his multiply the divided. Thing great. Of heaven whose signs.
                            </p>

                            {/* <!-- Footer --> */}
                            <div className="row align-items-center">
                                <div className="col-auto d-none d-lg-block">

                                {/* <!-- Text --> */}
                                <p className="mb-0 fs-sm">Was this review helpful?</p>

                                </div>
                                <div className="col-auto me-auto">

                                {/* <!-- Rate --> */}
                                <div className="rate">
                                    <a className="rate-item" data-toggle="vote" data-count="2" href="#" role="button">
                                    <i className="fe fe-thumbs-up"></i>
                                    </a>
                                    <a className="rate-item" data-toggle="vote" data-count="1" href="#" role="button">
                                    <i className="fe fe-thumbs-down"></i>
                                    </a>
                                </div>

                                </div>
                                <div className="col-auto d-none d-lg-block">

                                {/* <!-- Text --> */}
                                <p className="mb-0 fs-sm">Comments (1)</p>

                                </div>
                                <div className="col-auto">

                                {/* <!-- Button --> */}
                                <a className="btn btn-xs btn-outline-border" href="#!">
                                    Comment
                                </a>

                                </div>
                            </div>

                            </div>
                        </div>
                        </div>

                        {/* <!-- Child review --> */}
                        <div className="review review-child">
                        <div className="review-body">

                            {/* <!-- Content --> */}
                            <div className="row">
                            <div className="col-12 col-md-auto">

                                {/* <!-- Avatar --> */}
                                <div className="avatar avatar-xxl mb-6 mb-md-0">
                                <span className="avatar-title rounded-circle">
                                    <i className="fa fa-user"></i>
                                </span>
                                </div>

                            </div>
                            <div className="col-12 col-md">

                                {/* <!-- Header --> */}
                                <div className="row mb-6">
                                <div className="col-12">

                                    {/* <!-- Rating --> */}
                                    <div className="rating fs-sm text-dark" data-value="4">
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
                                <div className="col-12">

                                    {/* <!-- Time --> */}
                                    <span className="fs-xs text-muted">
                                    William Stokes, <time datetime="2019-07-14">14 Jul 2019</time>
                                    </span>

                                </div>
                                </div>

                                {/* <!-- Title --> */}
                                <p className="mb-2 fs-lg fw-bold">
                                Very good
                                </p>

                                {/* <!-- Text --> */}
                                <p className="text-gray-500">
                                Made face lights yielding forth created for image behold blessed seas.
                                </p>

                                {/* <!-- Footer --> */}
                                <div className="row align-items-center">
                                <div className="col-auto d-none d-lg-block">

                                    {/* <!-- Text --> */}
                                    <p className="mb-0 fs-sm">Was this review helpful?</p>

                                </div>
                                <div className="col-auto me-auto">

                                    {/* <!-- Rate --> */}
                                    <div className="rate">
                                    <a className="rate-item" data-toggle="vote" data-count="7" href="#" role="button">
                                        <i className="fe fe-thumbs-up"></i>
                                    </a>
                                    <a className="rate-item" data-toggle="vote" data-count="0" href="#" role="button">
                                        <i className="fe fe-thumbs-down"></i>
                                    </a>
                                    </div>

                                </div>
                                <div className="col-auto d-none d-lg-block">

                                    {/* <!-- Text --> */}
                                    <p className="mb-0 fs-sm">Comments (0)</p>

                                </div>
                                <div className="col-auto">

                                    {/* <!-- Button --> */}
                                    <a className="btn btn-xs btn-outline-border" href="#!">
                                    Comment
                                    </a>

                                </div>
                                </div>

                            </div>
                            </div>

                        </div>
                        </div>

                    </div>

                    </div>

                    {/* <!-- Pagination --> */}
                    <nav className="d-flex justify-content-center mt-9">
                    <ul className="pagination pagination-sm text-gray-400">
                        <li className="page-item">
                        <a className="page-link page-link-arrow" href="#">
                            <i className="fa fa-caret-left"></i>
                        </a>
                        </li>
                        <li className="page-item active">
                        <a className="page-link" href="#">1</a>
                        </li>
                        <li className="page-item">
                        <a className="page-link" href="#">2</a>
                        </li>
                        <li className="page-item">
                        <a className="page-link" href="#">3</a>
                        </li>
                        <li className="page-item">
                        <a className="page-link page-link-arrow" href="#">
                            <i className="fa fa-caret-right"></i>
                        </a>
                        </li>
                    </ul>
                    </nav>

                </div>
                </div>
            </div>
            </section>

            {/* <!-- FEATURES --> */}
            <section className="bg-light py-9">
            <div className="container">
                <div className="row">
                <div className="col-12 col-md-6 col-lg-3">

                    {/* <!-- Item --> */}
                    <div className="d-flex mb-6 mb-lg-0">

                    {/* <!-- Icon --> */}
                    <i className="fe fe-truck fs-lg text-primary"></i>

                    {/* {/* <!-- Body --> */}
                    <div className="ms-6">

                        {/* <!-- Heading --> */}
                        <h6 className="heading-xxs mb-1">
                        Free shipping
                        </h6>

                        {/* {/* <!-- Text --> */}
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

                    {/* {/* <!-- Body --> */}
                    <div className="ms-6">

                        {/* <!-- Heading --> */}
                        <h6 className="mb-1 heading-xxs">
                        Free returns
                        </h6>

                        {/* {/* <!-- Text --> */}
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

                    {/* {/* <!-- Body --> */}
                    <div className="ms-6">

                        {/* <!-- Heading --> */}
                        <h6 className="mb-1 heading-xxs">
                        Secure shopping
                        </h6>

                        {/* {/* <!-- Text --> */}
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

                    {/* {/* <!-- Body --> */}
                    <div className="ms-6">

                        {/* <!-- Heading --> */}
                        <h6 className="mb-1 heading-xxs">
                        Over 10,000 Styles
                        </h6>

                        {/* {/* <!-- Text --> */}
                        <p className="mb-0 fs-sm text-muted">
                        We have everything you need
                        </p>

                    </div>

                    </div>

                </div>
                </div>
            </div>
            </section>

            {/* {/* <!-- Footer --> */}
            <Footer />

            {/* <!-- JAVASCRIPT --> */}
            <Scripts />

        </div>
    );
};

export default Austin_Powers_Mojo;