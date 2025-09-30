import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import ReactPlayer from "react-player";

export default function VideoPlayer({ videoUrl, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const content = (
    <div className="video-overlay" onClick={onClose}>
      <div className="video-popup" onClick={(e) => e.stopPropagation()}>
        <ReactPlayer
          src={videoUrl}
          playing
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.body);
}