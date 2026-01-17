import React from "react";
import "./ContactUs.css";
import { agreementPict } from "../assets";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const ContactUsPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="contact-container">
      <Header />

      <div className="heading-wrapper">
        <h1 className="contact-title">{t("contactUs")}</h1>
        <h3 className="contact-subtitle">
          {t(
            "weWelcomeInquiriesAboutOurCoconutCharcoalBriquettespartnershipsAndExportInformationOurTeamIsReadyToAssistYouQuicklyAndProfessionally",
          )}
        </h3>
      </div>
      {/* <img className="agreement-pic" src={agreementPict} alt="" /> */}

      <div className="location-area">
        {/* <h2 className="location-title">LOCATION</h2> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.54703181559!2d108.4835969755526!3d-6.702882165533825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee1c9a719b13f%3A0xcd07810cf031a01c!2s7FWP%2BRFV%2C%20Bodesari%2C%20Kec.%20Plumbon%2C%20Kabupaten%20Cirebon%2C%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1766875307059!5m2!1sen!2sid"
          width="70%"
          height="500px"
          style={{ border: "none" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <h3 className="location-detail">
          {t("7fwprfvBodesariKecPlumbonKabupatenCirebonJawaBarat45155")}
        </h3>
      </div>

      <div className="contact-us-area">
        <div className="contact-details">
          <h2>Contact Us</h2>
          <p className="subtitle">
            {t("emailPhoneOrFillOutTheFormToCollaborateWithAger")}
          </p>

          <p className="link">cocoager@gmail.com</p>
          <p className="phone">(0123) 977-123-126</p>
          <p className="support">Customer Support</p>
        </div>

        <div className="contact-box">
          <h3>{t("getInTouch")}</h3>

          <div className="form-row">
            <input type="text" placeholder={t("firstName")} />
            <input type="text" placeholder={t("lastName")} />
          </div>

          <div className="form-row">
            <input type="email" placeholder={t("email")} />
            <input type="tel" placeholder={t("phoneNumber")} />
          </div>

          <textarea placeholder={t("howWeCanHelp")} />

          <button className="submit-btn">
            {t("check")} <span>→</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
