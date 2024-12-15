import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/home';
import Products from './pages/Products/products';
import AustinPowersMojo from './pages/Austin_Powers_Mojo/austin_powers_mojo';
import PhasedPlasma from './pages/Phased_Plasma/phased_plasma';
import WeightLossPotion from './pages/Weight_Loss_Potion/weight_loss_potion';
import DeclarationOfIndependence from './pages/Declaration_of_Independence/declaration_of_independence';
import Mithril from './pages/Mithril/mithril';
import HarryPotterWand from './pages/Harry_Potter_Wand/harry_potter_wand';
import Kryptonite from './pages/Kryptonite/kryptonite';
import AnakinLightsaber from './pages/Anakin_Lightsaber/anakin_lightsaber';
import TheKramer from './pages/The_Kramer/the_kramer';
import ProductPage from './pages/ProductPage/productPage';

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
        </Routes>
    </div>
    </>
  );
}

export default App;
