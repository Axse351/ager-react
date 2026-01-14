import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import "./about.css";
import Footer from "../components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dummyHome from "../assets/background.jpeg";
import { aboutVid } from "../assets";

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
          src={aboutVid}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="about-overlay" />
        <div className="about-hero-content">
          <h1>ABOUT&nbsp;US</h1>
          <p>
             "A little journey AGER"
          </p>
        </div>
      </section>

      {/* ================= WHY US ================= */}
     {/* ================= WHY US ================= */}
<section className="why-section">
  <div className="why-container">
    <div className="why-header">
      <span>Why Choose Us</span>
      <h2>Reliable Partner for Global Markets</h2>
      <p>
        PT Coco Ager Indonesia delivers premium coconut shell briquettes
        supported by strict quality control, efficient production, and
        competitive pricing.

        AGER is built on more than 20 years of experience in charcoal manufacturing, with a clear focus on quality, consistency, and global standards.
      </p>
    </div>

    
  </div>
</section>



   {/* ================= COMPANY STORY ================= */}
<section className="company-story">
  <div className="story-header">
    <span>Our Foundation</span>
    <h2>Building Trust Through Quality & Consistency</h2>
  </div>

  <div className="story-grid">
    <div className="story-card">
      <h3>History</h3>
      <p>
        With more than five years of experience, PT Coco Ager Indonesia has
        established itself as a reliable manufacturer of premium coconut
        charcoal briquettes for global markets.
      </p>
    </div>

    <div className="story-card">
      <h3>Integration</h3>
      <p>
        Our fully integrated production system ensures complete control from
        raw materials to export-ready products.
      </p>
    </div>

    <div className="story-card">
      <h3>Global Reach</h3>
      <p>
        We serve international partners across continents, supported by a
        growing global network.
      </p>
    </div>

    <div className="story-card">
      <h3>Commitment</h3>
      <p>
        Every briquette we produce reflects our commitment to consistency,
        reliability, and customer satisfaction.
      </p>
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

     {/* ================= CORE VALUES ================= */}
<section className="values-section">
  <h2 className="values-title">OUR CORE VALUES</h2>

  <div className="values-grid">
    <div className="value-card">
      <h3>Quality Excellence</h3>
      <p>
        We maintain strict quality control to ensure every briquette meets
        international standards.
      </p>
    </div>

    <div className="value-card">
      <h3>Sustainability</h3>
      <p>
        Our production process is environmentally responsible, utilizing
        renewable coconut shell resources.
      </p>
    </div>

    <div className="value-card">
      <h3>Innovation</h3>
      <p>
        We continuously adopt modern technology to improve efficiency and
        product consistency.
      </p>
    </div>

    <div className="value-card">
      <h3>Customer Commitment</h3>
      <p>
        Long-term partnerships and customer satisfaction are at the heart of
        our business.
      </p>
    </div>
  </div>
</section>


<Footer />

    </div>
  );
};

export default AboutPage;
