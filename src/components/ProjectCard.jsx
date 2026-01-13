import React from "react";
import { useLang } from "../LanguageContext";

export default function ProjectCard({ 
  itemKey,
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
  newUntil,
  onVideoClick
}) {
  const { t } = useLang();

  const translated = itemKey
    ? {
        title: t(`${category}.${itemKey}.title`),
        shortDescription: t(`${category}.${itemKey}.shortDescription`),
        detailedDescription: t(`${category}.${itemKey}.detailedDescription`),
        linkname: t(`${category}.${itemKey}.linkname`),
      }
    : {};

  const handleCardClick = (e) => {
    if (video || image || (media && media.length > 0)) {
      e.preventDefault();
      onVideoClick({
        title: translated?.title || title,
        shortDescription: translated?.shortDescription || shortDescription,
        detailedDescription: translated?.detailedDescription || detailedDescription,
        video,
        image,
        media,
        links: links?.map((l, i) => ({
          ...l,
          label: t(`${category}.${itemKey}.linkLabel${i+1}`) || l.label
        })),
        link,
        linkname: translated?.linkname || linkname,
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
  const isNew = newUntil ? new Date(newUntil) > new Date() : false;

  return (
    <div
      className={`project-card ${hasMedia ? "has-video" : ""}`}
      onClick={handleCardClick}
      style={{ cursor: hasMedia ? "pointer" : "default" }}
    >
      {isNew && (
        <div className="new-badge">
          <span>NEW</span>
          <div className="new-badge-glow"></div>
        </div>
      )}

      <div className="project-icon">
        {icon ? (
          icon.endsWith(".png") || icon.endsWith(".jpg") || icon.endsWith(".svg") ? (
            <img 
              src={icon} 
              alt={translated?.title || title} 
              className="icon-img watermark" 
            />
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
        <h3>{translated?.title || title}</h3>
        <p>{translated?.shortDescription || shortDescription}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn small"
            onClick={(e) => e.stopPropagation()}
          >
            {translated?.linkname || linkname || t("projects.learnMore")}
          </a>
        )}
      </div>
    </div>
  );
}