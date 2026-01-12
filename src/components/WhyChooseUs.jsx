import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/WhyChooseUs.css";
import {
  iconLongLasting,
  iconLowAsh,
  iconSmokeless,
  iconOdorless,
} from "../assets";

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(".choose-item", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  }, []);

  const items = [
    {
      icon: iconLongLasting,
      title: "Long Burning Time",
      desc: "Stable heat that lasts longer for premium sessions.",
    },
    {
      icon: iconLowAsh,
      title: "Low Ash Residue",
      desc: "Cleaner use with minimal ash production.",
    },
    {
      icon: iconSmokeless,
      title: "Smokeless",
      desc: "Efficient combustion without unwanted smoke.",
    },
    {
      icon: iconOdorless,
      title: "Odorless",
      desc: "No unpleasant smell during or after burning.",
    },
  ];

  return (
    <section ref={sectionRef} className="choose-section">
      <div className="choose-header">
        <span className="choose-label">WHY CHOOSE US</span>
        <h2>
          Crafted for <span>Quality</span> & Performance
        </h2>
        <p>
          Every briquette is made from selected coconut shells and processed
          with strict quality control.
        </p>
      </div>

      <div className="choose-grid">
        {items.map((item, i) => (
          <div key={i} className="choose-item">
            <img src={item.icon} alt={item.title} />
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
