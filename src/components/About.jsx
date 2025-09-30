import React from "react";

export default function About() {
  return (
    <section id="about" className="section alt fullpage">
      <div className="container about-container">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-content">
          <div className="about-card-main">
            <div className="about-header">
              <div className="avatar-container">
                <div className="avatar-placeholder">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="about-title-section">
                <h3>Khall</h3>
                <p className="role">Developer & Creator</p>
              </div>
            </div>

            <div className="about-description">
              I'm a developer and creator driven by a passion for immersive roleplay. 
              With over <span className="highlight">5 years of experience</span> in Garry's Mod, 
              I specialize in building <span className="highlight">performance-oriented systems</span>, 
              unique gameplay mechanics, and sleek UI/UX design.
              <br /><br />
              My work isn't just about code — it's about crafting experiences that 
              <span className="highlight"> enhance creativity, community, and immersion</span>.
            </div>

            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">20+</div>
                <div className="stat-label">Innovative Features Created</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">3</div>
                <div className="stat-label">Servers Currently in Development</div>
              </div>
            </div>
          </div>

          <div className="skills-cards">
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-code"></i>
              </div>
              <h4>Lua</h4>
              <p>Advanced scripting</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h4>Helix Framework</h4>
              <p>Custom systems</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-gamepad"></i>
              </div>
              <h4>Gameplay Systems</h4>
              <p>Immersive mechanics</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-palette"></i>
              </div>
              <h4>UI / UX Design</h4>
              <p>Modern interfaces</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-users"></i>
              </div>
              <h4>Community Tools</h4>
              <p>Player engagement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}