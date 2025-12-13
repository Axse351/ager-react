import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import {
    HomePage,
    About,
    Gallery,
    ContactUs,
    Product
} from "../pages"

const RoutePath = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutePath;