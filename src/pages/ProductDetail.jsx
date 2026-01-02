import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const { state } = useLocation();

  if (!state) return <p>Product not found</p>;

  return (
    <div style={{ padding: "60px" }}>
      <img
        src={state.imgLink}
        alt={state.name}
        style={{ width: "400px", borderRadius: "16px" }}
      />
      <h1>{state.name}</h1>
      <p>{state.desc}</p>
      <p>
        <strong>ID:</strong> {state.id}
      </p>
    </div>
  );
};

export default ProductDetail;
