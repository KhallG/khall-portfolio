import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section fullpage">
      <div className="container contact-container">
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>

        <div className="contact-content">
          <div className="contact-status-card">
            <div className="status-indicator">
              <div className="status-dot unavailable"></div>
              <span>Currently Unavailable</span>
            </div>
            <p className="status-message">
              I'm not taking on new collaborations at the moment, but feel free to reach out 
              if you have questions or just want to connect.
            </p>
          </div>

          <div className="contact-methods">
            <a href="https://discord.com/users/khall___" target="_blank" rel="noopener noreferrer" className="contact-card discord">
              <div className="contact-card-icon">
                <i className="fa-brands fa-discord"></i>
              </div>
              <div className="contact-card-content">
                <h4>Discord</h4>
                <p>khall___</p>
              </div>
              <div className="contact-card-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </a>

            <a href="mailto:khalldevg@gmail.com" className="contact-card email">
              <div className="contact-card-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="contact-card-content">
                <h4>Email</h4>
                <p>khalldevg@gmail.com</p>
              </div>
              <div className="contact-card-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </a>

            <a href="https://github.com/KhallG" target="_blank" rel="noopener noreferrer" className="contact-card github">
              <div className="contact-card-icon">
                <i className="fa-brands fa-github"></i>
              </div>
              <div className="contact-card-content">
                <h4>GitHub</h4>
                <p>github.com/KhallG</p>
              </div>
              <div className="contact-card-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </a>

            <a href="https://steamcommunity.com/profiles/76561198174252822/" target="_blank" rel="noopener noreferrer" className="contact-card steam">
              <div className="contact-card-icon">
                <i className="fa-brands fa-steam"></i>
              </div>
              <div className="contact-card-content">
                <h4>Steam</h4>
                <p>Khall</p>
              </div>
              <div className="contact-card-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}