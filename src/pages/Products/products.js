import React, { useState, useEffect } from "react";
import Footer from "../../components/footers/footer";
import Head from "../../components/head";
import Promo from "../../components/misc/promo";
import Navbar from "../../components/navbars/navbar";
import Scripts from "../../components/scripts";
import { Link,  useLocation } from "react-router-dom";
import products from "../../data/productsData";

const Products = () => {
     const location = useLocation();

    // Initialize visibleProducts with sessionStorage or default to 12
    const [visibleProducts, setVisibleProducts] = useState(() => {
        const saved = sessionStorage.getItem("visibleProducts");
        return saved ? parseInt(saved, 10) : 12;
    });

    // Function to handle "Load More"
    const handleShowMore = () => {
        setVisibleProducts((prev) => {
            const updated = prev + 12;
            sessionStorage.setItem("visibleProducts", updated); // Save to sessionStorage
            return updated;
        });
    };

    // Persist visibleProducts state in sessionStorage on mount
    useEffect(() => {
        sessionStorage.setItem("visibleProducts", visibleProducts);
    }, [visibleProducts]);

    // Reset visibleProducts only when leaving the /products routes
    useEffect(() => {
        return () => {
            if (!location.pathname.startsWith("/products")) {
                sessionStorage.removeItem("visibleProducts");
            }
        };
    }, [location.pathname]);

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

                    {products.slice(0, visibleProducts).map((product) => (

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
                                            <div className="col" >

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

                                            {typeof product.price === "string" ? (
                                                product.price.toLowerCase().includes("free") ? (
                                                    // Free price in green
                                                    <span className="text-success">{product.price}</span>
                                                ) : product.price.toLowerCase().includes("/hr") ? (
                                                    // Hourly cost styled like regular prices
                                                    <span className="fs-sm fw-bold text-muted">{product.price}</span>
                                                ) : (
                                                    // Default handling for other strings
                                                    <span className="fs-sm fw-bold text-muted">{product.price}</span>
                                                )
                                            ) : product.salePrice ? (
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
                                    Showing {Math.min(visibleProducts, products.length)} of {products.length} products
                                    </p>

                                    {/* <!-- Progress --> */}
                                    <div className="progress mx-auto mb-7" style={{maxWidth: '250px'}}>
                                        <div 
                                            className="progress-bar bg-dark" 
                                            role="progressbar" 
                                            style={{
                                                width: `${(visibleProducts / products.length) * 100}%`
                                            }} 
                                            aria-valuenow={(visibleProducts / products.length) * 100}
                                            aria-valuemin="0" 
                                            aria-valuemax="100"></div>
                                    </div>

                                    {visibleProducts < products.length ? (
                                        <button
                                            className="btn btn-sm btn-outline-dark"
                                            onClick={handleShowMore}
                                        >
                                            Load more
                                        </button>
                                    ) : (
                                        <p className="fs-sm text-muted">
                                            All products are displayed.
                                        </p>
                                    )}

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