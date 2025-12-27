import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import "./about.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const historyRef = useRef(null);
  const statsRef = useRef(null);
  const numbersRef = useRef([]);

  useEffect(() => {
    if (!statsRef.current) return;

    /* ================= FLOATING IMAGE ================= */
   gsap.to(".floating.left", {
  y: -25,          // lebih tinggi
  rotation: -6,
  duration: 3.5,   // lebih lambat
  ease: "power1.inOut",
  yoyo: true,
  repeat: -1,
});

// IMAGE KANAN
gsap.to(".floating.right", {
  y: -35,          // lebih rendah
  rotation: 9,
  duration: 2.6,   // lebih cepat
  delay: 0.1,      // beda fase
  ease: "power1.inOut",
  yoyo: true,
  repeat: -1,
});

    /* ================= COUNTER NUMBER ================= */
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
      {/* ================= HEADER ================= */}
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
          <h1>ABOUT&nbsp;US</h1>
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
            and exporter of high-quality hookah and BBQ charcoal. We are
            committed to innovation, sustainability, and delivering premium
            products worldwide.
          </p>

          <div className="why-features">
            <div className="feature-box">PREMIUM QUALITY</div>
            <div className="feature-box">CUSTOMIZATION ORDER</div>
            <div className="feature-box">COMPETITIVE PRICE</div>
            <div className="feature-box">PRODUCT CERTIFICATE</div>
            <div className="feature-box">FAST PRODUCTION</div>
          </div>

          <div className="why-image">
            <img src="src/assets/dummy-home.png" alt="Why Us" />
          </div>
        </div>
      </section>

      {/* ================= HISTORY ================= */}
      <section className="history-section" ref={historyRef}>
        <div className="history-marquee">
          <div className="marquee-track">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i}>AGER</span>
            ))}
          </div>
        </div>

        <div className="history-container">
          <div className="history-grid">
            <div className="history-item">
              <h3>History</h3>
              <p>
                A company with more than 5 years of experience in manufacturing
                premium coconut charcoal for global markets.
              </p>
            </div>

            <div className="history-item">
              <h3>Integration</h3>
              <p>
                A fully integrated enterprise where brand excellence and
                in-house manufacturing operate as one.
              </p>
            </div>

            <div className="history-item">
              <h3>Global Reach</h3>
              <p>
                A strong international footprint with offices and
                representatives across 4 continents and 6 countries.
              </p>
            </div>

            <div className="history-item">
              <h3>Commitment</h3>
              <p>
                Unwavering dedication to delivering consistent quality and
                products our customers truly deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="vision-mission-section">
        <div className="vm-title-wrapper">
          <h2 className="vm-vision">VISION</h2>
          <div className="vm-mission-box">
            <span>MISSION</span>
          </div>
        </div>

        <div className="vision-mission-container">
          <div className="vision-box">
            <h3>OUR VISION</h3>
            <p>
              To become a world-class manufacturer of premium coconut charcoal
              briquettes, driven by innovation, sustainability, and continuous
              improvement.
            </p>
          </div>

          <div className="vision-divider" />

          <div className="mission-box">
            <h3>OUR MISSION</h3>
            <ul>
              <li>Deliver premium-quality briquettes with strict quality control.</li>
              <li>Utilize modern machinery and advanced technology.</li>
              <li>Promote sustainability and responsible manufacturing.</li>
              <li>Expand production capacity annually.</li>
              <li>Build long-term global partnerships.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= STATISTICS ================= */}
      <section className="stats-section" ref={statsRef}>
        <img
          src="src/assets/gambar2.png"
          alt="Box"
          className="stats-image floating left"
        />
        <img
          src="src/assets/gambar4.png"
          alt="Charcoal"
          className="stats-image floating right"
        />

        <div className="stats-grid">
          {[
            { value: 10, label: "Country", suffix: "+" },
            { value: 8000, label: "Land Area", suffix: " m" },
            { value: 5, label: "Experience", suffix: "+" },
            { value: 600, label: "Production Capacity", suffix: " tons" },
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
    </div>
  );
};

export default AboutPage;
