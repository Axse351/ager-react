import { useEffect, useState } from "react";

export default function FeatureCarousel({ features }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % features.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="feature-carousel">
      <div className="feature-carousel-inner">
        <div
          className="feature-track"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {features.map((item, index) => (
            <div className="feature-slide" key={index}>
              <img src={item.icon} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="feature-dots">
          {features.map((_, i) => (
            <span
              key={i}
              className={i === active ? "dot active" : "dot"}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
