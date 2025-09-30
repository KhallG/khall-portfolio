import React, { useRef, useEffect } from "react";

export default function NeonGrid() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const gridSize = 50;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouse.current.x = e.touches[0].clientX;
        mouse.current.y = e.touches[0].clientY;
      }
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        for (let x = 0; x <= canvas.width; x += 5) {
          const dx = mouse.current.x - x;
          const dy = mouse.current.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 300;
          let offsetY = 0;
          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * 30;
            offsetY = force * (dy / dist);
          }
          if (x === 0) ctx.moveTo(x, y + offsetY);
          else ctx.lineTo(x, y + offsetY);
        }
        const gradient = ctx.createLinearGradient(0, y, canvas.width, y);
        gradient.addColorStop(0, "rgba(255, 23, 68, 0.05)");
        gradient.addColorStop(0.5, "rgba(255, 23, 68, 0.25)");
        gradient.addColorStop(1, "rgba(255, 23, 68, 0.05)");
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "rgba(255, 23, 68, 0.6)";
        ctx.stroke();
      }

      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        for (let y = 0; y <= canvas.height; y += 5) {
          const dx = mouse.current.x - x;
          const dy = mouse.current.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 300;
          let offsetX = 0;
          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * 30;
            offsetX = force * (dx / dist);
          }
          if (y === 0) ctx.moveTo(x + offsetX, y);
          else ctx.lineTo(x + offsetX, y);
        }
        const gradient = ctx.createLinearGradient(x, 0, x, canvas.height);
        gradient.addColorStop(0, "rgba(255, 23, 68, 0.05)");
        gradient.addColorStop(0.5, "rgba(255, 23, 68, 0.25)");
        gradient.addColorStop(1, "rgba(255, 23, 68, 0.05)");
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "rgba(255, 23, 68, 0.6)";
        ctx.stroke();
      }

      // Glow at mouse
      const glow = ctx.createRadialGradient(
        mouse.current.x,
        mouse.current.y,
        0,
        mouse.current.x,
        mouse.current.y,
        200
      );
      glow.addColorStop(0, "rgba(255, 23, 68, 0.3)");
      glow.addColorStop(0.5, "rgba(255, 23, 68, 0.08)");
      glow.addColorStop(1, "rgba(255, 23, 68, 0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      drawGrid();
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return <canvas id="neon-grid" ref={canvasRef}></canvas>;
}
