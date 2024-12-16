import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Head from '../../components/head';
import Footer from '../../components/footers/footer';
import Scripts from '../../components/scripts';
import Navbar from '../../components/navbars/navbar';
import 'flickity/css/flickity.css';


const ContactUs = () => {
    return (
        <div>

            <Head title="Fake Mart" />

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
                            <li className="breadcrumb-item active">
                                Contact Us
                            </li>
                            </ol>

                        </div>
                    </div>
                </div>
            </nav>

            {/*<!-- CONTENT -->*/}
            <section className="pt-7 pb-12">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            {/*<!-- Heading -->*/}
                            <h3 className="mb-10 text-center">Contact Us</h3>

                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-12 col-md-4 col-xl-3">
                            <aside className="mb-9 mb-md-0">

                            {/*<!-- Heading -->*/}
                            <h6 className="mb-6">
                                <i className="fe fe-phone text-primary me-4"></i> Call to Us:
                            </h6>

                            {/*<!-- Text -->*/}
                            <p className="text-gray-500">
                                We're available from 10 am - 10 pm EST,
                                7 days a week.
                            </p>
                            <p>
                                <strong>Customer Service:</strong><br/>
                                <a className="text-gray-500" href="tel:60146-389-574">6-146-389-574</a>
                            </p>
                            <p className="mb-0">
                                <strong>Careers:</strong><br/>
                                <a className="text-gray-500" href="tel:60146-389-574">6-146-389-574</a>
                            </p>

                            {/*<!-- Divider -->*/}
                            <hr/>

                            {/*<!-- Heading -->*/}
                            <h6 className="mb-6">
                                <i className="fe fe-mail text-primary me-4"></i> Write to Us:
                            </h6>

                            {/*<!-- Text -->*/}
                            <p className="text-gray-500">
                                Fill out our form and we will contact you
                                within 24 hours.
                            </p>
                            <p>
                                <strong>Customer Service:</strong><br/>
                                <a className="text-gray-500" href="mailto:customer@example.com">customer@example.com</a>
                            </p>
                            <p className="mb-0">
                                <strong>Careers:</strong><br/>
                                <a className="text-gray-500" href="mailto:careers@example.com">careers@example.com</a>
                            </p>

                            {/*<!-- Divider -->*/}
                            <hr/>

                            {/*<!-- Heading -->*/}
                            <h6 className="mb-6">
                                <i className="fe fe-mail text-primary me-4"></i> Find Us:
                            </h6>

                            {/*<!-- Text -->*/}
                            <p className="mb-0 text-gray-500">
                                Want to visit our Offline Stores?
                            </p>

                            {/*<!-- Button -->*/}
                            <p className="mb-0">
                                <a className="btn btn-link px-0 text-body" href="store-locator.html">
                                Go to Store Locator <i className="fe fe-arrow-right ms-2"></i>
                                </a>
                            </p>

                            </aside>
                     
                        </div>
                            
                        <div className="col-12 col-md-8">

                            {/*<!-- Form -->*/}
                            <form>

                                {/*<!-- Email -->*/}
                                <div className="form-group">
                                    <label className="visually-hidden" for="contactName">
                                    Your Name *
                                    </label>
                                    <input className="form-control form-control-sm" id="contactName" type="text" placeholder="Your Name *" required/>
                                </div>

                                {/*<!-- Email -->*/}
                                <div className="form-group">
                                    <label className="visually-hidden" for="contactEmail">
                                    Your Email *
                                    </label>
                                    <input className="form-control form-control-sm" id="contactEmail" type="email" placeholder="Your Email *" required/>
                                </div>

                                {/*<!-- Email -->*/}
                                <div className="form-group">
                                    <label className="visually-hidden" for="contactTitle">
                                    Title *
                                    </label>
                                    <input className="form-control form-control-sm" id="contactTitle" type="text" placeholder="Title *" required/>
                                </div>

                                {/*<!-- Email -->*/}
                                <div className="form-group mb-7">
                                    <label className="visually-hidden" for="contactMessage">
                                    Message *
                                    </label>
                                    <textarea className="form-control form-control-sm" id="contactMessage" rows="5" placeholder="Message *" required></textarea>
                                </div>

                                {/*<!-- Button -->*/}
                                <button className="btn btn-dark">
                                    Send Message
                                </button>

                            </form>

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

export default ContactUs;