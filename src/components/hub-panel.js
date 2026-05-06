// ═══════════════════════════════════════════
// hub-panel.js
// Hub Central : titre, tagline, nav vers ailes
// ═══════════════════════════════════════════

AFRAME.registerComponent('hub-panel', {
  init() {
    const el = this.el;

    // ── Titre principal ──
    const title = document.createElement('a-text');
    title.setAttribute('value', 'THE DEV SPACE TERMINAL');
    title.setAttribute('color', '#2E9E72');
    title.setAttribute('align', 'center');
    title.setAttribute('width', '6');
    title.setAttribute('position', '0 2.6 0');
    title.setAttribute('font', 'mozillavr');
    el.appendChild(title);

    // ── Tagline ──
    const tagline = document.createElement('a-text');
    tagline.setAttribute('value', '.Net Fullstack | XR Dev | Flutter Dev');
    tagline.setAttribute('color', '#6aab89');
    tagline.setAttribute('align', 'center');
    tagline.setAttribute('width', '4');
    tagline.setAttribute('position', '0 2.1 0');
    el.appendChild(tagline);

    // ── Séparateur ──
    const sep = document.createElement('a-box');
    sep.setAttribute('width', '3');
    sep.setAttribute('height', '0.01');
    sep.setAttribute('depth', '0.01');
    sep.setAttribute('color', '#2E9E72');
    sep.setAttribute('position', '0 1.85 0');
    el.appendChild(sep);

    // ── Vision XR ──
    const vision = document.createElement('a-text');
    vision.setAttribute('value',
      'Futur expert XR & fondateur\nd\'une entreprise XR en Afrique de l\'Ouest.'
    );
    vision.setAttribute('color', '#E0FFE8');
    vision.setAttribute('align', 'center');
    vision.setAttribute('width', '3.5');
    vision.setAttribute('position', '0 1.5 0');
    el.appendChild(vision);

    // ── Bouton Projects Bay ──
    this._makeNavButton(el, '← PROJECTS BAY', '-2.2 0.6 0', () => {
      this._teleport(-8, 0, 0);
    });

    // ── Bouton Skills Core ──
    this._makeNavButton(el, 'SKILLS CORE →', '2.2 0.6 0', () => {
      this._teleport(8, 0, 0);
    });

    // ── Aide contrôles ──
    const controls = document.createElement('a-text');
    controls.setAttribute('value', 'WASD / Flèches : déplacer   |   Souris : regarder');
    controls.setAttribute('color', '#1a4a30');
    controls.setAttribute('align', 'center');
    controls.setAttribute('width', '4');
    controls.setAttribute('position', '0 0.1 0');
    el.appendChild(controls);
  },

  _makeNavButton(parent, label, position, onClick) {
    const btn = document.createElement('a-entity');
    btn.setAttribute('position', position);

    // Fond du bouton
    const bg = document.createElement('a-box');
    bg.setAttribute('width', '1.8');
    bg.setAttribute('height', '0.35');
    bg.setAttribute('depth', '0.02');
    bg.setAttribute('color', '#0d1f14');
    bg.setAttribute('material', 'opacity: 0.85; transparent: true');
    btn.appendChild(bg);

    // Bordure (légèrement plus grande)
    const border = document.createElement('a-box');
    border.setAttribute('width', '1.84');
    border.setAttribute('height', '0.39');
    border.setAttribute('depth', '0.01');
    border.setAttribute('color', '#2E9E72');
    border.setAttribute('position', '0 0 -0.01');
    border.setAttribute('material', 'opacity: 0.6; transparent: true');
    btn.appendChild(border);

    // Texte
    const text = document.createElement('a-text');
    text.setAttribute('value', label);
    text.setAttribute('color', '#00FFCC');
    text.setAttribute('align', 'center');
    text.setAttribute('width', '2.5');
    text.setAttribute('position', '0 0 0.02');
    btn.appendChild(text);

    // Interactivité
    btn.setAttribute('class', 'clickable');
    btn.addEventListener('mouseenter', () => {
      bg.setAttribute('color', '#1a4a30');
      text.setAttribute('color', '#ffffff');
    });
    btn.addEventListener('mouseleave', () => {
      bg.setAttribute('color', '#0d1f14');
      text.setAttribute('color', '#00FFCC');
    });
    btn.addEventListener('click', onClick);

    parent.appendChild(btn);
    return btn;
  },

  _teleport(x, y, z) {
    const rig = document.getElementById('rig');
    if (rig) {
      rig.setAttribute('position', `${x} 1.6 ${z + 3}`);
    }
  },
});
