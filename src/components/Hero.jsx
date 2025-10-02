import React from "react";
import { useLang } from "../LanguageContext";

export default function Hero() {
  const { t, lang } = useLang();

  return (
    <section id="home" className="hero fullpage">
      <div className="container hero-container">
        <h1 className="hero-title">
          {lang === "en" ? (
            <>
              {t("hero.titleStart")}{" "}
              <span className="accent rotating-text">
                <span className="typed-word"></span>
              </span>{" "}
              {t("hero.titleEnd")}
            </>
          ) : (
            <>
              {t("hero.titleStart")}{" "}
              {t("hero.titleEnd")}{" "}
              <span className="accent rotating-text">
                <span className="typed-word"></span>
              </span>
            </>
          )}
        </h1>

        <p className="hero-subtitle">{t("hero.subtitle")}</p>

        <div className="hero-buttons">
          <a href="#work" className="btn primary">
            {t("hero.viewProjects")}
          </a>
          <a href="#contact" className="btn secondary">
            {t("hero.contactMe")}
          </a>
        </div>
      </div>
    </section>
  );
}
