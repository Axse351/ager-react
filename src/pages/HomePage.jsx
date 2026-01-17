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

import { useTranslation } from "react-i18next";

import { vid1, vid2, vid3, vid4, vid5 } from "../assets";

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
  const { t, i18n } = useTranslation();

  const slides = [
    {
      title: t("integratedProductionSystem"),
      desc: t("endToEndManufacturingControl"),
      video: vid1,
    },
    {
      title: t("strictQualityStandards"),
      desc: t("multiStageInspectionProcesses"),
      video: vid2,
    },
    {
      title: t("advancedManufacturingTechnology"),
      desc: t("continuouslyUpgradedMachinery"),
      video: vid3,
    },
    {
      title: t("largeScaleProductionCapacity"),
      desc: t("designedForLongTermContracts"),
      video: vid4,
    },
    {
      title: t("exportOrientedManagement"),
      desc: t("operationalSystemsAlignedWithInternationalStandards"),
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
          <h1 className="premium">{t("premium")}</h1>
          <h2 className="title">{t("coconutCharcoal")}</h2>
          <p className="subtitle">
            {t("highQualityCharcoalMadeFrom100percentCoconutCharcoal")}
          </p>
          <button className="btn-know-more">
            <span>{t("knowMore")}</span>
            <span className="arrow">→</span>
          </button>
        </div>
      </section>

      {/* ================= HERO ================= */}

      {/* ================= SUB HEADLINE ================= */}
      <section className="sub-headline" ref={subHeadlineRef}>
        <div className="sub-headline-inner">
          <p className="sub-text">
            {t(
              "deliveringConsistentQualityThroughAnIntegratedProductionSystemStrictQualityControlAndLargescaleManufacturingCapacityForGlobalMarkets",
            )}
          </p>
        </div>
      </section>

      <section className="export-story">
        <div className="export-inner">
          <div className="export-text">
            <h2>{t("designedForStableHeatAndConsistentPerformance")}</h2>

            <p>
              {t(
                "ourShishaBriquettesAreManufacturedWithAStrongCommitmentToNaturalSourcingEnvironmentalResponsibilityAndConsistentPerformance",
              )}
            </p>
            <span className="export-badge">{t("contact")}</span>
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
          <h2 className="stats-title">{t("ourCapability")}</h2>
          <p className="stats-desc">
            {t(
              "agerIsAnExportorientedManufacturerSpecializingInPremiumCoconutShellShishaBriquettes",
            )}
          </p>

          <div className="stats-grid">
            {[
              { value: 20, label: t("yearsExperience"), suffix: "+" },
              { value: 10000, label: t("productionArea"), suffix: " m²" },
              { value: 500, label: t("employees"), suffix: "+" },
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
              <h3>{t("worldwide")}</h3>
              <p>{t("marketFocus")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUALITY COMMITMENT ================= */}
      <section className="quality-section" ref={qualityRef}>
        <h2 className="quality-title">{t("ourQualityCommitment")}</h2>

        <p className="quality-subtitle">
          {t(
            "ourShishaBriquettesAreManufacturedWithAStrongCommitmentToNaturalSourcingEnvironmentalResponsibilityAndConsistentPerformance",
          )}
        </p>

        <div className="quality-grid">
          {[
            {
              icon: icon1,
              title: t("100percentNaturalCoconutShell"),
              desc: t("producedFromSelectedCoconutShellsWithoutAdditives"),
            },
            {
              icon: icon2,
              title: t("noTreesCut"),
              desc: t("rawMaterialsSourcedFromCoconutShellWaste"),
            },
            {
              icon: icon3,
              title: t("ecoFriendlyProcess"),
              desc: t("productionDesignedToMinimizeWasteAndEmissions"),
            },
            {
              icon: icon4,
              title: t("longLastingBurn"),
              desc: t("extendedBurningTimeWithStableHeatOutput"),
            },
            {
              icon: icon5,
              title: t("lowAshContent"),
              desc: t("cleanCombustionWithMinimalAshResidue"),
            },
            {
              icon: icon6,
              title: t("premiumQualityGrade"),
              desc: t("consistentSizeAndPerformanceForGlobalStandards"),
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
          {t("builtForConsistencyDesignedForGlobalDemand")}
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
            document.querySelectorAll(".slide-video").forEach((v) => v.pause());

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
