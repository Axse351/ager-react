import React from "react";
import "./about.css";

const AboutPage = () => {
  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="about-hero">
  <video
    className="about-hero-bg"
    src="public/video/ager-banner.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  <div className="about-overlay" />

  <div className="about-hero-content">
    <h1>ABOUT&nbsp;US</h1>
    <p>
      To be the world's leading supplier of sustainable and high-quality
      charcoal.
    </p>
  </div>
</section>


      {/* WHY US */}
      <section className="why-section">
        <div className="why-wrapper">
          <div className="why-image">
            <img src="/why-us.jpg" alt="Why Us" />
          </div>

          <div className="why-content">
            <h2>WHY US?</h2>
            <p>
              Established in 2020, PT COCO AGER INDONESIA is a leading
              manufacturer and exporter of high-quality hookah and BBQ
              charcoal. We are committed to innovation, sustainability, and
              delivering premium products worldwide.
            </p>

            <div className="why-features">
              <span>PREMIUM QUALITY</span>
              <span>CUSTOMIZATION ORDER</span>
              <span>COMPETITIVE PRICE</span>
              <span>PRODUCT CERTIFICATE</span>
              <span>FAST PRODUCTION</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
