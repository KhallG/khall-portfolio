import React from "react";

export default function ProjectCard({ 
  title, 
  shortDescription, 
  detailedDescription, 
  video, 
  links, 
  link, 
  linkname, 
  category, 
  icon, 
  onVideoClick
}) {
  const handleCardClick = (e) => {
    if (video) {
      e.preventDefault();
      onVideoClick({
        title,
        shortDescription,
        detailedDescription,
        video,
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

  return (
    <div
      className={`project-card ${video ? "has-video" : ""}`}
      onClick={handleCardClick}
      style={{ cursor: video ? "pointer" : "default" }}
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

      {video && (
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
            {linkname ? linkname : "Learn More"}
          </a>
        )}
      </div>
    </div>
  );
}