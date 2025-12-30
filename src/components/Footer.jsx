import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-brand">
          <h2 className="logo">AGER</h2>
          <p>
            Premium briquette supplier for premium shisha. Contact us if you
            want to collaborate.
          </p>

          <div className="socials">
            <span>f</span>
            <span>𝕏</span>
            <span>◎</span>
            <span>☎</span>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p className="link">cocoager@gmail.com</p>
        </div>

        {/* LEGAL */}
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
