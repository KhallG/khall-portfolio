import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ReactPlayer from "react-player";

export default function VideoPlayer({ videoData, onClose }) {
  const [isClosing, setIsClosing] = useState(false);
  const { video, title, shortDescription, detailedDescription, links } = videoData;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const content = (
    <div
      className={`video-overlay ${isClosing ? "closing" : ""}`}
      onClick={handleClose}
    >
      <div
        className={`video-popup ${isClosing ? "closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="video-popup-close"
          onClick={handleClose}
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="video-container">
          <ReactPlayer src={video} playing controls width="100%" height="100%" />
        </div>

        <div className="video-popup-content">
          <h2>{title}</h2>
          {detailedDescription ? (
            <p
              style={{ marginTop: "1rem", fontSize: "1rem", color: "#bbb" }}
              dangerouslySetInnerHTML={{ __html: detailedDescription }}
            />
          ) : (
            shortDescription && <p>{shortDescription}</p>
          )}

          {links && links.length > 0 && (
            <div className="video-popup-footer">
              {links.map((l, i) => (
                <a
                  key={i}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn primary"
                >
                  <i className="fa-solid fa-external-link-alt" style={{ marginRight: "8px" }}></i>
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
