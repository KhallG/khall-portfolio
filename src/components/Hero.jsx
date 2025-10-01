import React from "react";

export default function Hero() {
  return (
    <section id="home" className="hero fullpage">
      <div className="container hero-container">
        <h1 className="hero-title">
          Coding{" "}
          <span className="accent rotating-text">
            <span className="typed-word"></span>
          </span>{" "}
          Experiences
        </h1>
        <p className="hero-subtitle">
          I'm Khall, a developer building innovative systems & immersive scripts
          for Garry's Mod.
        </p>
        <div className="hero-buttons">
          <a href="#work" className="btn primary">
            View Projects
          </a>
          <a href="#contact" className="btn secondary">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}