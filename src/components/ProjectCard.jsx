import React from "react";

export default function ProjectCard({ title, description, image, link, video, onVideoClick }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-img" />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn small">
            Learn More
          </a>
        )}
        {video && (
          <a
            href="#"
            className="btn small"
            onClick={(e) => {
              e.preventDefault();
              onVideoClick(video);
            }}
          >
            Watch Video
          </a>
        )}
      </div>
    </div>
  );
}
