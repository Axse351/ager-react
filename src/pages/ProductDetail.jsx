import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { state } = useLocation();
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  if (!state) return <p className="pd-notfound">Product not found</p>;

  const productGoodSides = [
    "Long lasting burning time",
    "Smokeless & odorless",
    "Low ash residue",
    "Made from natural materials",
  ];

  const tabs = ["description", "benefits", "shipping"];

  const increaseQty = () => setQty((prev) => prev + 1);
  const decreaseQty = () => setQty((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="overall-pd-container">
      <Header />

      <div className="pd-container">
        {/* BREADCRUMBS */}
        <div className="pd-breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/product">Products</Link>
          <span>/</span>
          <span className="active">{state.name}</span>
        </div>

        <div className="pd-wrapper">
          {/* IMAGE */}
          <div className="pd-image-wrapper">
            <img src={state.imgLink} alt={state.name} className="pd-image" />
          </div>

          {/* INFO */}
          <div className="pd-info">
            <span className="prod-tagline">PREMIUM COCONUT CHARCOAL</span>
            <h1 className="prod-title">{state.name}</h1>

            <p className="pd-description">{state.desc}</p>

            <ul className="pd-features">
              {productGoodSides.map((item, index) => (
                <li key={index}>✓ {item}</li>
              ))}
            </ul>

            <div className="pd-actions">

              <button className="pd-chat-btn">Chat to Buy</button>
            </div>

            <p className="pd-meta">
              Product ID: <strong>{state.id}</strong>
            </p>
          </div>
        </div>

        {/* HIGHLIGHTS */}
        <div className="pd-highlights">
          <div>🌿 100% Natural Material</div>
          <div>🚚 Export Ready</div>
          <div>⏱ Long Burning Time</div>
        </div>

        {/* TABS */}
        <div className="pd-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* TAB CONTENT */}
        <div className="pd-tab-content">
          {activeTab === "description" && (
            <div className="pd-tab-grid">
              <ul>
                <li>✓ High density charcoal briquette</li>
                <li>✓ Stable heat & consistent shape</li>
                <li>✓ Suitable for Shisha</li>
                <li>✓ Low smoke & minimal odor</li>
              </ul>

              <div>
                <h4>Product Details</h4>
                <p>
                  <strong>Material:</strong> Coconut Shell Charcoal
                </p>
                <p>
                  <strong>Shape:</strong> Briquette
                </p>
                <p>
                  <strong>Origin:</strong> Indonesia
                </p>
                <p>
                  <strong>Moisture:</strong> ≤ 8%
                </p>
                <p>
                  <strong>Ash Content:</strong> ≤ 3%
                </p>
              </div>
            </div>
          )}

          {activeTab === "benefits" && (
            <div className="pd-tab-grid">
              <ul>
                <li>✓ Longer burning time than wood charcoal</li>
                <li>✓ Cleaner combustion</li>
                <li>✓ Cost-efficient for bulk usage</li>
                <li>✓ Environmentally friendly</li>
              </ul>

              <div>
                <h4>Why Choose Our Briquette</h4>
                <p>
                  Our charcoal briquettes are manufactured using controlled
                  carbonization processes to ensure consistent quality,
                  durability, and performance for professional use.
                </p>
              </div>
            </div>
          )}

          {activeTab === "shipping" && (
            <div className="pd-tab-grid">
              <ul>
                <li>✓ Export packaging available</li>
                <li>✓ MOQ applies for bulk order</li>
                <li>✓ Wooden pallet or jumbo bag</li>
              </ul>

              <div>
                <h4>Shipping Information</h4>
                <p>
                  <strong>Delivery:</strong> FOB / CIF / EXW
                </p>
                <p>
                  <strong>Lead Time:</strong> 14–21 working days
                </p>
                <p>
                  <strong>Port:</strong> Surabaya / Semarang
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
