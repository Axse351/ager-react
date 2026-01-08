import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header header-fixed">
      <img
        src="/src/assets/logo.png"
        alt="AGER Logo"
        className="logo"
        onClick={() => navigate("/")}
      />

      <nav className="nav">
        <span onClick={() => navigate("/")}>Home</span>
        <span onClick={() => navigate("/about")}>About Us</span>
        <span onClick={() => navigate("/product")}>Products</span>
        <button onClick={() => navigate("/contact-us")}>Contact Us</button>
      </nav>
    </header>
  );
}
