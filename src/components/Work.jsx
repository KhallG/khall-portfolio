import React from "react";
import projects from "../data/projects";
import plugins from "../data/plugins";

export default function Work() {
  const [activeTab, setActiveTab] = React.useState("projects");
  const data = activeTab === "projects" ? projects : plugins;

  return (
    <div className="projects-wrapper">
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
          <div className="project-card" key={index}>
            <img src={item.image} alt={item.title} className="project-img" />
            <div className="project-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn small"
                >
                  Learn More
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}