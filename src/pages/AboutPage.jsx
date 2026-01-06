import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import ProductionSection from "../components/ProductionSection";
import "./about.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const historyRef = useRef(null);
  const statsRef = useRef(null);
  const numbersRef = useRef([]);

  useEffect(() => {
    /* ================= FLOATING IMAGE ================= */
    gsap.set(".floating.left", { rotation: 15 });
    gsap.set(".floating.right", { rotation: -9 });

    gsap.to(".floating.left", {
      y: -25,
      rotation: 6,
      duration: 3.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(".floating.right", {
      y: -35,
      rotation: 9,
      duration: 2.6,
      delay: 0.1,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    /* ================= COUNTER ================= */
    numbersRef.current.forEach((el) => {
      if (!el) return;
      const target = Number(el.dataset.target);

      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          ease: "power1.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="home-container">
      <Header />

      {/* ================= HERO ================= */}
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
          <h1>ABOUT US</h1>
          <p>
            To be the world's leading supplier of sustainable and high-quality
            charcoal.
          </p>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="why-section">
        <div className="why-container">
          <h2 className="why-title">WHY US?</h2>

          <p className="why-description">
            Established in 2020, PT COCO AGER INDONESIA is a leading manufacturer
            and exporter of high-quality hookah and BBQ charcoal.
          </p>

          <div className="why-features">
            <div className="feature-box">PREMIUM QUALITY</div>
            <div className="feature-box">CUSTOM ORDER</div>
            <div className="feature-box">COMPETITIVE PRICE</div>
            <div className="feature-box">CERTIFIED PRODUCT</div>
            <div className="feature-box">FAST PRODUCTION</div>
          </div>

          <div className="why-image">
            <img src="/src/assets/dummy-home.png" alt="Why Us" />
          </div>
        </div>
      </section>

      {/* ================= HISTORY ================= */}
      <section className="history-section" ref={historyRef}>
        <div className="history-marquee">
          <div className="marquee-track">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i}>AGER</span>
            ))}
          </div>
        </div>

        <div className="history-container">
          <div className="history-grid">
            <div className="history-item">
              <h3>History</h3>
              <p>Over 5 years of experience in premium charcoal manufacturing.</p>
            </div>

            <div className="history-item">
              <h3>Integration</h3>
              <p>Fully integrated production from raw material to export.</p>
            </div>

            <div className="history-item">
              <h3>Global Reach</h3>
              <p>Serving customers across 10+ countries worldwide.</p>
            </div>

            <div className="history-item">
              <h3>Commitment</h3>
              <p>Consistent quality and long-term partnership focus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="vision-mission-section">
        <div className="vision-mission-container">
          <div className="vision-box">
            <h3>VISION</h3>
            <p>
              To become a world-class manufacturer of premium coconut charcoal.
            </p>
          </div>

          <div className="mission-box">
            <h3>MISSION</h3>
            <ul>
              <li>Strict quality control</li>
              <li>Modern machinery</li>
              <li>Sustainable production</li>
              <li>Global expansion</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats-section" ref={statsRef}>
        <img
          src="/src/assets/gambar2.png"
          className="stats-image floating left"
          alt=""
        />
        <img
          src="/src/assets/gambar4.png"
          className="stats-image floating right"
          alt=""
        />

        <div className="stats-grid">
          {[
            { value: 10, label: "Country", suffix: "+" },
            { value: 8000, label: "Land Area", suffix: " m²" },
            { value: 5, label: "Experience", suffix: "+" },
            { value: 600, label: "Capacity", suffix: " tons" },
          ].map((item, i) => (
            <div className="stat-item" key={i}>
              <h3>
                <span
                  ref={(el) => (numbersRef.current[i] = el)}
                  data-target={item.value}
                >
                  0
                </span>
                {item.suffix}
              </h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OUR PRODUCTION ================= */}
      <ProductionSection />
    </div>
  );
};

export default AboutPage;
