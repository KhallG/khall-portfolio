import React, { useState } from "react";
import { useLang } from "../LanguageContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [flipping, setFlipping] = useState(false);
  const { lang, setLang, t } = useLang();
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleLang = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setLang(lang === "fr" ? "en" : "fr");
    }, 400);
    setTimeout(() => {
      setShowOverlay(false);
    }, 800);
  };

  const nextFlagUrl =
    lang === "fr"
      ? "https://flagcdn.com/fr.svg"
      : "https://flagcdn.com/us.svg";

  return (
    <header className="navbar glass">
      <div className="container nav-container">
        <div className="logo">
          <a href="#home">
            <div className="logo-text-wrapper">
              <span className="logo-text">Khall</span>
              <span className="logo-sub">{t("navbar.subtitle")}</span>
            </div>
          </a>
        </div>

        <nav className="nav-links desktop-only">
          <a href="#home">{t("navbar.home")}</a>
          <a href="#about">{t("navbar.about")}</a>
          <a href="#work">{t("navbar.work")}</a>
          <a href="#contact">{t("navbar.contact")}</a>
        </nav>

        <button
          onClick={toggleLang}
          className={`lang-switch ${flipping ? "flipping" : ""}`}
          aria-label="Switch language"
        >
          <div
            className="lang-flag"
            style={{ backgroundImage: `url(${nextFlagUrl})` }}
          ></div>
        </button>

        <button
          className={`burger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">{t("navbar.navigation")}</div>
        <nav>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            {t("navbar.home")}
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            {t("navbar.about")}
          </a>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            {t("navbar.work")}
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            {t("navbar.contact")}
          </a>
        </nav>
      </div>
      {showOverlay && <div className="lang-overlay"></div>}
    </header>
  );
}