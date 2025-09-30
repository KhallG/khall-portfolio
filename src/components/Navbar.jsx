import React from "react";

export default function Navbar() {
  return (
    <header className="navbar glass">
      <div className="container nav-container">
        <div className="logo">
          <a href="#home">
            <div className="logo-text-wrapper">
              <span className="logo-text">Khall</span>
              <span className="logo-sub">Developer & Creator</span>
            </div>
          </a>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#work">Creations</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
