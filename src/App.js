import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/home';
import Products from './pages/Products/products';
import AustinPowersMojo from './pages/Austin_Powers_Mojo/austin_powers_mojo';
import PhasedPlasma from './pages/Phased_Plasma/phased_plasma';
import WeightLossPotion from './pages/Weight_Loss_Potion/weight_loss_potion';
import DeclarationOfIndependence from './pages/Declaration_of_Independence/declaration_of_independence';
import './css/libs.bundle.css';
import './css/theme.bundle.css';


function App() {
  return (
    
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/austin-powers-mojo" element={<AustinPowersMojo />} />
          <Route path="/products/phased-plasma-40-watt-range" element={<PhasedPlasma />} />
          <Route path="/products/buddy-love-weight-loss-potion" element={<WeightLossPotion />} />
          <Route path="/products/declaration-of-independence" element={<DeclarationOfIndependence />} />
        </Routes>
    </div>
  );
}

export default App;
