import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { HomePage, About, ContactUs, Product, ProductDetail } from "../pages";

const RoutePath = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePath;
