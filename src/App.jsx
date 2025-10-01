import React from "react";
import NeonGrid from "./components/NeonGrid";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { usePageEffects } from "./hooks/usePageEffects";

export default function App() {
  usePageEffects();

  return (
    <>
      <NeonGrid />
      <div className="gradient-overlay"></div>
      <div className="vignette"></div>

      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}