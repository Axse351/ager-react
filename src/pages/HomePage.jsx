import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HomePage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import coconutShell from "../assets/coconut-shell.png"; // sesuaikan nama file
import briquetteAsh from "../assets/briquette-ash.png"; // sesuaikan nama file
import briquette from "../assets/briquette.png";
import exportQualityBadge from "../assets/export-quality-badge.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef = useRef(null);
  const subHeadlineRef = useRef(null);
  const statsRef = useRef(null);
  const qualityRef = useRef(null);
  const videoSectionRef = useRef(null);
  const videoTrackRef = useRef(null);
  const videoTitleRef = useRef(null);
  const videoSubtitleRef = useRef(null);
  const numbersRef = useRef([]);
  const productRefs = useRef([]);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Integrated Production System",
      desc: "End-to-end manufacturing control, ensuring consistency from raw material selection to finished product.",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      title: "Strict Quality Standards",
      desc: "Multi-stage inspection processes to maintain stable performance and uniform specifications.",
      video: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      title: "Advanced Manufacturing Technology",
      desc: "Continuously upgraded machinery to enhance efficiency, precision, and reliability.",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      title: "Large-Scale Production Capacity",
      desc: "Designed to support long-term contracts and high-volume export requirements.",
      video: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      title: "Export-Oriented Management",
      desc: "Operational systems aligned with international trade standards.",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ================= HERO TITLE ================= */
      gsap.from(".title-line", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      /* ================= FLOATING PRODUCTS ================= */
      productRefs.current.forEach((el, i) => {
        if (!el) return;

        gsap.from(el, {
          opacity: 0,
          scale: 0.9,
          duration: 1,
          delay: 0.3 + i * 0.12,
          ease: "power3.out",
        });

        gsap.to(el, {
          y: -16,
          duration: 2.5 + i * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      /* ================= SUB HEADLINE ================= */
      gsap.from(".sub-text", {
        scrollTrigger: {
          trigger: subHeadlineRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
      });

      /* ================= STATS COUNT ================= */
      numbersRef.current.forEach((el) => {
        if (!el) return;

        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: el.dataset.target,
            duration: 2,
            ease: "power1.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 75%",
            },
          },
        );
      });

      /* ================= STATS FADE ================= */
      gsap.from(".stats-title, .stats-desc, .stat-item", {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      });
      /* ================= VIDEO SLIDER ================= */
      const slides = gsap.utils.toArray(".video-slide");

      gsap.to(videoTrackRef.current, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: videoSectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => "+=" + window.innerWidth * slides.length,
          onUpdate: (self) => {
            const index = Math.round(self.progress * (slides.length - 1));
            const current = slides[index];

            if (current) {
              gsap.to(videoTitleRef.current, {
                textContent: current.dataset.title,
                duration: 0.4,
                ease: "power2.out",
              });

              gsap.to(videoSubtitleRef.current, {
                textContent: current.dataset.desc,
                duration: 0.4,
                ease: "power2.out",
              });
            }
          },
        },
      });

      /* autoplay video saat aktif */
      slides.forEach((slide) => {
        const video = slide.querySelector("video");
        ScrollTrigger.create({
          trigger: slide,
          start: "left center",
          onEnter: () => video.play(),
          onLeave: () => video.pause(),
          onEnterBack: () => video.play(),
          onLeaveBack: () => video.pause(),
        });
      });

      /* ================= QUALITY CARDS ================= */
      gsap.from(".quality-card", {
        scrollTrigger: {
          trigger: qualityRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="home-container">
      <Header />

      {/* ================= BANNER ================= */}
      <section className="top-banner">
        <img src="/src/assets/banner.JPG" alt="AGER Banner" />
        <div className="banner-overlay">
          <h1 className="premium">Premium</h1>
          <h2 className="title">Coconut Charcoal</h2>
          <p className="subtitle">
            High-quality charcoal made from 100% coconut shells
          </p>
          <button className="btn-know-more">
            <span>Know More</span>
            <span className="arrow">→</span>
          </button>
        </div>
      </section>

      {/* ================= HERO ================= */}

      {/* ================= SUB HEADLINE ================= */}
      <section className="sub-headline" ref={subHeadlineRef}>
        <div className="sub-headline-inner">
          <p className="sub-text">
            Delivering consistent quality through an integrated production
            system, strict quality control, and large-scale manufacturing
            capacity for global markets.
          </p>
        </div>
      </section>

      <div className="natural-section">
        <div className="natural-left">
          <span className="natural-label">100% NATURAL</span>

          <h2 className="natural-title">
            Premium Coconut <br /> Charcoal Briquettes
          </h2>

          <p className="natural-desc">
            Made from selected coconut shells with high carbon content. Produces
            long-lasting heat, low ash, odorless and smokeless.
          </p>

          <div className="natural-features">
            <div className="feature-item">
              <img src={coconutShell} alt="Coconut Shell" />
              <span>Coconut Shell</span>
            </div>

            <div className="feature-item">
              <img src={briquetteAsh} alt="Low Ash" />
              <span>Low Ash</span>
            </div>

            <div className="feature-item">
              <img src={exportQualityBadge} alt="Export Quality" />
              <span>Export Quality</span>
            </div>
          </div>

          <button className="natural-btn">Request Quote</button>
          <small className="minimum-order">Minimum order available</small>
        </div>

        <div className="natural-right">
          <img className="briquette-main" src={briquette} alt="Briquette" />
          <img className="briquette-float" src={briquette} alt="Briquette" />
        </div>
      </div>

      {/* ================= STATS ================= */}
      <section className="stats-section" ref={statsRef}>
        <img
          src="/src/assets/briquette.png"
          className="stats-float left"
          alt=""
        />
        <img
          src="/src/assets/briquette.png"
          className="stats-float right"
          alt=""
        />

        <div className="stats-content">
          <h2 className="stats-title">Our Capability</h2>
          <p className="stats-desc">
            PT. Coco Ager Indonesia is an export-oriented manufacturer
            specializing in premium coconut shell shisha briquettes.
          </p>

          <div className="stats-grid">
            {[
              { value: 20, label: "Years Experience", suffix: "+" },
              { value: 10000, label: "Production Area", suffix: " m²" },
              { value: 500, label: "Employees", suffix: "+" },
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
            <div className="stat-item">
              <h3>Worldwide</h3>
              <p>Market Focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUALITY COMMITMENT ================= */}
      <section className="quality-section" ref={qualityRef}>
        <h2 className="quality-title">Our Quality Commitment</h2>

        <p className="quality-subtitle">
          Our shisha briquettes are manufactured with a strong commitment to
          natural sourcing, environmental responsibility, and consistent
          performance.
        </p>

        <div className="quality-grid">
          {[
            [
              "🌴",
              "100% Natural Coconut Shell",
              "Produced from selected coconut shells without additives.",
            ],
            [
              "🌱",
              "No Trees Cut",
              "Raw materials sourced from coconut shell waste.",
            ],
            [
              "♻️",
              "Eco-Friendly Process",
              "Production designed to minimize waste and emissions.",
            ],
            [
              "🔥",
              "Long Lasting Burn",
              "Extended burning time with stable heat output.",
            ],
            [
              "🧪",
              "Low Ash Content",
              "Clean combustion with minimal ash residue.",
            ],
            [
              "⭐",
              "Premium Quality Grade",
              "Consistent size and performance for global standards.",
            ],
          ].map((item, i) => (
            <div className="quality-card" key={i}>
              <span className="quality-icon">{item[0]}</span>
              <h3>{item[1]}</h3>
              <p>{item[2]}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="video-slider-section">
        <h2 className="video-section-title">
          Built for Consistency. Designed for Global Demand.
        </h2>

        <div className="video-slider-wrapper">
          {/* LEFT ARROW */}
          <button
            className="slider-arrow left"
            onClick={() =>
              setActiveSlide(
                activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
              )
            }
            aria-label="Previous slide"
          >
            ‹
          </button>

          {/* SLIDER CONTAINER */}
          <div className="video-slider-container">
            {slides.map((item, index) => (
              <div
                className={`video-slide ${
                  activeSlide === index ? "active" : ""
                }`}
                key={index}
                style={{
                  display: activeSlide === index ? "grid" : "none",
                }}
              >
                <div className="video-text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>

                <div className="video-box">
                  <video src={item.video} muted autoPlay loop playsInline />
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            className="slider-arrow right"
            onClick={() =>
              setActiveSlide(
                activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
              )
            }
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
