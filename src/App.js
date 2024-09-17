import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/home';
import Products from './pages/Products/products';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/austin-powers-mojo" element={<Products />} />
          <Route path="/products/phased-plasma-40-watt-range" element={<Products />} />
          <Route path="/products/weight-loss-potion" element={<Products />} />
          <Route path="/products/declaration-of-independence" element={<Products />} />
        </Routes>
    </div>
  );
}

export default App;
