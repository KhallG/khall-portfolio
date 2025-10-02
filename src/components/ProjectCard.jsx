import React from "react";
import { useLang } from "../LanguageContext";

export default function ProjectCard({ 
  title, 
  shortDescription, 
  detailedDescription, 
  video,
  image,
  media,
  links, 
  link, 
  linkname, 
  category, 
  icon, 
  onVideoClick
}) {
  const { t } = useLang();

  const handleCardClick = (e) => {
    if (video || image || (media && media.length > 0)) {
      e.preventDefault();
      onVideoClick({
        title,
        shortDescription,
        detailedDescription,
        video,
        image,
        media,
        links,
        link,
        linkname,
        category,
        icon
      });
    }
  };

  const defaultIcon =
    category === "projects"
      ? "fa-solid fa-globe watermark"
      : category === "plugins"
      ? "fa-solid fa-code watermark"
      : "fa-solid fa-folder-open watermark";

  const hasMedia = video || image || (media && media.length > 0);

  return (
    <div
      className={`project-card ${hasMedia ? "has-video" : ""}`}
      onClick={handleCardClick}
      style={{ cursor: hasMedia ? "pointer" : "default" }}
    >
      <div className="project-icon">
        {icon ? (
          icon.endsWith(".png") || icon.endsWith(".jpg") || icon.endsWith(".svg") ? (
            <img src={icon} alt={title} className="icon-img watermark" />
          ) : (
            <i className={`${icon} watermark`}></i>
          )
        ) : (
          <i className={defaultIcon}></i>
        )}
      </div>

      {hasMedia && (
        <div className="play-overlay">
          <i className="fa-solid fa-play"></i>
        </div>
      )}

      <div className="project-content">
        <h3>{title}</h3>
        <p>{shortDescription}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn small"
            onClick={(e) => e.stopPropagation()}
          >
            {linkname ? linkname : t("projects.learnMore")}
          </a>
        )}
      </div>
    </div>
  );
}
