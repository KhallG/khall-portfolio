import React from "react";
import NeonGrid from "src/components/Neongrid";
import Navbar from "src/components/Navbar";
import Hero from "src/components/Hero";
import About from "src/components/About";
import Work from "src/components/Work";
import Contact from "src/components/Contact";
import Footer from "src/components/Footer";
import { usePageEffects } from "src/hooks/usePageEffects";

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