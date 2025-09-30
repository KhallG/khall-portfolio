import React from "react";
import projects from "../data/projects";
import plugins from "../data/plugins";
import ProjectCard from "./ProjectCard";
import VideoPlayer from "./VideoPlayer";

export default function Work() {
  const [activeTab, setActiveTab] = React.useState("projects");
  const [activeVideo, setActiveVideo] = React.useState(null);

  const data = activeTab === "projects" ? projects : plugins;

  return (
    <section id="work" className="section">
      <div className="container projects-wrapper">
        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        {/* Tabs */}
        <div className="projects-tabs">
          <button
            className={`tab ${activeTab === "projects" ? "active" : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            Projects
          </button>
          <button
            className={`tab ${activeTab === "plugins" ? "active" : ""}`}
            onClick={() => setActiveTab("plugins")}
          >
            Addons & Plugins
          </button>
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {data.map((item, index) => (
            <ProjectCard
              key={index}
              {...item}
              onVideoClick={(video) => setActiveVideo(video)}
            />
          ))}
        </div>

        {/* Popup Video */}
        {activeVideo && (
          <VideoPlayer
            videoUrl={activeVideo}
            onClose={() => setActiveVideo(null)}
          />
        )}
      </div>
    </section>
  );
}