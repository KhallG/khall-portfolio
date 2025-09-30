import React from "react";

export default function Hero() {
  return (
    <section id="home" className="hero fullpage">
      <div className="container hero-container">
        <h1 className="hero-title">
          Crafting{" "}
          <span className="accent rotating-text">
            <span className="word is-visible">Unique</span>
            <span className="word is-hidden">Immersive</span>
            <span className="word is-hidden">Futuristic</span>
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