import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Head from '../../components/head';
import Footer from '../../components/footers/footer';
import Scripts from '../../components/scripts';
import Navbar from '../../components/navbars/navbar';
import 'flickity/css/flickity.css';


const FAQs = () => {
    const [activeItem, setActiveItem] = useState(null); // Store the currently active FAQ item

    const toggleItem = (id) => {
        setActiveItem((prev) => (prev === id ? null : id));
    };

    const getCollapseStyle = (id) => ({
        height: activeItem === id ? 'auto' : '0',
        overflow: 'hidden',
        transition: 'height 0.60s ease, opacity 0.60s ease',
        opacity: activeItem === id ? 1 : 0,
    });

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
                                FAQ
                            </li>
                            </ol>

                        </div>
                    </div>
                </div>
            </nav>

            {/*<!--CONTENT-->*/}
            <section className="pt-7 pb-12">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-8">

                            {/*<!-- Heading-->*/}
                            <h3 className="mb-10 text-center">Frequently Asked Questions</h3>

                            {/*<!-- Heading-->*/}
                            <h5 className="mb-7">Orders:</h5>

                            {/*<!-- List Group-->*/}
                            <ul className="list-group list-group-flush-x mb-9" id="faqCollapseParentOne">
                                <li className="list-group-item">

                                    {/*<!-- Toggle -->*/}
                                    <a 
                                        className="dropdown-toggle d-block fs-lg fw-bold text-reset"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => toggleItem('faq1')}
                                        >
                                    1. Bring of had which their whose you're it own?
                                    </a>


                                    <div style={getCollapseStyle('faq1')}>
                                        <div className="mt-5">
                                            <p className="mb-0 fs-lg text-gray-500">
                                                Fake Mart is a marketplace for all your imaginary shopping needs.
                                            </p>
                                        </div>
                                    </div>


                                </li>
                                <li className="list-group-item">

                                    {/*<!-- Toggle -->*/}
                                    <a className="dropdown-toggle d-block fs-lg fw-bold text-reset"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => toggleItem('faq2')}
                                        >
                                    2. Over shall air can't subdue fly divide him?
                                    </a>

                                    
                                    <div style={getCollapseStyle('faq2')}>
                                        <div className="mt-5">
                                            <p className="mb-0 fs-lg text-gray-500">
                                                Fake Mart is a marketplace for all your imaginary shopping needs.
                                            </p>
                                        </div>
                                    </div>
                                        

                                </li>
                                <li className="list-group-item">

                                    {/*<!-- Toggle -->*/}
                                    <a className="dropdown-toggle d-block fs-lg fw-bold text-reset"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => toggleItem('faq3')}
                                        >
                                    3. Waters one you'll creeping?
                                    </a>

                                    <div style={getCollapseStyle('faq3')}>
                                        <div className="mt-5">
                                            <p className="mb-0 fs-lg text-gray-500">
                                                Fake Mart is a marketplace for all your imaginary shopping needs.
                                            </p>
                                        </div>
                                    </div>


                                </li>
                                <li className="list-group-item">

                                   {/*<!-- Toggle -->*/}
                                   <a className="dropdown-toggle d-block fs-lg fw-bold text-reset"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => toggleItem('faq4')}
                                        >
                                    4. Fowl, given morning seed fruitful kind beast be?
                                    </a>

                                    <div style={getCollapseStyle('faq4')}>
                                        <div className="mt-5">
                                            <p className="mb-0 fs-lg text-gray-500">
                                                Fake Mart is a marketplace for all your imaginary shopping needs.
                                            </p>
                                        </div>
                                    </div>
                                    
                                </li>
                            </ul>

                            {/*<!-- Heading-->*/}
                            <h5 className="mb-7">Shipping & Returns:</h5>

                            {/*<!-- List Group-->*/}
                            <ul className="list-group list-group-flush-x mb-9" id="faqCollapseParentTwo">
                            <li className="list-group-item">

                                {/*<!-- Toggle -->*/}
                                <a className="dropdown-toggle d-block fs-lg fw-bold text-reset"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => toggleItem('faq5')}
                                        >
                                1. Seas their gathered fruitful whose rule darkness?
                                </a>

                                
                                <div style={getCollapseStyle('faq5')}>
                                        <div className="mt-5">
                                            <p className="mb-0 fs-lg text-gray-500">
                                                Fake Mart is a marketplace for all your imaginary shopping needs.
                                            </p>
                                        </div>
                                    </div>
                                    

                            </li>
                            <li className="list-group-item">

                                {/*<!-- Toggle -->*/}
                                <a className="dropdown-toggle d-block fs-lg fw-bold text-reset"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => toggleItem('faq6')}
                                        >
                                2. Evening earth replenish land that his place?
                                </a>

                                <div style={getCollapseStyle('faq6')}>
                                        <div className="mt-5">
                                            <p className="mb-0 fs-lg text-gray-500">
                                                Fake Mart is a marketplace for all your imaginary shopping needs.
                                            </p>
                                        </div>
                                    </div>


                            </li>
                            <li className="list-group-item">

                               {/*<!-- Toggle -->*/}
                               <a className="dropdown-toggle d-block fs-lg fw-bold text-reset"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => toggleItem('faq7')}
                                        >
                                3. His in fowl morning to upon?
                                </a>

                                <div style={getCollapseStyle('faq7')}>
                                        <div className="mt-5">
                                            <p className="mb-0 fs-lg text-gray-500">
                                                Fake Mart is a marketplace for all your imaginary shopping needs.
                                            </p>
                                        </div>
                                    </div>

                            </li>
                            <li className="list-group-item">

                                {/*<!-- Toggle -->*/}
                                <a className="dropdown-toggle d-block fs-lg fw-bold text-reset"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => toggleItem('faq8')}
                                        >
                                4. Divide called which created was?
                                </a>

                                <div style={getCollapseStyle('faq8')}>
                                        <div className="mt-5">
                                            <p className="mb-0 fs-lg text-gray-500">
                                                Fake Mart is a marketplace for all your imaginary shopping needs.
                                            </p>
                                        </div>
                                    </div>

                            </li>
                            <li className="list-group-item">

                                {/*<!-- Toggle -->*/}
                                <a className="dropdown-toggle d-block fs-lg fw-bold text-reset"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => toggleItem('faq9')}
                                        >
                                5. Land had man doesn't the very a doesn't?
                                </a>

                                <div style={getCollapseStyle('faq9')}>
                                        <div className="mt-5">
                                            <p className="mb-0 fs-lg text-gray-500">
                                                Fake Mart is a marketplace for all your imaginary shopping needs.
                                            </p>
                                        </div>
                                    </div>

                            </li>
                            </ul>

                            {/*<!-- Heading-->*/}
                            <h5 className="mb-7">Payment:</h5>

                            {/*<!-- List Group-->*/}
                            <ul className="list-group list-group-flush-x" id="faqCollapseParentThree">
                            <li className="list-group-item">

                                {/*<!-- Toggle -->*/}
                                <a className="dropdown-toggle d-block fs-lg fw-bold text-reset"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => toggleItem('faq10')}
                                        >
                                1. Above beginning won't over?
                                </a>

                                <div style={getCollapseStyle('faq10')}>
                                        <div className="mt-5">
                                            <p className="mb-0 fs-lg text-gray-500">
                                                Fake Mart is a marketplace for all your imaginary shopping needs.
                                            </p>
                                        </div>
                                    </div>

                            </li>
                            <li className="list-group-item">

                                {/*<!-- Toggle -->*/}
                                <a className="dropdown-toggle d-block fs-lg fw-bold text-reset"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => toggleItem('faq11')}
                                        >
                                2. Good gathering image called, fifth good?
                                </a>

                                <div style={getCollapseStyle('faq11')}>
                                        <div className="mt-5">
                                            <p className="mb-0 fs-lg text-gray-500">
                                                Fake Mart is a marketplace for all your imaginary shopping needs.
                                            </p>
                                        </div>
                                    </div>

                            </li>
                            <li className="list-group-item">

                                {/*<!-- Toggle -->*/}
                                <a className="dropdown-toggle d-block fs-lg fw-bold text-reset"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => toggleItem('faq12')}
                                        >
                                3. Fly beast days dominion firmament?
                                </a>

                                <div style={getCollapseStyle('faq12')}>
                                        <div className="mt-5">
                                            <p className="mb-0 fs-lg text-gray-500">
                                                Fake Mart is a marketplace for all your imaginary shopping needs.
                                            </p>
                                        </div>
                                    </div>

                            </li>
                            <li className="list-group-item">

                                {/*<!-- Toggle -->*/}
                                <a className="dropdown-toggle d-block fs-lg fw-bold text-reset"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => toggleItem('faq13')}
                                        >
                                4. Fowl, given morning seed fruitful kind beast be?
                                </a>

                                <div style={getCollapseStyle('faq13')}>
                                        <div className="mt-5">
                                            <p className="mb-0 fs-lg text-gray-500">
                                                Fake Mart is a marketplace for all your imaginary shopping needs.
                                            </p>
                                        </div>
                                    </div>

                            </li>
                            </ul>

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

export default FAQs;