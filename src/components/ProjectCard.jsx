import React from "react";

export default function ProjectCard({ title, description, link, linkname, video, onVideoClick }) {
  const handleCardClick = (e) => {
    if (video) {
      e.preventDefault();
      onVideoClick(video);
    }
  };

  return (
    <div
      className={`project-card ${video ? "has-video" : ""}`}
      onClick={handleCardClick}
      style={{ cursor: video ? "pointer" : "default" }}
    >
      <div className="project-icon">
        <i className="fa-solid fa-folder-open watermark"></i>
      </div>
      {video && (
        <div className="play-overlay">
          <i className="fa-solid fa-play"></i>
        </div>
      )}

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
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

