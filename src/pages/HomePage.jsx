import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HomePage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import coconutShell from "../assets/coconut-shell.png"; // sesuaikan nama file
import menyala from "../assets/menyala.jpeg"; // sesuaikan nama file
import briquetteAsh from "../assets/briquette-ash.png"; // sesuaikan nama file
import briquette from "../assets/briquette.png";
import exportQualityBadge from "../assets/export-quality-badge.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import banner from "../assets/banner.jpg";

import {vid1, vid2, vid3, vid4, vid5} from "../assets"

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
    video: vid1,
  },
  {
    title: "Strict Quality Standards",
    desc: "Multi-stage inspection processes to maintain stable performance and uniform specifications.",
    video: vid2,
  },
  {
    title: "Advanced Manufacturing Technology",
    desc: "Continuously upgraded machinery to enhance efficiency, precision, and reliability.",
    video: vid3,
  },
  {
    title: "Large-Scale Production Capacity",
    desc: "Designed to support long-term contracts and high-volume export requirements.",
    video: vid4,
  },
  {
    title: "Export-Oriented Management",
    desc: "Operational systems aligned with international trade standards.",
    video: vid5,
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
        <img src={banner} alt="AGER Banner" />
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
            "Delivering consistent quality through an integrated production
            system, strict quality control, and large-scale manufacturing
            capacity for global markets."
          </p>
        </div>
      </section>

      <section className="export-story">
  <div className="export-inner">
    <div className="export-text">
     

      <h2>
       Designed for Stable Heat  <br />
      and Consistent Performance
      </h2>

      <p>
       Our shisha briquettes are engineered to deliver stable heat output and consistent performance throughout the burning process, ensuring a reliable and controlled shisha experience from start to finish.
      </p>
       <span className="export-badge">Contact</span>
    </div>

    <div className="export-visual">
      <img src={menyala} alt="Ager Export Production" />
    </div>
  </div>
</section>



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
      {
        icon: icon1,
        title: "100% Natural Coconut Shell",
        desc: "Produced from selected coconut shells without additives.",
      },
      {
        icon: icon2,
        title: "No Trees Cut",
        desc: "Raw materials sourced from coconut shell waste.",
      },
      {
        icon: icon3,
        title: "Eco-Friendly Process",
        desc: "Production designed to minimize waste and emissions.",
      },
      {
        icon: icon4,
        title: "Long Lasting Burn",
        desc: "Extended burning time with stable heat output.",
      },
      {
        icon: icon5,
        title: "Low Ash Content",
        desc: "Clean combustion with minimal ash residue.",
      },
      {
        icon: icon6,
        title: "Premium Quality Grade",
        desc: "Consistent size and performance for global standards.",
      },
    ].map((item, i) => (
      <div className="quality-card" key={i}>
        <div className="quality-icon">
          <img src={item.icon} alt={item.title} />
        </div>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
    ))}
  </div>
</section>

   <section className="video-slider-section">
  <h2 className="video-section-title">
    Built for Consistency. Designed for Global Demand.
  </h2>

  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    navigation
    pagination={{
      clickable: true,
      dynamicBullets: true,
    }}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    spaceBetween={40}
    slidesPerView={1}
    loop
    className="video-swiper"
    onSlideChange={(swiper) => {
      document
        .querySelectorAll(".slide-video")
        .forEach((v) => v.pause());

      const activeVideo =
        swiper.slides[swiper.activeIndex]?.querySelector("video");
      if (activeVideo) activeVideo.play();
    }}
  >
    {slides.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="video-slide-content">
          <div className="video-text">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>

          <div className="video-box">
            <video
              src={item.video}
              muted
              loop
              playsInline
              className="slide-video"
            />
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>


      <Footer />
    </div>
  );
}