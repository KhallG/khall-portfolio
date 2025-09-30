// Animation de grille néon dynamique
(function() {
  'use strict';

  class NeonGrid {
    constructor() {
      this.canvas = document.getElementById('neon-grid');
      if (!this.canvas) {
        console.error('Canvas #neon-grid not found!');
        return;
      }
      
      this.ctx = this.canvas.getContext('2d');
      this.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      this.gridSize = 50;
      
      this.init();
      this.setupEventListeners();
      this.animate();
    }

    init() {
      this.resize();
    }

    resize() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    setupEventListeners() {
      window.addEventListener('resize', () => this.resize());
      window.addEventListener('mousemove', (e) => {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
      });
      
      // Pour mobile/tactile
      window.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
          this.mouse.x = e.touches[0].clientX;
          this.mouse.y = e.touches[0].clientY;
        }
      });
    }

    drawGrid() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Dessiner les lignes horizontales
      for (let y = 0; y <= this.canvas.height; y += this.gridSize) {
        this.ctx.beginPath();
        
        for (let x = 0; x <= this.canvas.width; x += 5) {
          const dx = this.mouse.x - x;
          const dy = this.mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 300;
          
          let offsetY = 0;
          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * 30;
            offsetY = force * (dy / dist);
          }

          if (x === 0) {
            this.ctx.moveTo(x, y + offsetY);
          } else {
            this.ctx.lineTo(x, y + offsetY);
          }
        }

        // Gradient pour l'effet néon
        const gradient = this.ctx.createLinearGradient(0, y, this.canvas.width, y);
        gradient.addColorStop(0, 'rgba(255, 23, 68, 0.05)');
        gradient.addColorStop(0.5, 'rgba(255, 23, 68, 0.25)');
        gradient.addColorStop(1, 'rgba(255, 23, 68, 0.05)');
        
        this.ctx.strokeStyle = gradient;
        this.ctx.lineWidth = 1;
        this.ctx.shadowBlur = 15;
        this.ctx.shadowColor = 'rgba(255, 23, 68, 0.6)';
        this.ctx.stroke();
      }

      // Dessiner les lignes verticales
      for (let x = 0; x <= this.canvas.width; x += this.gridSize) {
        this.ctx.beginPath();
        
        for (let y = 0; y <= this.canvas.height; y += 5) {
          const dx = this.mouse.x - x;
          const dy = this.mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 300;
          
          let offsetX = 0;
          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * 30;
            offsetX = force * (dx / dist);
          }

          if (y === 0) {
            this.ctx.moveTo(x + offsetX, y);
          } else {
            this.ctx.lineTo(x + offsetX, y);
          }
        }

        const gradient = this.ctx.createLinearGradient(x, 0, x, this.canvas.height);
        gradient.addColorStop(0, 'rgba(255, 23, 68, 0.05)');
        gradient.addColorStop(0.5, 'rgba(255, 23, 68, 0.25)');
        gradient.addColorStop(1, 'rgba(255, 23, 68, 0.05)');
        
        this.ctx.strokeStyle = gradient;
        this.ctx.lineWidth = 1;
        this.ctx.shadowBlur = 15;
        this.ctx.shadowColor = 'rgba(255, 23, 68, 0.6)';
        this.ctx.stroke();
      }

      // Point lumineux à la position de la souris
      const glowGradient = this.ctx.createRadialGradient(
        this.mouse.x, this.mouse.y, 0,
        this.mouse.x, this.mouse.y, 200
      );
      glowGradient.addColorStop(0, 'rgba(255, 23, 68, 0.3)');
      glowGradient.addColorStop(0.5, 'rgba(255, 23, 68, 0.08)');
      glowGradient.addColorStop(1, 'rgba(255, 23, 68, 0)');
      
      this.ctx.fillStyle = glowGradient;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    animate() {
      this.drawGrid();
      requestAnimationFrame(() => this.animate());
    }
  }

  // Initialisation au chargement
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      new NeonGrid();
    });
  } else {
    new NeonGrid();
  }

})();