import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ReactPlayer from "react-player";

export default function VideoPlayer({ videoData, onClose }) {
  const [isClosing, setIsClosing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { media, video, image, title, shortDescription, detailedDescription, links } = videoData;

  // Créer un tableau de médias à partir des props
  const mediaItems = media || (video ? [{ type: 'video', src: video }] : image ? [{ type: 'image', src: image }] : []);
  const hasMultipleMedia = mediaItems.length > 1;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowLeft" && hasMultipleMedia) {
        handlePrev();
      } else if (e.key === "ArrowRight" && hasMultipleMedia) {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
  };

  const currentMedia = mediaItems[currentIndex];

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
          {currentMedia && currentMedia.type === 'video' ? (
            currentMedia.src.includes("youtube.com") || currentMedia.src.includes("youtu.be") ? (
              <ReactPlayer
                src={currentMedia.src}
                playing
                controls
                width="100%"
                height="100%"
                config={{
                  youtube: {
                    playerVars: {
                      origin: window.location.origin,
                      modestbranding: 1,
                      rel: 0
                    }
                  }
                }}
              />
            ) : (
              <video
                key={currentIndex}
                src={currentMedia.src}
                controls
                autoPlay
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            )
          ) : currentMedia && currentMedia.type === 'image' ? (
            <img
              key={currentIndex}
              src={currentMedia.src}
              alt={`Media ${currentIndex + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          ) : null}
        </div>

        {hasMultipleMedia && (
          <div className="media-controls">
            <button
              className="media-nav-btn media-nav-prev"
              onClick={handlePrev}
              aria-label="Previous media"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            <div className="media-dots">
              {mediaItems.map((_, index) => (
                <button
                  key={index}
                  className={`media-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to media ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="media-nav-btn media-nav-next"
              onClick={handleNext}
              aria-label="Next media"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        )}

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