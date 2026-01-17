import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { logo } from "../assets";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  return (
    <header className="header header-fixed">
      <img
        src={logo}
        alt="AGER Logo"
        className="logo"
        onClick={() => navigate("/")}
      />

      <nav className="nav">
        <span onClick={() => navigate("/")}>{t("home")}</span>
        <span onClick={() => navigate("/about")}>{t("aboutUs")}</span>
        <span onClick={() => navigate("/product")}>{t("products")}</span>
        <button onClick={() => navigate("/contact-us")}>
          {t("contactUs")}
        </button>
      </nav>

      <div className="lang-selector">
        <p className="lang-option id-lang" onClick={() => i18n.changeLanguage("id")}>ID</p>
        <p className="lang-option en-lang" onClick={() => i18n.changeLanguage("en")}>EN</p>
        <p className="lang-option ar-lang" onClick={() => i18n.changeLanguage("ar")}>AR</p>
      </div>
    </header>
  );
}
