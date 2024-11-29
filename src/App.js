import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/home';
import Products from './pages/Products/products';
import Austin_Powers_Mojo from './pages/Austin_Powers_Mojo/austin_powers_mojo';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/austin-powers-mojo" element={<Austin_Powers_Mojo />} />
          <Route path="/products/phased-plasma-40-watt-range" element={<Products />} />
          <Route path="/products/weight-loss-potion" element={<Products />} />
          <Route path="/products/declaration-of-independence" element={<Products />} />
        </Routes>
    </div>
  );
}

export default App;
