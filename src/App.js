import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/home';
import Products from './pages/Products/products';
import ProductPage from './pages/ProductPage/productPage';
import CategoryPage from './pages/CategoryPage/categoryPage';
import FAQs from './pages/FAQs/faq';
import ContactUs from './pages/Contact_Us/contact_us';

// Components
import ScrollToTop from './components/scrollToTop';

import './css/libs.bundle.css';
import './css/theme.bundle.css';

function App() {
  return (
    <>
    <ScrollToTop/>
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/products/austin-powers-mojo" element={<AustinPowersMojo />} />
          <Route path="/products/phased-plasma-40-watt-range" element={<PhasedPlasma />} />
          <Route path="/products/buddy-love-weight-loss-potion" element={<WeightLossPotion />} />
          <Route path="/products/declaration-of-independence" element={<DeclarationOfIndependence />} />
          <Route path="/products/mithril" element={<Mithril />} />
          <Route path="/products/harry-potter-wand" element={<HarryPotterWand />} />
          <Route path="/products/kryptonite" element={<Kryptonite />} />
          <Route path="/products/anakin-lightsaber" element={<AnakinLightsaber />} />
          <Route path="/products/the-kramer" element={<TheKramer />} /> */}
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/categories/:category" element={<CategoryPage />} />
          <Route path="/faq" element={<FAQs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
    </div>
    </>
  );
}

export default App;
