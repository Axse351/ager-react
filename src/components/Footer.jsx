import "./Footer.css";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-brand">
          <h2 className="logo">AGER</h2>
          <p>{t("footerDescription")}</p>

          <div className="socials">
            <span>f</span>
            <span>𝕏</span>
            <span>◎</span>
            <span>☎</span>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="footer-col">
          <h4>{t("navigation")}</h4>
          <ul>
            <li>{t("home")}</li>
            <li>{t("aboutUs")}</li>
            <li>{t("products")}</li>
            <li>{t("contactUs")}</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>{t("contactUs")}</h4>
          <p className="link">cocoager@gmail.com</p>
        </div>

        {/* LEGAL */}
        <div className="footer-col">
          <h4>{t("legal")}</h4>
          <ul>
            <li>{t("privacyPolicy")}</li>
            <li>{t("termsOfService")}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
