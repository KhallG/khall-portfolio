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
      <div className="container">
        <div className="work-header">
          <h2 className="section-title">
            Code &<span> Projects</span>
          </h2>
          
          <div className="category-switch">
            <div className={`switch-bg ${activeTab}`}></div>
            <button
              className={`switch-btn ${activeTab === "projects" ? "active" : ""}`}
              onClick={() => setActiveTab("projects")}
            >
              <i className="fas fa-solid fa-globe"></i>
              <span>Projects</span>
              <div className="count">{projects.length}</div>
            </button>
            <button
              className={`switch-btn ${activeTab === "plugins" ? "active" : ""}`}
              onClick={() => setActiveTab("plugins")}
            >
              <i className="fas fa-solid fa-code"></i>
              <span>Plugins</span>
              <div className="count">{plugins.length}</div>
            </button>
          </div>
        </div>

        <div className="projects-container">
          <div className={`projects-grid fade-in ${activeTab}`}>
            {data.map((item, index) => (
              <ProjectCard
                key={`${activeTab}-${index}`}
                {...item}
                category={activeTab} 
                onVideoClick={(videoData) => setActiveVideo(videoData)}
              />
            ))}
          </div>
        </div>

        {activeVideo && (
          <VideoPlayer
            videoData={activeVideo}
            onClose={() => setActiveVideo(null)}
          />
        )}
      </div>
    </section>
  );
}