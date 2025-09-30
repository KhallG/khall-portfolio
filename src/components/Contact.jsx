import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section fullpage">
      <div className="container contact-container">
        <h2 className="section-title">
          Let's <span>Work Together</span>
        </h2>
        <p className="contact-intro">
          Want to collaborate or need a custom plugin for your server? Reach out via the links below.
        </p>
        <div className="contact-grid">
          <div className="contact-item">
            <i className="fa-brands fa-discord"></i>
            <p><strong>khall___</strong></p>
          </div>
          <div className="contact-item">
            <i className="fa-solid fa-envelope"></i>
            <p><strong>khalldevg@gmail.com</strong></p>
          </div>
          <div className="contact-item">
            <i className="fa-brands fa-github"></i>
            <p>
              <a href="https://github.com/KhallG" target="_blank" rel="noopener noreferrer">
                github.com/KhallG
              </a>
            </p>
          </div>
          <div className="contact-item">
            <i className="fa-brands fa-steam"></i>
            <p>
              <a href="https://steamcommunity.com/profiles/76561198174252822/" target="_blank" rel="noopener noreferrer">
                Khall
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
