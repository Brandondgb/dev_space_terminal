// ═══════════════════════════════════════════
// main.js — The Dev Space Terminal
// Point d'entrée principal Vite + A-Frame
// ═══════════════════════════════════════════

import 'aframe';

// Composants A-Frame custom
import './components/scene-floor.js';
import './components/hub-panel.js';
import './components/project-card.js';
import './components/skill-orb.js';
import './components/nav-teleport.js';

// ── Gestion du loader ────────────────────────
const loader    = document.getElementById('loader');
const loaderBar = document.getElementById('loader-bar');
const loaderHint = document.getElementById('loader-hint');

// Simule une progression pendant le chargement A-Frame
let progress = 0;
const progressInterval = setInterval(() => {
  progress = Math.min(progress + Math.random() * 8, 90);
  loaderBar.style.width = progress + '%';
}, 120);

// Détecte si WebXR est disponible
async function checkWebXR() {
  if (!navigator.xr) return false;
  // Vérifie si une session immersive est réellement supportée
  const supported = await navigator.xr.isSessionSupported('immersive-vr')
    .catch(() => false);
  if (!supported) {
    // Ne pas rediriger automatiquement — juste afficher le bouton fallback
    const btn = document.createElement('a');
    btn.href = '/fallback/index.html';
    btn.className = 'loader-fallback-btn';
    btn.textContent = 'Ouvrir la version 2D →';
    document.querySelector('.loader-inner')?.appendChild(btn);
  }
  return true;
}

// Quand la scène A-Frame est prête
document.addEventListener('DOMContentLoaded', () => {
  const scene = document.getElementById('main-scene');

  if (!scene) return;

  checkWebXR();

  scene.addEventListener('loaded', () => {
    clearInterval(progressInterval);
    loaderBar.style.width = '100%';
    loaderHint.textContent = 'Entrée dans le terminal...';

    setTimeout(() => {
      loader.classList.add('loader--hidden');
      setTimeout(() => loader.remove(), 600);
    }, 400);
  });

  // Timeout de sécurité : si A-Frame ne se charge pas en 10s
  setTimeout(() => {
    if (loader && !loader.classList.contains('loader--hidden')) {
      loaderHint.textContent = 'Chargement lent — version 2D disponible';
      const btn = document.createElement('a');
      btn.href = '/fallback/index.html';
      btn.className = 'loader-fallback-btn';
      btn.textContent = 'Ouvrir la version 2D →';
      loader.querySelector('.loader-inner').appendChild(btn);
    }
  }, 10000);
});
