// ═══════════════════════════════════════════
// project-card.js
// Carte projet 3D : titre, description, screenshot, lien live
// ═══════════════════════════════════════════

AFRAME.registerComponent('project-card', {
  schema: {
    title:       { type: 'string', default: 'Projet' },
    description: { type: 'string', default: '' },
    image:       { type: 'selector' },
    url:         { type: 'string', default: '#' },
  },

  init() {
    const el   = this.el;
    const data = this.data;
    const W = 1.85;
    const H = 1.18;

    // ── Fond de la carte ──
    const bg = document.createElement('a-plane');
    bg.setAttribute('width', W);
    bg.setAttribute('height', H);
    bg.setAttribute('color', '#0d1f14');
    bg.setAttribute('material', 'opacity: 0.9; transparent: true; side: double');
    el.appendChild(bg);

    // ── Bordure gauche accent ──
    const accent = document.createElement('a-box');
    accent.setAttribute('width', '0.03');
    accent.setAttribute('height', H);
    accent.setAttribute('depth', '0.01');
    accent.setAttribute('color', '#2E9E72');
    accent.setAttribute('position', `${-W / 2 + 0.015} 0 0.01`);
    el.appendChild(accent);

    // ── Screenshot (si disponible) ──
    if (data.image) {
      const img = document.createElement('a-image');
      img.setAttribute('src', data.image);
      img.setAttribute('width', '0.98');
      img.setAttribute('height', '0.58');
      img.setAttribute('position', `${W / 2 - 0.58} 0.12 0.01`);
      el.appendChild(img);
    }

    // ── Titre ──
    const title = document.createElement('a-text');
    title.setAttribute('value', data.title.toUpperCase());
    title.setAttribute('color', '#2E9E72');
    title.setAttribute('align', 'left');
    title.setAttribute('width', '1.2');
    title.setAttribute('position', `${-W / 2 + 0.12} ${H / 2 - 0.17} 0.02`);
    el.appendChild(title);

    // ── Description ──
    const desc = document.createElement('a-text');
    desc.setAttribute('value', data.description);
    desc.setAttribute('color', '#E0FFE8');
    desc.setAttribute('align', 'left');
    desc.setAttribute('width', '1.0');
    desc.setAttribute('position', `${-W / 2 + 0.12} 0.02 0.02`);
    el.appendChild(desc);

    // ── Bouton « Voir Live » ──
    const btnEl = document.createElement('a-entity');
    btnEl.setAttribute('position', `${-W / 2 + 0.52} ${-H / 2 + 0.17} 0.02`);

    const btnBg = document.createElement('a-plane');
    btnBg.setAttribute('width', '0.72');
    btnBg.setAttribute('height', '0.2');
    btnBg.setAttribute('color', '#2E9E72');
    btnBg.setAttribute('material', 'opacity: 0.9; transparent: true');
    btnEl.appendChild(btnBg);

    const btnText = document.createElement('a-text');
    btnText.setAttribute('value', '→ VOIR LIVE');
    btnText.setAttribute('color', '#000000');
    btnText.setAttribute('align', 'center');
    btnText.setAttribute('width', '1.0');
    btnText.setAttribute('position', '0 0 0.01');
    btnEl.appendChild(btnText);

    // Clic = ouvrir l'URL dans un nouvel onglet
    btnEl.setAttribute('class', 'clickable');
    btnEl.addEventListener('mouseenter', () => {
      btnBg.setAttribute('color', '#00FFCC');
    });
    btnEl.addEventListener('mouseleave', () => {
      btnBg.setAttribute('color', '#2E9E72');
    });
    btnEl.addEventListener('click', () => {
      window.open(data.url, '_blank', 'noopener,noreferrer');
    });

    el.appendChild(btnEl);

    // ── Animation idle : légère pulsation de la bordure ──
    accent.setAttribute('animation', `
      property: material.opacity;
      from: 0.5;
      to: 1;
      dur: 2000;
      dir: alternate;
      loop: true;
      easing: easeInOutSine
    `);
  },
});
