import React from "react";
import { useLang } from "../LanguageContext";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="section alt fullpage">
      <div className="container about-container">
        <h2 className="section-title">
          {t("about.title")} <span>{t("about.subtitle")}</span>
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
                <p className="role">{t("about.role")}</p>
              </div>
            </div>

            <div
              className="about-description"
              dangerouslySetInnerHTML={{ __html: t("about.description") }}
            />

            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">5+</div>
                <div className="stat-label">{t("about.stats.years")}</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">20+</div>
                <div className="stat-label">{t("about.stats.features")}</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">3</div>
                <div className="stat-label">{t("about.stats.servers")}</div>
              </div>
            </div>
          </div>

          <div className="skills-cards">
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-code"></i>
              </div>
              <h4>Lua</h4>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h4>Helix Framework</h4>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-gamepad"></i>
              </div>
              <h4>{t("about.skills.gameplayTitle")}</h4>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-palette"></i>
              </div>
              <h4>UI / UX</h4>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-users"></i>
              </div>
              <h4>{t("about.skills.communityTitle")}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
