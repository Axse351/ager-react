import React from "react";
import Header from "../components/Header";
import "./about.css";

const AboutPage = () => {
  return (
    <div className="home-container">
      {/* HEADER */}
      <Header />

      {/* HERO SECTION */}
      <section className="about-hero">
        <video
          className="about-hero-bg"
          src="/video/ager-banner.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="about-overlay" />

        <div className="about-hero-content">
          <h1>ABOUT&nbsp;US</h1>
          <p>
            To be the world's leading supplier of sustainable and
            high-quality charcoal.
          </p>
        </div>
      </section>

      {/* WHY US */}
     <section className="why-section">
  <div className="why-container">
    <h2 className="why-title">WHY US?</h2>

    <p className="why-description">
      Established in 2020, PT COCO AGER INDONESIA is a leading
      manufacturer and exporter of high-quality hookah and BBQ
      charcoal. We are committed to innovation, sustainability,
      and delivering premium products worldwide.
    </p>

    {/* FEATURE BOXES */}
    <div className="why-features">
      <div className="feature-box">PREMIUM QUALITY</div>
      <div className="feature-box">CUSTOMIZATION ORDER</div>
      <div className="feature-box">COMPETITIVE PRICE</div>
      <div className="feature-box">PRODUCT CERTIFICATE</div>
      <div className="feature-box">FAST PRODUCTION</div>
    </div>

    {/* IMAGE BELOW */}
    <div className="why-image">
      <img src="assets/why-us.jpg" alt="Why Us" />
    </div>
  </div>
</section>

    </div>
  );
};

export default AboutPage;
