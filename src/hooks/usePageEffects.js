import { useEffect } from "react";

export function usePageEffects() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = document.querySelector(".rotating-text");
    if (!container) return;

    const words = Array.from(container.querySelectorAll(".word"));
    if (words.length <= 1) return;

    words.forEach((w, i) => {
      w.classList.toggle("is-visible", i === 0);
      w.classList.toggle("is-hidden", i !== 0);
    });

    let idx = 0;
    const HOLD = 2200;
    const FADE = 350;

    const interval = setInterval(() => {
      const current = words[idx];
      const nextIdx = (idx + 1) % words.length;
      const next = words[nextIdx];

      next.classList.remove("is-hidden");
      next.classList.add("is-visible");

      current.classList.remove("is-visible");
      current.classList.add("is-out");

      setTimeout(() => {
        current.classList.remove("is-out");
        current.classList.add("is-hidden");
      }, FADE);

      idx = nextIdx;
    }, HOLD);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handler = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      const target = document.querySelector(href);
      
      if (target) {
        target.classList.add("visible");
        
        const isMobile = window.innerWidth <= 768;
        const offset = isMobile ? 70 : 80;
        
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    };
    
    anchors.forEach((a) => a.addEventListener("click", handler));
    return () => anchors.forEach((a) => a.removeEventListener("click", handler));
  }, []);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    const reset = () => window.scrollTo(0, 0);
    window.addEventListener("beforeunload", reset);
    return () => window.removeEventListener("beforeunload", reset);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a, .mobile-menu a");

    const updateActiveLink = () => {
      const scrollPosition = window.scrollY + 150;

      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();

    return () => window.removeEventListener("scroll", updateActiveLink);
  }, []);
}