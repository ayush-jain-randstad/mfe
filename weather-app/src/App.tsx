import './App.css';
import './index.css'
import Weather from './Components/ProductList';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from './Components/ProductDetail';
import React from 'react';
const App: React.FC = () => {
  return (
    <>
            <Routes>
                <Route path="/"  element={<Weather />} />
                <Route path="/product-details/:id" element={<ProductDetail />} />
            </Routes>
          {/* <Weather /> */}
    </>
  );
}

export default App;
