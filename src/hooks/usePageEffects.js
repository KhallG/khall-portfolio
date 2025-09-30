import { useEffect } from "react";

export function usePageEffects() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((el) => {
      if (el.id === "work") {
        el.classList.add("visible");
      } else {
        el.classList.remove("visible");
      }
      observer.observe(el);
    });

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
      const target = document.querySelector(e.currentTarget.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
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
    const links = document.querySelectorAll(".nav-links a");
    const handler = function () {
      links.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    };
    links.forEach((l) => l.addEventListener("click", handler));
    return () => links.forEach((l) => l.removeEventListener("click", handler));
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.remove("active"));
            const activeLink = document.querySelector(
              `.nav-links a[href="#${entry.target.id}"]`
            );
            if (activeLink) activeLink.classList.add("active");
          }
        });
      },
      { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
}
