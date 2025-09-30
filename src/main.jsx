import React from "react";
import ReactDOM from "react-dom/client";
import Work from "./components/Work.jsx";

import "./js/scripts.js";
import "./js/neon-grid.js";

const rootElement = document.getElementById("projects-root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Work />
    </React.StrictMode>
  );
} else {
  console.error("❌ Element #projects-root introuvable dans index.html");
}