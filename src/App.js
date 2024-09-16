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
        </Routes>
    </div>
  );
}

export default App;
