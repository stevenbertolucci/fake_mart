import Footer from "../../components/footers/footer";
import Head from "../../components/head";
import Promo from "../../components/misc/promo";
import Modals from "../../components/modal";
import Navbar from "../../components/navbars/navbar";
import NavbarTopbar from "../../components/navbars/navbar-topbar";
import Scripts from "../../components/scripts";
import { Link } from "react-router-dom";

const Products = () => {
    return (
        <div>
            <head>
                <Head />
            </head>

            {/* <!-- MODALS --> */}
            <Modals />

            {/* <!-- NAVBAR --> */}
            <NavbarTopbar />

            {/* <!-- NAVBAR --> */}
            <Navbar />

            {/* <!-- PROMO --> */}
            <Promo />

            {/* <!-- BREADCRUMB --> */}
            <nav className="my-5">
            <div className="container">
                <div className="row">
                <div className="col-12">

                    {/* <!-- BREADCRUMB --> */}
                    <ol className="breadcrumb mb-0 fs-xs text-gray-400">
                    <li className="breadcrumb-item">
                        <Link className="text-reset" to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">
                        Women's Clothing
                    </li>
                    </ol>

                </div>
                </div>
            </div>
            </nav>

            {/* <!-- CONTENT --> */}
            <section className="pt-7 pb-12">
            <div className="container">
                <div className="row">
                <div className="col-12">

                    {/* <!-- Heading --> */}
                    <h3 className="mb-10 text-center">Women's Clothing</h3>

                </div>
                </div>
                <div className="row">
                <div className="col-12">

                    {/* <!-- Filters --> */}
                    <div className="btn-group-justified btn-group-expand-lg mb-10" role="group">
                    <div className="btn-group dropdown">

                        {/* <!-- Toggle --> */}
                        <button className="btn btn-sm w-100 btn-outline-border dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" data-bs-auto-close="outside">
                        Sort by
                        </button>

                        {/* <!-- Menu --> */}
                        <form className="dropdown-menu">
                        <div className="card">
                            <div className="card-body">

                            {/* <!-- Form group--> */}
                            <div className="form-group-overflow">
                                <div className="form-check form-check-text mb-3">
                                <input className="form-check-input" id="sortOne" name="sort" type="radio" value="Default"/>
                                <label className="form-check-label" for="sortOne">Default</label>
                                </div>
                                <div className="form-check form-check-text mb-3">
                                <input className="form-check-input" id="sortTwo" name="sort" type="radio" value="Newest"/>
                                <label className="form-check-label" for="sortTwo">Newest</label>
                                </div>
                                <div className="form-check form-check-text mb-3">
                                <input className="form-check-input" id="sortThree" name="sort" type="radio" value="Most Popular"/>
                                <label className="form-check-label" for="sortThree">Most Popular</label>
                                </div>
                                <div className="form-check form-check-text mb-3">
                                <input className="form-check-input" id="sortFour" name="sort" type="radio" value="Default Price"/>
                                <label className="form-check-label" for="sortFour">Default Price</label>
                                </div>
                                <div className="form-check form-check-text">
                                <input className="form-check-input" id="sortFive" name="sort" type="radio" value="Highest Price"/>
                                <label className="form-check-label" for="sortFive">Highest Price</label>
                                </div>
                            </div>

                            </div>
                        </div>
                        </form>

                    </div>
                    <div className="btn-group dropdown">

                        {/* <!-- Toggle --> */}
                        <button className="btn btn-sm w-100 btn-outline-border dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" data-bs-auto-close="outside">
                        Category
                        </button>

                        {/* <!-- Menu --> */}
                        <form className="dropdown-menu">
                        <div className="card">
                            <div className="card-body">

                            {/* <!-- Form group--> */}
                            <div className="form-group-overflow">
                                <div className="form-check mb-3">
                                <input className="form-check-input" id="categoryOne" name="category" type="checkbox" value="All Products"/>
                                <label className="form-check-label" for="categoryOne">All Products</label>
                                </div>
                                <div className="form-check mb-3">
                                <input className="form-check-input" id="categoryTwo" name="category" type="checkbox" value="Blouses and Shirts"/>
                                <label className="form-check-label" for="categoryTwo">Blouses and Shirts</label>
                                </div>
                                <div className="form-check mb-3">
                                <input className="form-check-input" id="categoryThree" name="category" type="checkbox" value="Coats and Jackets"/>
                                <label className="form-check-label" for="categoryThree">Coats and Jackets</label>
                                </div>
                                <div className="form-check mb-3">
                                <input className="form-check-input" id="categoryFour" name="category" type="checkbox" value="Dresses"/>
                                <label className="form-check-label" for="categoryFour">Dresses</label>
                                </div>
                                <div className="form-check mb-3">
                                <input className="form-check-input" id="categoryFive" name="category" type="checkbox" value="Hoodies and Sweats"/>
                                <label className="form-check-label" for="categoryFive">Hoodies and Sweats</label>
                                </div>
                                <div className="form-check mb-3">
                                <input className="form-check-input" id="categorySix" name="category" type="checkbox" value="Denim"/>
                                <label className="form-check-label" for="categorySix">Denim</label>
                                </div>
                                <div className="form-check mb-3">
                                <input className="form-check-input" id="categorySeven" name="category" type="checkbox" value="Hoodies and Sweats"/>
                                <label className="form-check-label" for="categorySeven">Hoodies and Sweats</label>
                                </div>
                                <div className="form-check mb-3">
                                <input className="form-check-input" id="categoryEight" name="category" type="checkbox" value="Jeans"/>
                                <label className="form-check-label" for="categoryEight">Jeans</label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" id="categoryNine" name="category" type="checkbox" value="Jumpers and Cardigans"/>
                                <label className="form-check-label" for="categoryNine">Jumpers and Cardigans</label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" id="categoryTen" name="category" type="checkbox" value="Leggings"/>
                                <label className="form-check-label" for="categoryTen">Leggings</label>
                                </div>
                            </div>

                            </div>
                            <div className="card-footer d-flex flex-nowrap border-top">

                            {/* <!-- Buttons--> */}
                            <button className="btn btn-outline-dark btn-sm" type="reset">
                                Clear
                            </button>
                            <button className="btn btn-dark btn-sm ms-2" type="submit">
                                Show Results
                            </button>

                            </div>
                        </div>
                        </form>

                    </div>
                    <div className="btn-group dropdown">

                        {/* <!-- Toggle --> */}
                        <button className="btn btn-sm w-100 btn-outline-border dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" data-bs-auto-close="outside">
                        Season
                        </button>

                        {/* <!-- Menu --> */}
                        <form className="dropdown-menu">
                        <div className="card">
                            <div className="card-body">

                            {/* <!-- Form group--> */}
                            <div className="form-group-overflow">
                                <div className="form-check mb-3">
                                <input className="form-check-input" id="seasonOne" name="category" type="checkbox" value="Summer"/>
                                <label className="form-check-label" for="seasonOne">Summer</label>
                                </div>
                                <div className="form-check mb-3">
                                <input className="form-check-input" id="seasonTwo" name="category" type="checkbox" value="Winter"/>
                                <label className="form-check-label" for="seasonTwo">Winter</label>
                                </div>
                                <div className="form-check mb-3">
                                <input className="form-check-input" id="seasonThree" name="category" type="checkbox" value="Spring & Fall"/>
                                <label className="form-check-label" for="seasonThree">Spring & Fall</label>
                                </div>
                            </div>

                            </div>
                            <div className="card-footer d-flex flex-nowrap border-top">

                            {/* <!-- Buttons--> */}
                            <button className="btn btn-outline-dark btn-sm" type="reset">
                                Clear
                            </button>
                            <button className="btn btn-dark btn-sm ms-2" type="submit">
                                Show Results
                            </button>

                            </div>
                        </div>
                        </form>

                    </div>
                    <div className="btn-group dropdown">

                        {/* <!-- Toggle --> */}
                        <button className="btn btn-sm w-100 btn-outline-border dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" data-bs-auto-close="outside">
                        Size
                        </button>

                        {/* <!-- Menu --> */}
                        <form className="dropdown-menu">
                        <div className="card">
                            <div className="card-body">

                            {/* <!-- Form group--> */}
                            <div className="form-group-overflow">
                                <div className="form-check form-check-inline form-check-size mb-2">
                                <input className="form-check-input" id="sizeOne" type="checkbox"/>
                                <label className="form-check-label" for="sizeOne">
                                    3XS
                                </label>
                                </div>
                                <div className="form-check form-check-inline form-check-size mb-2">
                                <input className="form-check-input" id="sizeTwo" type="checkbox" disabled/>
                                <label className="form-check-label" for="sizeTwo">
                                    2XS
                                </label>
                                </div>
                                <div className="form-check form-check-inline form-check-size mb-2">
                                <input className="form-check-input" id="sizeThree" type="checkbox"/>
                                <label className="form-check-label" for="sizeThree">
                                    XS
                                </label>
                                </div>
                                <div className="form-check form-check-inline form-check-size mb-2">
                                <input className="form-check-input" id="sizeFour" type="checkbox"/>
                                <label className="form-check-label" for="sizeFour">
                                    S
                                </label>
                                </div>
                                <div className="form-check form-check-inline form-check-size mb-2">
                                <input className="form-check-input" id="sizeFive" type="checkbox"/>
                                <label className="form-check-label" for="sizeFive">
                                    M
                                </label>
                                </div>
                                <div className="form-check form-check-inline form-check-size mb-2">
                                <input className="form-check-input" id="sizeSix" type="checkbox"/>
                                <label className="form-check-label" for="sizeSix">
                                    L
                                </label>
                                </div>
                                <div className="form-check form-check-inline form-check-size mb-2">
                                <input className="form-check-input" id="sizeSeven" type="checkbox"/>
                                <label className="form-check-label" for="sizeSeven">
                                    XL
                                </label>
                                </div>
                                <div className="form-check form-check-inline form-check-size mb-2">
                                <input className="form-check-input" id="sizeEight" type="checkbox" disabled/>
                                <label className="form-check-label" for="sizeEight">
                                    2XL
                                </label>
                                </div>
                                <div className="form-check form-check-inline form-check-size mb-2">
                                <input className="form-check-input" id="sizeNine" type="checkbox"/>
                                <label className="form-check-label" for="sizeNine">
                                    3XL
                                </label>
                                </div>
                                <div className="form-check form-check-inline form-check-size mb-2">
                                <input className="form-check-input" id="sizeTen" type="checkbox"/>
                                <label className="form-check-label" for="sizeTen">
                                    4XL
                                </label>
                                </div>
                                <div className="form-check form-check-inline form-check-size mb-2">
                                <input className="form-check-input" id="sizeEleven" type="checkbox"/>
                                <label className="form-check-label" for="sizeEleven">
                                    One Size
                                </label>
                                </div>
                            </div>

                            </div>
                            <div className="card-footer d-flex flex-nowrap border-top">

                            {/* <!-- Buttons--> */}
                            <button className="btn btn-outline-dark btn-sm" type="reset">
                                Clear
                            </button>
                            <button className="btn btn-dark btn-sm ms-2" type="submit">
                                Show Results
                            </button>

                            </div>
                        </div>
                        </form>

                    </div>
                    <div className="btn-group dropdown">

                        {/* <!-- Toggle --> */}
                        <button className="btn btn-sm w-100 btn-outline-border dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" data-bs-auto-close="outside">
                        Color
                        </button>

                        {/* <!-- Menu --> */}
                        <form className="dropdown-menu">
                        <div className="card">
                            <div className="card-body">

                            {/* <!-- Form group--> */}
                            <div className="form-group-overflow">
                                <div className="form-check form-check-color mb-3">
                                <input className="form-check-input" id="colorOne" type="checkbox" style={{backgroundColor: '#1f1f1f'}}/>
                                <label className="form-check-label text-body" for="colorOne">
                                    Black
                                </label>
                                </div>
                                <div className="form-check form-check-color mb-3">
                                <input className="form-check-input" id="colorTwo" type="checkbox" style={{backgroundColor: '#f9f9f9'}}/>
                                <label className="form-check-label text-body" for="colorTwo">
                                    White
                                </label>
                                </div>
                                <div className="form-check form-check-color mb-3">
                                <input className="form-check-input" id="colorThree" type="checkbox" style={{backgroundColor: '#3b86ff'}}/>
                                <label className="form-check-label text-body" for="colorThree">
                                    Blue
                                </label>
                                </div>
                                <div className="form-check form-check-color mb-3">
                                <input className="form-check-input" id="colorFour" type="checkbox" style={{backgroundColor: '#ff6f61'}}/>
                                <label className="form-check-label text-body" for="colorFour">
                                    Red
                                </label>
                                </div>
                                <div className="form-check form-check-color mb-3">
                                <input className="form-check-input" id="colorFive" type="checkbox" style={{backgroundColor: '#795548'}} disabled/>
                                <label className="form-check-label text-body" for="colorFive">
                                    Brown
                                </label>
                                </div>
                                <div className="form-check form-check-color mb-3">
                                <input className="form-check-input" id="colorSix" type="checkbox" style={{backgroundColor: '#bababa'}}/>
                                <label className="form-check-label text-body" for="colorSix">
                                    Gray
                                </label>
                                </div>
                                <div className="form-check form-check-color mb-3">
                                <input className="form-check-input" id="colorSeven" type="checkbox" style={{backgroundColor: '#17a2b8'}}/>
                                <label className="form-check-label text-body" for="colorSeven">
                                    Cyan
                                </label>
                                </div>
                                <div className="form-check form-check-color">
                                <input className="form-check-input" id="colorEight" type="checkbox" style={{backgroundColor: '#e83e8c'}}/>
                                <label className="form-check-label text-body" for="colorEight">
                                    Pink
                                </label>
                                </div>
                            </div>

                            </div>
                            <div className="card-footer d-flex flex-nowrap border-top">

                            {/* <!-- Buttons--> */}
                            <button className="btn btn-outline-dark btn-sm" type="reset">
                                Clear
                            </button>
                            <button className="btn btn-dark btn-sm ms-2" type="submit">
                                Show Results
                            </button>

                            </div>
                        </div>
                        </form>

                    </div>
                    <div className="btn-group dropdown">

                        {/* <!-- Toggle --> */}
                        <button className="btn btn-sm w-100 btn-outline-border dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" data-bs-auto-close="outside">
                        Brand
                        </button>

                        {/* <!-- Menu --> */}
                        <form className="dropdown-menu">
                        <div className="card">
                            <div className="card-body">

                            {/* <!-- Search --> */}
                            <div data-list='{"valueNames": ["name"]}'>

                                {/* <!-- Input group --> */}
                                <div className="input-group input-group-merge mb-6">
                                <input className="form-control form-control-xs search" type="search" placeholder="Search Brand"/>

                                {/* <!-- Button --> */}
                                <div className="input-group-append">
                                    <button className="btn btn-outline-border btn-xs">
                                    <i className="fe fe-search"></i>
                                    </button>
                                </div>

                                </div>

                                {/* <!-- Form group--> */}
                                <div className="form-group-overflow" id="brandGroup">
                                <div className="list">
                                    <div className="form-check mb-3">
                                    <input className="form-check-input" id="brandOne" type="checkbox"/>
                                    <label className="form-check-label name" for="brandOne">
                                        Dsquared2
                                    </label>
                                    </div>
                                    <div className="form-check mb-3">
                                    <input className="form-check-input" id="brandTwo" type="checkbox" disabled/>
                                    <label className="form-check-label name" for="brandTwo">
                                        Alexander McQueen
                                    </label>
                                    </div>
                                    <div className="form-check mb-3">
                                    <input className="form-check-input" id="brandThree" type="checkbox"/>
                                    <label className="form-check-label name" for="brandThree">
                                        Balenciaga
                                    </label>
                                    </div>
                                    <div className="form-check mb-3">
                                    <input className="form-check-input" id="brandFour" type="checkbox"/>
                                    <label className="form-check-label name" for="brandFour">
                                        Adidas
                                    </label>
                                    </div>
                                    <div className="form-check mb-3">
                                    <input className="form-check-input" id="brandFive" type="checkbox"/>
                                    <label className="form-check-label name" for="brandFive">
                                        Balmain
                                    </label>
                                    </div>
                                    <div className="form-check mb-3">
                                    <input className="form-check-input" id="brandSix" type="checkbox"/>
                                    <label className="form-check-label name" for="brandSix">
                                        Burberry
                                    </label>
                                    </div>
                                    <div className="form-check mb-3">
                                    <input className="form-check-input" id="brandSeven" type="checkbox"/>
                                    <label className="form-check-label name" for="brandSeven">
                                        Chloé
                                    </label>
                                    </div>
                                    <div className="form-check mb-3">
                                    <input className="form-check-input" id="brandEight" type="checkbox"/>
                                    <label className="form-check-label name" for="brandEight">
                                        Kenzo
                                    </label>
                                    </div>
                                    <div className="form-check">
                                    <input className="form-check-input" id="brandNine" type="checkbox"/>
                                    <label className="form-check-label name" for="brandNine">
                                        Givenchy
                                    </label>
                                    </div>
                                </div>
                                </div>

                            </div>

                            </div>
                            <div className="card-footer d-flex flex-nowrap border-top">

                            {/* <!-- Buttons--> */}
                            <button className="btn btn-outline-dark btn-sm" type="reset">
                                Clear
                            </button>
                            <button className="btn btn-dark btn-sm ms-2" type="submit">
                                Show Results
                            </button>

                            </div>
                        </div>
                        </form>

                    </div>
                    <div className="btn-group dropdown">

                        {/* <!-- Toggle --> */}
                        <button className="btn btn-sm w-100 btn-outline-border dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" data-bs-auto-close="outside">
                        Price
                        </button>

                        {/* <!-- Menu --> */}
                        <form className="dropdown-menu">
                        <div className="card">
                            <div className="card-body">

                            {/* <!-- Form group--> */}
                            <div className="form-group-overflow">
                                <div className="form-check mb-3">
                                <input className="form-check-input" id="priceOne" type="checkbox"/>
                                <label className="form-check-label" for="priceOne">
                                    $10.00 - $49.00
                                </label>
                                </div>
                                <div className="form-check mb-3">
                                <input className="form-check-input" id="priceTwo" type="checkbox"/>
                                <label className="form-check-label" for="priceTwo">
                                    $50.00 - $99.00
                                </label>
                                </div>
                                <div className="form-check mb-3">
                                <input className="form-check-input" id="priceThree" type="checkbox"/>
                                <label className="form-check-label" for="priceThree">
                                    $100.00 - $199.00
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" id="priceFour" type="checkbox"/>
                                <label className="form-check-label" for="priceFour">
                                    $200.00 and Up
                                </label>
                                </div>
                            </div>

                            </div>
                            <div className="card-footer d-flex flex-nowrap border-top">

                            {/* <!-- Buttons--> */}
                            <button className="btn btn-outline-dark btn-sm" type="reset">
                                Clear
                            </button>
                            <button className="btn btn-dark btn-sm ms-2" type="submit">
                                Show Results
                            </button>

                            </div>
                        </div>
                        </form>

                    </div>
                    </div>

                </div>
                </div>
                <div className="row">
                <div className="col-6 col-sm-6 col-md-4 col-lg-3">

                    {/* <!-- Card --> */}
                    <div className="card mb-7" data-toggle="card-collapse">

                    {/* <!-- Badge --> */}
                    <div className="badge bg-white text-body card-badge card-badge-start text-uppercase">
                        New
                    </div>

                    {/* <!-- Image --> */}
                    <div className="card-img" data-flickity='{"draggable": false}' id="productOneImg">
                        <a className="d-block w-100" href="product.html">
                        <img className="card-img-top" src="assets/img/products/product-5.jpg" alt="..." />
                        </a>
                        <a className="d-block w-100" href="product.html">
                        <img className="card-img-top" src="assets/img/products/product-142.jpg" alt="..." />
                        </a>
                    </div>

                    {/* <!-- Collapse --> */}
                    <div className="card-collapse-parent">

                        {/* <!-- Body --> */}
                        <div className="card-body px-0 pb-0 bg-white">
                        <div className="row gx-0">
                            <div className="col">

                            {/* <!-- Title --> */}
                            <a className="d-block fw-bold text-body" href="product.html">
                                Leather mid-heel Sandals
                            </a>

                            {/* <!-- Category --> */}
                            <a className="fs-xs text-muted" href="shop.html">
                                Shoes
                            </a>

                            </div>
                            <div className="col-auto">

                            {/* <!-- Price --> */}
                            <div className="fs-sm fw-bold text-muted">
                                $129.00
                            </div>

                            </div>
                        </div>
                        </div>

                        {/* <!-- Footer --> */}
                        <div className="card-collapse collapse">
                        <div className="card-footer px-0 bg-white">
                            <form>
                            <div className="mb-1">
                                <div className="form-check form-check-inline form-check-color">
                                <input type="radio" id="productOneColorOne" name="productOneColor" className="form-check-input" data-toggle="flickity" data-target="#productOneImg" data-slide="0" style={{backgroundColor: 'beige'}} checked />
                                </div>
                                <div className="form-check form-check-inline form-check-color ms-n2">
                                <input type="radio" id="productOneColorTwo" name="productOneColor" className="form-check-input" data-toggle="flickity" data-target="#productOneImg" data-slide="1" style={{backgroundColor: 'black'}} />
                                </div>
                            </div>
                            <div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productOneSizeOne" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productOneSizeOne">6</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productOneSizeTwo" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productOneSizeTwo">6.5</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productOneSizeThree" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productOneSizeThree">7</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productOneSizeFour" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productOneSizeFour">7.5</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productOneSizeFive" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productOneSizeFive">8.5</label>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>

                    </div>

                    </div>

                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3">

                    {/* <!-- Card --> */}
                    <div className="card mb-7" data-toggle="card-collapse">

                    {/* <!-- Image --> */}
                    <div className="card-img" data-flickity='{"draggable": false}' id="productTwoImg">
                        <a className="d-block w-100" href="product.html">
                        <img className="card-img-top" src="assets/img/products/product-6.jpg" alt="..." />
                        </a>
                        <a className="d-block w-100" href="product.html">
                        <img className="card-img-top" src="assets/img/products/product-143.jpg" alt="..." />
                        </a>
                    </div>

                    {/* <!-- Collapse --> */}
                    <div className="card-collapse-parent">

                        {/* <!-- Body --> */}
                        <div className="card-body px-0 pb-0 bg-white">
                        <div className="row gx-0">
                            <div className="col">

                            {/* <!-- Title --> */}
                            <a className="d-block fw-bold text-body" href="product.html">
                                Cotton floral print Dress
                            </a>

                            {/* <!-- Category --> */}
                            <a className="fs-xs text-muted" href="shop.html">
                                Dresses
                            </a>

                            </div>
                            <div className="col-auto">

                            {/* <!-- Price --> */}
                            <div className="fs-sm fw-bold text-muted">
                                $40.00
                            </div>

                            </div>
                        </div>
                        </div>

                        {/* <!-- Footer --> */}
                        <div className="card-collapse collapse">
                        <div className="card-footer px-0 bg-white">
                            <form>
                            <div className="mb-1">
                                <div className="form-check form-check-inline form-check-color">
                                <input type="radio" id="productTwoColorOne" name="productTwoColor" className="form-check-input" data-toggle="flickity" data-target="#productTwoImg" data-slide="0" style={{backgroundColor: 'red'}} checked />
                                </div>
                                <div className="form-check form-check-inline form-check-color ms-n2">
                                <input type="radio" id="productTwoColorTwo" name="productTwoColor" className="form-check-input" data-toggle="flickity" data-target="#productTwoImg" data-slide="1" style={{backgroundColor: 'white'}} />
                                </div>
                            </div>
                            <div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productTwoSizeOne" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productTwoSizeOne">6</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productTwoSizeTwo" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productTwoSizeTwo">6.5</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productTwoSizeThree" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productTwoSizeThree">7</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productTwoSizeFour" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productTwoSizeFour">7.5</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productTwoSizeFive" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productTwoSizeFive">8.5</label>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>

                    </div>

                    </div>

                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3">

                    {/* <!-- Card --> */}
                    <div className="card mb-7" data-toggle="card-collapse">

                    {/* <!-- Badge --> */}
                    <div className="badge bg-dark card-badge card-badge-start text-uppercase letter-spacing-lg">
                        Sale
                    </div>

                    {/* <!-- Image --> */}
                    <img className="card-img-top" src="assets/img/products/product-7.jpg" alt="..." />

                    {/* <!-- Collapse --> */}
                    <div className="card-collapse-parent">

                        {/* <!-- Body --> */}
                        <div className="card-body px-0 pb-0 bg-white">
                        <div className="row gx-0">
                            <div className="col">

                            {/* <!-- Title --> */}
                            <a className="d-block fw-bold text-body" href="product.html">
                                Leather Sneakers
                            </a>

                            {/* <!-- Category --> */}
                            <a className="fs-xs text-muted" href="shop.html">
                                Shoes
                            </a>

                            </div>
                            <div className="col-auto">

                            {/* <!-- Price --> */}
                            <div className="fs-xs fw-bold text-gray-350 text-decoration-line-through">
                                $115.00
                            </div>
                            <div className="fs-sm fw-bold text-primary">
                                $85.00
                            </div>

                            </div>
                        </div>
                        </div>

                        {/* <!-- Footer --> */}
                        <div className="card-collapse collapse">
                        <div className="card-footer px-0 bg-white">
                            <form>
                            <div className="mb-1">
                                <div className="form-check form-check-inline form-check-color">
                                <input type="radio" id="productThreeColorOne" name="productThreeColor" className="form-check-input" style={{backgroundColor: '#f9f9f9'}} checked />
                                </div>
                            </div>
                            <div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productThreeSizeOne" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productThreeSizeOne">6</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productThreeSizeTwo" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productThreeSizeTwo">6.5</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productThreeSizeThree" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productThreeSizeThree">7</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productThreeSizeFour" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productThreeSizeFour">7.5</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productThreeSizeFive" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productThreeSizeFive">8.5</label>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>

                    </div>

                    </div>

                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3">

                    {/* <!-- Card --> */}
                    <div className="card mb-7" data-toggle="card-collapse">

                    {/* <!-- Image --> */}
                    <img className="card-img-top" src="assets/img/products/product-8.jpg" alt="..." />

                    {/* <!-- Collapse --> */}
                    <div className="card-collapse-parent">

                        {/* <!-- Body --> */}
                        <div className="card-body px-0 pb-0 bg-white">
                        <div className="row gx-0">
                            <div className="col">

                            {/* <!-- Title --> */}
                            <a className="d-block fw-bold text-body" href="product.html">
                                Cropped cotton Top
                            </a>

                            {/* <!-- Category --> */}
                            <a className="fs-xs text-muted" href="shop.html">
                                Top
                            </a>

                            </div>
                            <div className="col-auto">

                            {/* <!-- Price --> */}
                            <div className="fs-sm fw-bold text-muted">
                                $29.00
                            </div>

                            </div>
                        </div>
                        </div>

                        {/* <!-- Footer --> */}
                        <div className="card-collapse collapse">
                        <div className="card-footer px-0 bg-white">
                            <form>
                            <div className="mb-1">
                                <div className="form-check form-check-inline form-check-color">
                                <input type="radio" id="productFourColorOne" name="productFourColor" className="form-check-input" style={{backgroundColor: '#f9f9f9'}} checked />
                                </div>
                            </div>
                            <div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productFourSizeOne" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productFourSizeOne">6</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productFourSizeTwo" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productFourSizeTwo">6.5</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productFourSizeThree" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productFourSizeThree">7</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productFourSizeFour" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productFourSizeFour">7.5</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productFourSizeFive" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productFourSizeFive">8.5</label>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>

                    </div>

                    </div>

                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3">

                    {/* <!-- Card --> */}
                    <div className="card mb-7" data-toggle="card-collapse">

                    {/* <!-- Image --> */}
                    <img className="card-img-top" src="assets/img/products/product-9.jpg" alt="..." />

                    {/* <!-- Collapse --> */}
                    <div className="card-collapse-parent">

                        {/* <!-- Body --> */}
                        <div className="card-body px-0 pb-0 bg-white">
                        <div className="row gx-0">
                            <div className="col">

                            {/* <!-- Title --> */}
                            <a className="d-block fw-bold text-body" href="product.html">
                                Floral print midi Dress
                            </a>

                            {/* <!-- Category --> */}
                            <a className="fs-xs text-muted" href="shop.html">
                                Dresses
                            </a>

                            </div>
                            <div className="col-auto">

                            {/* <!-- Price --> */}
                            <div className="fs-sm fw-bold text-muted">
                                $50.00
                            </div>

                            </div>
                        </div>
                        </div>

                        {/* <!-- Footer --> */}
                        <div className="card-collapse collapse">
                        <div className="card-footer px-0 bg-white">
                            <form>
                            <div className="mb-1">
                                <div className="form-check form-check-inline form-check-color">
                                <input type="radio" id="productFiveColorOne" name="productFiveColor" className="form-check-input" style={{backgroundColor: 'yellow'}} checked/>
                                </div>
                            </div>
                            <div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productFiveSizeOne" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productFiveSizeOne">6</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productFiveSizeTwo" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productFiveSizeTwo">6.5</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productFiveSizeThree" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productFiveSizeThree">7</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productFiveSizeFour" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productFiveSizeFour">7.5</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productFiveSizeFive" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productFiveSizeFive">8.5</label>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>

                    </div>

                    </div>

                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3">

                    {/* <!-- Card --> */}
                    <div className="card mb-7" data-toggle="card-collapse">

                    {/* <!-- Badge --> */}
                    <div className="badge bg-dark card-badge card-badge-start text-uppercase letter-spacing-lg">
                        Sale
                    </div>

                    {/* <!-- Image --> */}
                    <div className="card-img" data-flickity='{"draggable": false}' id="productSixImg">
                        <a className="d-block w-100" href="product.html">
                        <img className="card-img-top" src="assets/img/products/product-10.jpg" alt="..." />
                        </a>
                        <a className="d-block w-100" href="product.html">
                        <img className="card-img-top" src="assets/img/products/product-144.jpg" alt="..." />
                        </a>
                    </div>

                    {/* <!-- Collapse --> */}
                    <div className="card-collapse-parent">

                        {/* <!-- Body --> */}
                        <div className="card-body px-0 pb-0 bg-white">
                        <div className="row gx-0">
                            <div className="col">

                            {/* <!-- Title --> */}
                            <a className="d-block fw-bold text-body" href="product.html">
                                Suede cross body Bag
                            </a>

                            {/* <!-- Category --> */}
                            <a className="fs-xs text-muted" href="shop.html">
                                Bags
                            </a>

                            </div>
                            <div className="col-auto">

                            {/* <!-- Price --> */}
                            <div className="fs-xs fw-bold text-gray-350 text-decoration-line-through">
                                $79.00
                            </div>
                            <div className="fs-sm fw-bold text-primary">
                                $49.00
                            </div>

                            </div>
                        </div>
                        </div>

                        {/* <!-- Footer --> */}
                        <div className="card-collapse collapse">
                        <div className="card-footer px-0 bg-white">
                            <form>
                            <div className="mb-1">
                                <div className="form-check form-check-inline form-check-color">
                                <input type="radio" id="productSixColorOne" name="productSixColor" className="form-check-input" data-toggle="flickity" data-target="#productSixImg" data-slide="0" style={{backgroundColor: 'beige' }} checked/>
                                </div>
                                <div className="form-check form-check-inline form-check-color ms-n2">
                                <input type="radio" id="productSixColorTwo" name="productSixColor" className="form-check-input" data-toggle="flickity" data-target="#productSixImg" data-slide="1" style={{backgroundColor: 'black'}} />
                                </div>
                            </div>
                            <div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productSixSizeOne" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productSixSizeOne">6</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productSixSizeTwo" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productSixSizeTwo">6.5</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productSixSizeThree" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productSixSizeThree">7</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productSixSizeFour" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productSixSizeFour">7.5</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productSixSizeFive" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productSixSizeFive">8.5</label>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>

                    </div>

                    </div>

                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3">

                    {/* <!-- Card --> */}
                    <div className="card mb-7" data-toggle="card-collapse">

                    {/* <!-- Image --> */}
                    <img className="card-img-top" src="assets/img/products/product-11.jpg" alt="..." />

                    {/* <!-- Collapse --> */}
                    <div className="card-collapse-parent">

                        {/* <!-- Body --> */}
                        <div className="card-body px-0 pb-0 bg-white">
                        <div className="row gx-0">
                            <div className="col">

                            {/* <!-- Title --> */}
                            <a className="d-block fw-bold text-body" href="product.html">
                                Printed A-line Skirt
                            </a>

                            {/* <!-- Category --> */}
                            <a className="fs-xs text-muted" href="shop.html">
                                Skirts
                            </a>

                            </div>
                            <div className="col-auto">

                            {/* <!-- Price --> */}
                            <div className="fs-sm fw-bold text-muted">
                                $79.00
                            </div>

                            </div>
                        </div>
                        </div>

                        {/* <!-- Footer --> */}
                        <div className="card-collapse collapse">
                        <div className="card-footer px-0 bg-white">
                            <form>
                            <div className="mb-1">
                                <div className="form-check form-check-inline form-check-color">
                                <input type="radio" id="productSevenColorOne" name="productSevenColor" className="form-check-input" style={{backgroundColor: 'black' }} checked />
                                </div>
                            </div>
                            <div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productSevenSizeOne" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productSevenSizeOne">6</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productSevenSizeTwo" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productSevenSizeTwo">6.5</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productSevenSizeThree" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productSevenSizeThree">7</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productSevenSizeFour" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productSevenSizeFour">7.5</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productSevenSizeFive" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productSevenSizeFive">8.5</label>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>

                    </div>

                    </div>

                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3">

                    {/* <!-- Card --> */}
                    <div className="card mb-7" data-toggle="card-collapse">

                    {/* <!-- Badge --> */}
                    <div className="badge bg-white text-body card-badge card-badge-start text-uppercase">
                        New
                    </div>

                    {/* <!-- Image --> */}
                    <div className="card-img" data-flickity='{"draggable": false}' id="productEightImg">
                        <a className="d-block w-100" href="product.html">
                        <img className="card-img-top" src="assets/img/products/product-12.jpg" alt="..." />
                        </a>
                        <a className="d-block w-100" href="product.html">
                        <img className="card-img-top" src="assets/img/products/product-145.jpg" alt="..." />
                        </a>
                    </div>

                    {/* <!-- Collapse --> */}
                    <div className="card-collapse-parent">

                        {/* <!-- Body --> */}
                        <div className="card-body px-0 pb-0 bg-white">
                        <div className="row gx-0">
                            <div className="col">

                            {/* <!-- Title --> */}
                            <a className="d-block fw-bold text-body" href="product.html">
                                Heel strappy Sandals
                            </a>

                            {/* <!-- Category --> */}
                            <a className="fs-xs text-muted" href="shop.html">
                                Shoes
                            </a>

                            </div>
                            <div className="col-auto">

                            {/* <!-- Price --> */}
                            <div className="fs-sm fw-bold text-muted">
                                $90.00
                            </div>

                            </div>
                        </div>
                        </div>

                        {/* <!-- Footer --> */}
                        <div className="card-collapse collapse">
                        <div className="card-footer px-0 bg-white">
                            <form>
                            <div className="mb-1">
                                <div className="form-check form-check-inline form-check-color">
                                <input type="radio" id="productEightColorOne" name="productEightColor" className="form-check-input" data-toggle="flickity" data-target="#productEightImg" data-slide="0" style={{backgroundColor: 'black'}} checked />
                                </div>
                                <div className="form-check form-check-inline form-check-color ms-n2">
                                <input type="radio" id="productEightColorTwo" name="productEightColor" className="form-check-input" data-toggle="flickity" data-target="#productEightImg" data-slide="1" style={{backgroundColor: 'red'}} />
                                </div>
                            </div>
                            <div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productEightSizeOne" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productEightSizeOne">6</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productEightSizeTwo" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productEightSizeTwo">6.5</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productEightSizeThree" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productEightSizeThree">7</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productEightSizeFour" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productEightSizeFour">7.5</label>
                                </div>
                                <div className="form-check form-check-inline form-check-text fs-xs">
                                <input type="radio" id="productEightSizeFive" name="sizeRadio" className="form-check-input" />
                                <label className="form-check-label" for="productEightSizeFive">8.5</label>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>

                    </div>

                    </div>

                </div>
                </div>
                <div className="row">
                <div className="col-12">

                    {/* <!-- Progress --> */}
                    <div className="row justify-content-center mt-7">
                    <div className="col-12 text-center">

                        {/* <!-- Caption --> */}
                        <p className="fs-sm text-muted">
                        Showing 16 of 24 products
                        </p>

                        {/* <!-- Progress --> */}
                        <div className="progress mx-auto mb-7" style={{maxWidth: '250px'}}>
                        <div className="progress-bar bg-dark" role="progressbar" style={{width: '66%'}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        {/* <!-- Button --> */}
                        <a className="btn btn-sm btn-outline-dark" href="#!">
                        Load more
                        </a>

                    </div>
                    </div>

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

export default Products;