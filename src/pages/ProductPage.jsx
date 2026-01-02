import React from "react";
import { gambar1, gambar2, gambar3 } from "../assets";
import { useNavigate } from "react-router-dom";

import "./ProductPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductPage = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: "P001",
      name: "Product 1",
      desc: "Lorem Ipsum Dolor Sit Amet",
      imgLink: gambar1,
    },
    {
      id: "P002",
      name: "Product 2",
      desc: "Lorem Ipsum Dolor Sit Amet",
      imgLink: gambar2,
    },
    {
      id: "P003",
      name: "Product 3",
      desc: "Lorem Ipsum Dolor Sit Amet",
      imgLink: gambar3,
    },
    {
      id: "P004",
      name: "Product 4",
      desc: "Lorem Ipsum Dolor Sit Amet",
      imgLink: gambar3,
    },
    {
      id: "P005",
      name: "Product 5",
      desc: "Lorem Ipsum Dolor Sit Amet",
      imgLink: gambar3,
    },
  ];

  const goToDetail = (product) => {
    navigate(`/products/${product.id}`, {
      state: product,
    });
  };

  return (
    <div className="product-page">
      <Header />

      <h2>PRODUCTS</h2>
      <div className="products">
        <div className="product-showcase">
          {products.map((product) => (
            <div key={product.id}>
              <img src={product.imgLink} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.desc}</p>
              <button
                className="check-button"
                onClick={() => goToDetail(product)}
              >
                Check
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
