import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  const heroRef = useRef(null);
  const product1Ref = useRef(null);
  const product2Ref = useRef(null);
  const product3Ref = useRef(null);
  const product4Ref = useRef(null);
  const charcoalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".title-line", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      const products = [
        product1Ref.current,
        product2Ref.current,
        product3Ref.current,
        product4Ref.current,
        charcoalRef.current,
      ];

      products.forEach((el, i) => {
        if (!el) return;
        gsap.from(el, {
          opacity: 0,
          scale: 0.8,
          duration: 1.2,
          delay: 0.4 + i * 0.15,
          ease: "back.out(1.7)",
        });

        gsap.to(el, {
          y: -15,
          duration: 2.5 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="home-container">
      {/* HEADER */}
      <header className="header">
        <img
          src="/src/assets/logo.png"
          alt="AGER Logo"
          className="logo"
          onClick={() => navigate("/")}
        />

        <nav className="nav">
          <span onClick={() => navigate("/")}>Home</span>
          <span onClick={() => navigate("/about")}>About Us</span>
          <span onClick={() => navigate("/gallery")}>Gallery</span>
          <span onClick={() => navigate("/product")}>Product</span>
          <button onClick={() => navigate("/contact-us")}>Contact Us</button>
        </nav>
      </header>

      {/* HERO */}
      <main ref={heroRef} className="hero">
        {/* PRODUCTS */}
        <div ref={product1Ref} className="product product-1">
          <img src="/src/assets/gambar1.png" alt="Product 1" />
        </div>

        <div ref={product2Ref} className="product product-2">
          <img src="/src/assets/gambar2.png" alt="Product 2" />
        </div>

        <div ref={product3Ref} className="product product-3">
          <img src="/src/assets/gambar3.png" alt="Product 3" />
        </div>

        <div ref={product4Ref} className="product product-4">
          <img src="/src/assets/gambar4.png" alt="Product 4" />
        </div>

        {/* TITLE */}
        <div className="title">
          <div className="title-line">TRANSFORM YOUR</div>
          <div className="title-highlight title-line">
            HOOKAH ENJOYMENT
          </div>
        </div>
      </main>
    </div>
  );
}
