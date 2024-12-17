import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/navbars/navbar";
import Footer from "../../components/footers/footer";
import Head from "../../components/head";
import Promo from "../../components/misc/promo";
import products from "../../data/productsData";

// This file displays all the products of the selected category from productsData.js file

const CategoryPage = () => {
    const { category } = useParams(); // Get the category from the URL
    const [visibleProducts, setVisibleProducts] = useState(12);

    // Filter products by category
    const filteredProducts = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
    );

    const handleShowMore = () => {
        setVisibleProducts((prev) => prev + 12);
    };

    return (
        <div>
            <Head title={`Category: ${category}`} />

            <Navbar />

            {/* <!-- PROMO --> */}
            <Promo />

            {/* Breadcrumb */}
            <nav className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ol className="breadcrumb mb-0 fs-xs text-gray-400">
                                <li className="breadcrumb-item">
                                    <Link className="text-reset" to="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link className="text-reset" to="/products">Products</Link>
                                </li>
                                <li className="breadcrumb-item active">{category}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Content */}
            <section className="pt-7 pb-12">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            {/* <!-- Heading --> */}
                            <h3 className="mb-10 text-center">Category: {category}</h3>

                        </div>
                    </div>

                    {/* Dynamic Product Cards */}
                    <div className="row">

                        {filteredProducts.slice(0, visibleProducts).map((product) => (
                            <div className="col-6 col-sm-6 col-md-4 col-lg-3" key={product.id}>

                                {/* <!-- Card --> */}
                                <div className="card mb-7">
                                    
                                    {/* <!-- Badge --> */}
                                    {product.status && (
                                        <div className={
                                            product.status === "SALE" || product.status === "NEW"
                                                ? "badge bg-dark card-badge card-badge-start text-uppercase letter-spacing-lg"
                                                : "badge bg-warning text-body card-badge card-badge-start text-uppercase"
                                        }>
                                            {product.status}
                                        </div>
                                    )}

                                    {/* <!-- Image --> */}
                                    <div className="card-img" data-flickity='{"draggable": false}'>
                                        <Link to={`/products/${product.id}`} className="d-block w-100">
                                            <img
                                                className="card-img-top"
                                                src={product.images[0]}
                                                alt={product.name}
                                            />
                                        </Link>
                                    </div>

                                    {/* <!-- Collapse --> */}
                                    <div className="card-collapse-parent">

                                        <div className="card-body px-0 pb-0 bg-white">
                                            <div className="row gx-0">
                                                <div className="col" >

                                                    {/* <!-- Title --> */}
                                                    <Link to={`/products/${product.id}`} className="d-block fw-bold text-body">
                                                        {product.name}
                                                    </Link>
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

                    {/* Load More Button */}
                    {visibleProducts < filteredProducts.length && (
                        <div className="text-center mt-4">
                            <button className="btn btn-sm btn-outline-dark" onClick={handleShowMore}>
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CategoryPage;