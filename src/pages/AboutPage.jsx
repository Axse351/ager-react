import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import "./about.css";
import Footer from "../components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dummyHome from "../assets/background.jpeg";
import { aboutVid } from "../assets";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const historyRef = useRef(null);
  const statsRef = useRef(null);
  const numbersRef = useRef([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (!statsRef.current) return;

    /* ================= FLOATING IMAGE ================= */
    gsap.to(".floating.left", {
      y: -25, // lebih tinggi
      rotation: -6,
      duration: 3.5, // lebih lambat
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    // IMAGE KANAN
    gsap.to(".floating.right", {
      y: -35, // lebih rendah
      rotation: 9,
      duration: 2.6, // lebih cepat
      delay: 0.1, // beda fase
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
        },
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
          <h1>{t("aboutUsCap")}</h1>
          <p>"{t("aLittleJourneyAger")}"</p>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      {/* ================= WHY US ================= */}
      <section className="why-section">
        <div className="why-container">
          <div className="why-header">
            <span>{t("whyChooseUs")}</span>
            <h2>{t("reliablePartnerForGlobalMarkets")}</h2>
            <p>
              {t(
                "ptCocoAgerIndonesiaDeliversPremiumCoconutShellBriquettesSupportedByStrictQualityControlEfficientProductionAndCompetitivePricing",
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ================= COMPANY STORY ================= */}
      <section className="company-story">
        <div className="story-header">
          <span>{t("ourFoundation")}</span>
          <h2>{t("buildingTrustThroughQualityConsistency")}</h2>
        </div>

        <div className="story-grid">
          <div className="story-card">
            <h3>{t("history")}</h3>
            <p>
              {t(
                "withMoreThanFiveYearsOfExperiencePtCocoAgerIndonesiaHasEstablishedItselfAsAReliableManufacturerOfPremiumCoconutCharcoalBriquettesForGlobalMarkets",
              )}
            </p>
          </div>

          <div className="story-card">
            <h3>{t("integration")}</h3>
            <p>
              {t(
                "ourFullyIntegratedProductionSystemEnsuresCompleteControlFromRawMaterialsToExportreadyProducts",
              )}
            </p>
          </div>

          <div className="story-card">
            <h3>{t("globalReach")}</h3>
            <p>
              {t(
                "weServeInternationalPartnersAcrossContinentsSupportedByAGrowingGlobalNetwork",
              )}
            </p>
          </div>

          <div className="story-card">
            <h3>{t("commitment")}</h3>
            <p>
              {t(
                "everyBriquetteWeProduceReflectsOurCommitmentToConsistencyReliabilityAndCustomerSatisfaction",
              )}
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
            <h3>{t("ourVision")}</h3>
            <p>
              {t(
                "toBecomeAWorldclassManufacturerOfPremiumCoconutCharcoalBriquettesDrivenByInnovationSustainabilityAndContinuousImprovement",
              )}
            </p>
          </div>

          <div className="vision-divider" />

          <div className="mission-box">
            <h3>{t("ourMission")}</h3>
            <ul>
              <li>
                {t("deliverPremiumqualityBriquettesWithStrictQualityControl")}
              </li>
              <li>{t("utilizeModernMachineryAndAdvancedTechnology")}</li>
              <li>{t("promoteSustainabilityAndResponsibleManufacturing")}</li>
              <li>{t("expandProductionCapacityAnnually")}</li>
              <li>{t("buildLongtermGlobalPartnerships")}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="values-section">
        <h2 className="values-title">{t("ourCoreValues")}</h2>

        <div className="values-grid">
          <div className="value-card">
            <h3>{t("qualityExcellence")}</h3>
            <p>
              {t(
                "weMaintainStrictQualityControlToEnsureEveryBriquetteMeetsInternationalStandards",
              )}
            </p>
          </div>

          <div className="value-card">
            <h3>{t("sustainability")}</h3>
            <p>
              {t(
                "ourProductionProcessIsEnvironmentallyResponsibleUtilizingRenewableCoconutShellResources",
              )}
            </p>
          </div>

          <div className="value-card">
            <h3>{t("innovation")}</h3>
            <p>
              {t(
                "weContinuouslyAdoptModernTechnologyToImproveEfficiencyAndProductConsistency",
              )}
            </p>
          </div>

          <div className="value-card">
            <h3>{t("customerCommitment")}</h3>
            <p>
              {t(
                "longtermPartnershipsAndCustomerSatisfactionAreAtTheHeartOfOurBusiness",
              )}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
