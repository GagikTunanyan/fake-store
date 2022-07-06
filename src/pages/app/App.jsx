import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from '../../components/layout/Layout';
import Home from "../home/Home";
import Product from '../product/Product';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/product/:id" element={<Product />} />
          <Route path="/" element={<Layout />}>
            <Route path="/:category" element={<Home />} />
            <Route path="/" element={<Navigate to="/all" />} />
          </Route>
          <Route path="*" element={<Navigate to="/all" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
