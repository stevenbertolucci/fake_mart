import Footer from "../../components/footers/footer";
import Head from "../../components/head";
import Promo from "../../components/misc/promo";
import Navbar from "../../components/navbars/navbar";
import Scripts from "../../components/scripts";
import { Link } from "react-router-dom";
import products from "../../data/productsData";

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

                    {/* Dynamic Product Cards */}
                    <div className="row">

                    {products.map((product) => (

                        <div className="col-6 col-sm-6 col-md-4 col-lg-3" key={product.id}>

                            {/* <!-- Card --> */}
                            <div className="card mb-7">

                                {/* <!-- Badge --> */}
                                {product.status && (
                                <div className={
                                    product.status === "SALE" || product.status === "NEW"
                                    ? "badge bg-dark card-badge card-badge-start text-uppercase letter-spacing-lg"

                                    : product.status === "TRENDING"
                                    ? "badge bg-warning text-body card-badge card-badge-start text-uppercase"
                                    : ""
                                    }
                                >
                                    {product.status}
                                </div>
                                )}

                                {/* <!-- Image --> */}
                                <div className="card-img" data-flickity='{"draggable": false}'>
                                    <Link className="d-block w-100" to={`/products/${product.id}`}>
                                        <img 
                                            className="card-img-top" 
                                            src={product.images[0]} 
                                            alt={product.name} 
                                        />
                                    </Link>
                                </div>

                                 {/* <!-- Collapse --> */}
                                 <div className="card-collapse-parent">

                                    {/* <!-- Body --> */}
                                    <div className="card-body px-0 pb-0 bg-white">
                                        <div className="row gx-0">
                                            <div className="col">

                                                {/* <!-- Title --> */}
                                                <Link className="d-block fw-bold text-body" to={`/products/${product.id}`}>
                                                    {product.name}
                                                </Link>

                                                {/* <!-- Category --> */}
                                                <a className="fs-xs text-muted" href="shop.html">
                                                    {product.category}
                                                </a>

                                            </div>

                                            <div className="col-auto">

                                                {/* Sale Price Handling */}
                                                {product.salePrice ? (
                                                    <>
                                                        {/* Original Price */}
                                                        <div className="fs-xs fw-bold text-gray-350 text-decoration-line-through">
                                                            ${product.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                        </div>
                                                        {/* Sale Price */}
                                                        <div className="fs-sm fw-bold text-primary">
                                                            ${product.salePrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                        </div>
                                                    </>
                                                ) : (
                                                    // Regular Price
                                                    <div className="fs-sm fw-bold text-muted">
                                                        ${product.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        ))}
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