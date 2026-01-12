import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/production.css";

export default function ProductionSection() {
  const trackRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const currentIndex = useRef(0);

  const productions = [
    {
      video: "/video/ager-banner.mp4",
      title: "Raw Material Selection",
      desc: "Carefully selected coconut shells sourced from sustainable farms.",
    },
    {
      video: "/video/production-2.mp4",
      title: "Modern Manufacturing",
      desc: "Advanced machinery ensures consistency, efficiency, and quality.",
    },
    {
      video: "/video/production-3.mp4",
      title: "Quality Control & Packing",
      desc: "Strict inspection and export-ready packaging standards.",
    },
  ];

  const slideTo = (index) => {
    gsap.to(trackRef.current, {
      xPercent: -index * 100,
      duration: 0.9,
      ease: "power3.inOut",
    });

    gsap.fromTo(
      [titleRef.current, descRef.current],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08,
      }
    );
  };

  const nextSlide = () => {
    currentIndex.current =
      (currentIndex.current + 1) % productions.length;
    slideTo(currentIndex.current);
  };

  const prevSlide = () => {
    currentIndex.current =
      (currentIndex.current - 1 + productions.length) %
      productions.length;
    slideTo(currentIndex.current);
  };

  useEffect(() => {
    slideTo(0);
  }, []);

  return (
    <section className="production-section">
      <h2 className="production-title">OUR PRODUCTION</h2>

      <div className="production-slider">
        <button className="prod-btn left" onClick={prevSlide}>
          ‹
        </button>

        <div className="production-viewport">
          <div className="production-track" ref={trackRef}>
            {productions.map((item, i) => (
              <div className="production-slide" key={i}>
                <video
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            ))}
          </div>
        </div>

        <button className="prod-btn right" onClick={nextSlide}>
          ›
        </button>
      </div>

      <div className="production-text">
        <h3 ref={titleRef}>
          {productions[currentIndex.current].title}
        </h3>
        <p ref={descRef}>
          {productions[currentIndex.current].desc}
        </p>
      </div>
    </section>
  );
}
