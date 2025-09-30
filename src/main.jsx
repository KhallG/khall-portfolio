import React from "react";
import ReactDOM from "react-dom/client";
import Work from "./components/Work.jsx";
const rootElement = document.getElementById("projects-root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Work />
    </React.StrictMode>
  );
}