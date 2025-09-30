import React from "react";

export default function About() {
  return (
    <section id="about" className="section alt fullpage">
      <div className="container about-container">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>
        <p className="about-intro">
          I'm <strong>Khall</strong>, a developer and creator driven by a passion for immersive roleplay.  
          With over <strong>5 years of experience</strong> in Garry's Mod, I specialize in building
          <span className="accent"> performance-oriented systems</span>, unique gameplay mechanics, and sleek UI/UX design.
          <br />
          <br />
          My work isn’t just about code — it’s about crafting experiences that{" "}
          <span className="accent">enhance creativity, community, and immersion</span>.
        </p>
        <div className="skills">
          <span className="skill-badge">Lua</span>
          <span className="skill-badge">Helix Framework</span>
          <span className="skill-badge">Gameplay Systems</span>
          <span className="skill-badge">UI / UX Design</span>
          <span className="skill-badge">Community Tools</span>
        </div>
      </div>
    </section>
  );
}
