import React from "react";
import NeonGrid from "./components/NeonGrid";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { usePageEffects } from "./hooks/usePageEffects";
import { useLang } from "./LanguageContext";

export default function App() {
  const { lang } = useLang();
  usePageEffects(lang);

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
