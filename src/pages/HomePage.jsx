import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./HomePage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { dummyHome, ecoFriendlyLogo } from "../assets";

export default function HomePage() {
  const heroRef = useRef(null);
  const product1Ref = useRef(null);
  const product2Ref = useRef(null);
  const product3Ref = useRef(null);
  const product4Ref = useRef(null);

  const features = [
    {
      title: "LONG LASTING BURNING",
      desc: "Generates steady heat",
      icon: "🔥",
    },
    {
      title: "100% NATURAL",
      desc: "Clean burning",
      icon: "🌱",
    },
    {
      title: "ODORLESS",
      desc: "Low moisture content",
      icon: "🚫",
      center: true,
    },
    {
      title: "LOW ASH",
      desc: "Minimal residue",
      icon: "🌫️",
    },
    {
      title: "SMOKELESS",
      desc: "Efficient burning",
      icon: "💨",
    },
  ];

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
      <Header />

      <div ref={heroRef} className="hero">
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

        <div className="title">
          <div className="title-line">TRANSFORM YOUR</div>
          <div className="title-highlight title-line">HOOKAH ENJOYMENT</div>
        </div>
      </div>

      <div className="product-cta">
        <div className="cta-title title-line">PREMIUM COCONUT</div>
        <div className="cta-subtitle title-highlight title-line">
          CHARHOAL BRIQUETTES
        </div>
        <button className="cta-button">GET IT NOW</button>
        <img className="product-display" src={dummyHome} alt="" />
      </div>

      <div className="product-highlights">
        <div className="eco">
          <img className="eco-friendly-img" src={ecoFriendlyLogo} alt="" />
          <p>ECO FRIENDLY</p>
        </div>

        <div className="features">
          {features.map((item, index) => (
            <div
              key={index}
              className={`feature feature-${index} ${
                item.center ? "center" : ""
              }`}
            >
              <div className="icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-us-area">
        <div className="contact-details">
          <h2>Contact Us</h2>
          <p className="subtitle">
            Email, phone, or fill out the form to collaborate with PT Cocoager
            Indonesia
          </p>

          <p className="link">cocoager@gmail.com</p>
          <p className="phone">(0123) 977-123-126</p>
          <p className="support">Customer Support</p>
        </div>

        <div className="contact-box">
          <h3>Get in Touch</h3>

          <div className="form-row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>

          <div className="form-row">
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone Number" />
          </div>

          <textarea placeholder="How we can help?" />

          <button className="submit-btn">
            Check <span>→</span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
