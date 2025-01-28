import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <header className="hero">
      <h1 className="hero-heading">
        <span class="purple-text">We</span> are Developers
      </h1>
      <h1 className="hero-heading">
        Who <span className="purple-text">make</span> Developers
      </h1>
      <p className="hero-subtitle">
        We can get you to your minimum viable product in 2 months, guaranteed!
      </p>

      <div className="hero-buttons">
        <button className="primary-button">Get started</button>
        <button className="secondary-button">Portfolio</button>
      </div>
    </header>
  );
}
