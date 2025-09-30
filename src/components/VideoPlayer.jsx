import React, { useEffect } from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer({ videoUrl, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="video-overlay" onClick={onClose}>
      <div className="video-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        <ReactPlayer
          url={videoUrl}
          playing
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}