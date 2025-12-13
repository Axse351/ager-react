import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const product1Ref = useRef(null);
  const product2Ref = useRef(null);
  const product3Ref = useRef(null);
  const product4Ref = useRef(null);
  const charcoalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(".title-line", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.3,
      });

      // Animate products -animasi masuk
      gsap.from(product1Ref.current, {
        opacity: 0,
        x: -100,
        duration: 1.2,
        ease: "back.out(1.7)",
        delay: 0.5,
      });
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(product2Ref.current, {
        opacity: 0,
        x: 100,
        duration: 1.2,
        ease: "back.out(1.7)",
        delay: 0.7,
      });

      gsap.from(product3Ref.current, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "back.out(1.7)",
        delay: 0.9,
      });

      gsap.from(product4Ref.current, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "back.out(1.7)",
        delay: 1.1,
      });

      gsap.from(charcoalRef.current, {
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: "back.out(2)",
        delay: 1.3,
      });

      // Floating animation loop
      gsap.to(product1Ref.current, {
        y: -20,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(product2Ref.current, {
        y: -15,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });

      gsap.to(product3Ref.current, {
        y: -18,
        duration: 2.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });

      gsap.to(product4Ref.current, {
        y: -18,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.2,
      });

      // Charcoal
      gsap.to(charcoalRef.current, {
        y: -15,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#FAF8F0",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.5rem 10rem",
          position: "relative",
          zIndex: 100,
        }}
      >
        <img
          src="/src/assets/logo.png"
          alt="AGER Logo"
          style={{
            height: "50px",
            width: "auto",
            objectFit: "contain",
            cursor: "pointer",
          }}
        />
        <nav
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <p
            style={{
              color: "#C08142",
              textDecoration: "none",
              transition: "color 0.3s",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            Home
          </p>

          <p
            style={{
              color: "#C08142",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            onClick={() => navigate("/about")}
          >
            About Us
          </p>
          <p
            onClick={() => navigate("/gallery")}
            style={{
              color: "#C08142",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
          >
            Gallery
          </p>
          <p
            style={{
              color: "#C08142",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            onClick={() => navigate("/product")}
          >
            Product
          </p>
          <button
            style={{
              padding: "0.5rem 1.5rem",
              borderRadius: "25px",
              backgroundColor: "#C08142",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "opacity 0.3s",
            }}
            onClick={() => navigate("/contact-us")}
          >
            Contact Us
          </button>
        </nav>
      </header>

      <main
        ref={heroRef}
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "calc(100vh - 100px)",
          overflow: "hidden",
          padding: "2rem",
        }}
      >
        {/* Gambar 1*/}
        <div
          ref={product1Ref}
          style={{
            position: "absolute",
            top: "5%",
            left: "15%",
            width: "280px",
            height: "280px",
            zIndex: 1,
            transform: "rotate(-12deg)",
          }}
        >
          <img
            src="/src/assets/gambar1.png"
            alt="AGER Product 1"
            style={{
              width: "200%",
              height: "200%",
              objectFit: "contain",
              filter: "blur(2px) drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))",
            }}
          />
        </div>

        {/* gambar2 */}
        <div
          ref={product2Ref}
          style={{
            position: "absolute",
            top: "-5%",
            right: "37%",
            width: "320px",
            height: "300px",
            zIndex: 1,
            transform: "rotate(10deg)",
          }}
        >
          <img
            src="/src/assets/gambar2.png"
            alt="AGER Product 2"
            style={{
              width: "180%",
              height: "180%",
              objectFit: "contain",
              filter: "blur(2px) drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))",
            }}
          />
        </div>

        {/* Tulisan Utama */}
        <div
          ref={titleRef}
          style={{
            textAlign: "center",
            zIndex: 10,
            position: "relative",
          }}
        >
          <div
            className="title-line"
            style={{
              fontSize: "clamp(3rem, 8vw, 5rem)",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#C08142",
              lineHeight: 1.2,
            }}
          >
            TRANSFORM YOUR
          </div>
          <div
            className="title-line"
            style={{
              display: "inline-block",
              padding: "1.5rem 4rem",
              fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
              fontWeight: "bold",
              color: "white",
              transform: "rotate(-2deg)",
              backgroundColor: "#C08142",
              boxShadow: "0 10px 30px rgba(192, 129, 66, 0.3)",
            }}
          >
            HOOKAH ENJOYMENT
          </div>
        </div>

        {/* gambar3 */}
        <div
          ref={product3Ref}
          style={{
            position: "absolute",
            bottom: "23%",
            left: "48%",
            width: "280px",
            height: "310px",
            zIndex: 15,
            transform: "rotate(-15deg)",
          }}
        >
          <img
            src="/src/assets/gambar1.png"
            alt="AGER Product 3"
            style={{
              width: "200%",
              height: "200%",
              objectFit: "contain",
              filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))",
            }}
          />
        </div>

        {/* gambar 4 */}
        <div
          ref={product4Ref}
          style={{
            position: "absolute",
            bottom: "16%", // pindahin posisi bawah
            right: "56%", // pindahin posisi dari kanna
            width: "300px",
            height: "330px",
            zIndex: 15, // layering
            transform: "rotate(-15deg)", // buat rotasi
          }}
        >
          <img
            src="/src/assets/gambar4.png"
            alt="AGER Product 4"
            style={{
              width: "110%",
              height: "110%",
              objectFit: "contain",
              filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))",
            }}
          />
        </div>
      </main>
    </div>
  );
}
