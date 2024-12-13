import Footer from "../../components/footers/footer";
import Head from "../../components/head";
import Promo from "../../components/misc/promo";
import Navbar from "../../components/navbars/navbar";
import Scripts from "../../components/scripts";
import { Link } from "react-router-dom";

const Products = () => {

    return (
        <div>
            
            <Head title="Fake Mart" />

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
                                Products
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
                            <h3 className="mb-10 text-center">Products</h3>

                        </div>
                    </div>
                    
                    <div className="row">

                        {/* Austin Powers Mojo */}
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3">

                            {/* <!-- Card --> */}
                            <div className="card mb-7">

                                {/* <!-- Badge --> */}
                                <div className="badge bg-white text-body card-badge card-badge-start text-uppercase">
                                    New
                                </div>

                                {/* <!-- Image --> */}
                                <div className="card-img" data-flickity='{"draggable": false}' id="productOneImg">
                                    <Link className="d-block w-100" to="/products/austin-powers-mojo">
                                        <img className="card-img-top" src="assets/img/products/mojo.png" alt="..." />
                                    </Link>
                                </div>

                                {/* <!-- Collapse --> */}
                                <div className="card-collapse-parent">

                                    {/* <!-- Body --> */}
                                    <div className="card-body px-0 pb-0 bg-white">
                                        <div className="row gx-0">
                                            <div className="col">

                                                {/* <!-- Title --> */}
                                                <Link className="d-block fw-bold text-body" to="/products/austin-powers-mojo">
                                                    Austin Power's Mojo
                                                </Link>

                                                {/* <!-- Category --> */}
                                                <a className="fs-xs text-muted" href="shop.html">
                                                    Pharmacy
                                                </a>

                                            </div>

                                            <div className="col-auto">

                                                {/* <!-- Price --> */}
                                                <div className="fs-sm fw-bold text-muted">
                                                    $1,299.99
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* Phased Plasma Gun */}
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3">

                            {/* <!-- Card --> */}
                            <div className="card mb-7">

                                {/* <!-- Image --> */}
                                <div className="card-img" data-flickity='{"draggable": false}' id="productTwoImg">

                                    <Link className="d-block w-100" to="/products/phased-plasma-40-watt-range">
                                        <img className="card-img-top" src="assets/img/products/phased_plasma.png" alt="..." />
                                    </Link>

                                </div>

                                {/* <!-- Collapse --> */}
                                <div className="card-collapse-parent">

                                    {/* <!-- Body --> */}
                                    <div className="card-body px-0 pb-0 bg-white">
                                        <div className="row gx-0">
                                            <div className="col">

                                                {/* <!-- Title --> */}
                                                <Link className="d-block fw-bold text-body" to="phased-plasma-40-watt-range">
                                                    Phased Plasma in the 40 Watt Range
                                                </Link>

                                                {/* <!-- Category --> */}
                                                <a className="fs-xs text-muted" href="shop.html">
                                                    Sci-Fi
                                                </a>

                                            </div>
                                            <div className="col-auto">

                                                {/* <!-- Price --> */}
                                                <div className="fs-sm fw-bold text-muted">
                                                    $8,799.99
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* Buddy Love Weight Loss Potion */}
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3">

                            {/* <!-- Card --> */}
                            <div className="card mb-7" >

                                {/* <!-- Badge --> */}
                                <div className="badge bg-dark card-badge card-badge-start text-uppercase letter-spacing-lg">
                                    Sale
                                </div>

                                {/* <!-- Image --> */}
                                <div className="card-img" data-flickity='{"draggable": false}' id="productThreeImg">

                                    <Link className="d-block w-100" to="/products/buddy-love-weight-loss-potion">
                                        <img className="card-img-top" src="assets/img/products/before_after.png" alt="..." />
                                    </Link>

                                </div>

                                {/* <!-- Collapse --> */}
                                <div className="card-collapse-parent">

                                    {/* <!-- Body --> */}
                                    <div className="card-body px-0 pb-0 bg-white">
                                        <div className="row gx-0">
                                            <div className="col">

                                                {/* <!-- Title --> */}
                                                <Link className="d-block fw-bold text-body" to="/products/buddy-love-weight-loss-potion">
                                                    Buddy Love's Weight Loss Potion
                                                </Link>

                                                {/* <!-- Category --> */}
                                                <a className="fs-xs text-muted" href="shop.html">
                                                    Pharmacy
                                                </a>

                                            </div>
                                            <div className="col-auto">

                                                {/* <!-- Price --> */}
                                                <div className="fs-xs fw-bold text-gray-350 text-decoration-line-through">
                                                    $99.99
                                                </div>
                                                <div className="fs-sm fw-bold text-primary">
                                                    $79.99
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* Declaration of Independence */}
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3">

                            {/* <!-- Card --> */}
                            <div className="card mb-7" >

                                {/* <!-- Image --> */}
                                <img className="card-img-top" src="assets/img/products/declaration_of_independence.jpg" alt="..." />

                                {/* <!-- Collapse --> */}
                                <div className="card-collapse-parent">

                                    {/* <!-- Body --> */}
                                    <div className="card-body px-0 pb-0 bg-white">
                                        <div className="row gx-0">
                                            <div className="col">

                                            {/* <!-- Title --> */}
                                            <a className="d-block fw-bold text-body" href="product.html">
                                                Declaration of Independence
                                            </a>

                                            {/* <!-- Category --> */}
                                            <a className="fs-xs text-muted" href="shop.html">
                                                Documents
                                            </a>

                                            </div>
                                            <div className="col-auto">

                                                {/* <!-- Price --> */}
                                                <div className="fs-sm fw-bold text-muted">
                                                    $7,417.76
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* Mithril */}
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3">

                            {/* <!-- Card --> */}
                            <div className="card mb-7" >

                                {/* <!-- Image --> */}
                                <img className="card-img-top" src="assets/img/products/mithril.jpg" alt="..." />

                                {/* <!-- Collapse --> */}
                                <div className="card-collapse-parent">

                                    {/* <!-- Body --> */}
                                    <div className="card-body px-0 pb-0 bg-white">
                                        <div className="row gx-0">
                                            <div className="col">

                                                {/* <!-- Title --> */}
                                                <a className="d-block fw-bold text-body" href="product.html">
                                                    Mithril
                                                </a>

                                                {/* <!-- Category --> */}
                                                <a className="fs-xs text-muted" href="shop.html">
                                                    Clothing
                                                </a>

                                            </div>
                                            <div className="col-auto">

                                                {/* <!-- Price --> */}
                                                <div className="fs-sm fw-bold text-muted">
                                                    $19.99
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* Harry Potter's Wand */}
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3">

                            {/* <!-- Card --> */}
                            <div className="card mb-7" >

                                {/* <!-- Badge --> */}
                                <div className="badge bg-dark card-badge card-badge-start text-uppercase letter-spacing-lg">
                                    Sale
                                </div>

                                {/* <!-- Image --> */}
                                <div className="card-img" data-flickity='{"draggable": false}' id="productSixImg">
                                    <a className="d-block w-100" href="product.html">
                                        <img className="card-img-top" src="assets/img/products/harry_potter.jpg" alt="..." />
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
                                                    Harry Potter's Wand
                                                </a>

                                                {/* <!-- Category --> */}
                                                <a className="fs-xs text-muted" href="shop.html">
                                                    Tools
                                                </a>
                                            </div>

                                            <div className="col-auto">
                                                {/* <!-- Price --> */}
                                                <div className="fs-xs fw-bold text-gray-350 text-decoration-line-through">
                                                    $299.99
                                                </div>
                                                <div className="fs-sm fw-bold text-primary">
                                                    $149.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* Kryptonite */}
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3">

                            {/* <!-- Card --> */}
                            <div className="card mb-7" >

                                {/* <!-- Image --> */}
                                <img className="card-img-top" src="assets/img/products/kryptonite.jpg" alt="..." />

                                {/* <!-- Collapse --> */}
                                <div className="card-collapse-parent">

                                    {/* <!-- Body --> */}
                                    <div className="card-body px-0 pb-0 bg-white">
                                        <div className="row gx-0">
                                            <div className="col">

                                            {/* <!-- Title --> */}
                                            <a className="d-block fw-bold text-body" href="product.html">
                                                Kryptonite
                                            </a>

                                            {/* <!-- Category --> */}
                                            <a className="fs-xs text-muted" href="shop.html">
                                                Supplies
                                            </a>

                                            </div>
                                            <div className="col-auto">

                                            {/* <!-- Price --> */}
                                            <div className="fs-sm fw-bold text-muted">
                                                $899.99
                                            </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* Anakin's Lightsaber */}
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3">

                            {/* <!-- Card --> */}
                            <div className="card mb-7" >

                                {/* <!-- Badge --> */}
                                <div className="badge bg-dark card-badge card-badge-start text-uppercase letter-spacing-lg">
                                    New
                                </div>

                                {/* <!-- Image --> */}
                                <div className="card-img" data-flickity='{"draggable": false}' id="productEightImg">
                                    <a className="d-block w-100" href="product.html">
                                        <img className="card-img-top" src="assets/img/products/anakin.png" alt="..." />
                                    </a>
                                    {/* <a className="d-block w-100" href="product.html">
                                    <img className="card-img-top" src="assets/img/products/product-145.jpg" alt="..." />
                                    </a> */}
                                </div>

                                {/* <!-- Collapse --> */}
                                <div className="card-collapse-parent">

                                    {/* <!-- Body --> */}
                                    <div className="card-body px-0 pb-0 bg-white">
                                        <div className="row gx-0">
                                            <div className="col">
                                                {/* <!-- Title --> */}
                                                <a className="d-block fw-bold text-body" href="product.html">
                                                    Anakin's Lightsaber
                                                </a>

                                                {/* <!-- Category --> */}
                                                <a className="fs-xs text-muted" href="shop.html">
                                                    Tools
                                                </a>
                                            </div>

                                            <div className="col-auto">
                                                {/* <!-- Price --> */}
                                                <div className="fs-sm fw-bold text-muted">
                                                    $39,999.99
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                        {/* The Kramer */}
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3">

                            {/* <!-- Card --> */}
                            <div className="card mb-7">

                                {/* <!-- Badge --> */}
                                <div className="badge bg-warning text-body card-badge card-badge-start text-uppercase">
                                    TRENDING
                                </div>

                                {/* <!-- Image --> */}
                                <div className="card-img" data-flickity='{"draggable": false}' id="productOneImg">
                                    <Link className="d-block w-100" to="/products/austin-powers-mojo">
                                        <img className="card-img-top" src="assets/img/products/the_kramer.png" alt="..." />
                                    </Link>
                                    {/* <a className="d-block w-100" href="product.html">
                                    <img className="card-img-top" src="assets/img/products/product-142.jpg" alt="..." />
                                    </a> */}
                                </div>

                                {/* <!-- Collapse --> */}
                                <div className="card-collapse-parent">

                                    {/* <!-- Body --> */}
                                    <div className="card-body px-0 pb-0 bg-white">
                                        <div className="row gx-0">
                                            <div className="col">

                                                {/* <!-- Title --> */}
                                                <Link className="d-block fw-bold text-body" to="/products/austin-powers-mojo">
                                                    The Kramer
                                                </Link>

                                                {/* <!-- Category --> */}
                                                <a className="fs-xs text-muted" href="shop.html">
                                                    Art
                                                </a>
                                            </div>

                                            <div className="col-auto">
                                                {/* <!-- Price --> */}
                                                <div className="fs-sm fw-bold text-muted">
                                                    $14,999.99
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Footer --> */}
                                    <div className="card-collapse collapse">
                                        {/* <div className="card-footer px-0 bg-white"> */}
                                            {/* <form> */}
                                                {/* <div className="mb-1">
                                                        <div className="form-check form-check-inline form-check-color">
                                                            <input type="radio" id="productOneColorOne" name="productOneColor" className="form-check-input" data-toggle="flickity" data-target="#productOneImg" data-slide="0" style={{backgroundColor: 'beige'}} checked />
                                                        </div>
                                                        <div className="form-check form-check-inline form-check-color ms-n2">
                                                            <input type="radio" id="productOneColorTwo" name="productOneColor" className="form-check-input" data-toggle="flickity" data-target="#productOneImg" data-slide="1" style={{backgroundColor: 'black'}} />
                                                        </div>
                                                    </div> */}

                                                {/* <div>
                                                        <div className="form-check form-check-inline form-check-text fs-xs">
                                                            <input type="radio" id="productOneSizeOne" name="sizeRadio" className="form-check-input" />
                                                            <label className="form-check-label" htmlFor="productOneSizeOne">20mg</label>
                                                        </div>
                                                        <div className="form-check form-check-inline form-check-text fs-xs">
                                                            <input type="radio" id="productOneSizeTwo" name="sizeRadio" className="form-check-input" />
                                                            <label className="form-check-label" htmlFor="productOneSizeTwo">50mg</label>
                                                        </div>
                                                        <div className="form-check form-check-inline form-check-text fs-xs">
                                                            <input type="radio" id="productOneSizeThree" name="sizeRadio" className="form-check-input" />
                                                            <label className="form-check-label" htmlFor="productOneSizeThree">120mg</label>
                                                        </div>
                                                        <div className="form-check form-check-inline form-check-text fs-xs">
                                                            <input type="radio" id="productOneSizeFour" name="sizeRadio" className="form-check-input" />
                                                            <label className="form-check-label" htmlFor="productOneSizeFour">1g</label>
                                                        </div>
                                                    </div> */}
                                            {/* </form> */}
                                        {/* </div> */}
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
                                    Showing 9 of 24 products
                                    </p>

                                    {/* <!-- Progress --> */}
                                    <div className="progress mx-auto mb-7" style={{maxWidth: '250px'}}>
                                        <div className="progress-bar bg-dark" role="progressbar" style={{width: '33%'}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
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