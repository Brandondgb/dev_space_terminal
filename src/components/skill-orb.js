// ═══════════════════════════════════════════
// skill-orb.js
// Sphère 3D interactive représentant une compétence
// ═══════════════════════════════════════════

AFRAME.registerComponent('skill-orb', {
  schema: {
    label:  { type: 'string', default: 'Skill' },
    color:  { type: 'color',  default: '#2E9E72' },
    radius: { type: 'number', default: 0.18 },
  },

  init() {
    const el   = this.el;
    const data = this.data;

    // ── Sphère principale ──
    const sphere = document.createElement('a-sphere');
    sphere.setAttribute('radius', data.radius);
    sphere.setAttribute('color', data.color);
    sphere.setAttribute('material', `
      emissive: ${data.color};
      emissiveIntensity: 0.3;
      roughness: 0.3;
      metalness: 0.6;
    `);
    el.appendChild(sphere);
    this._sphere = sphere;

    // ── Anneau externe (effet cyber) ──
    const ring = document.createElement('a-torus');
    ring.setAttribute('radius', data.radius + 0.06);
    ring.setAttribute('radius-tubular', '0.008');
    ring.setAttribute('color', '#00FFCC');
    ring.setAttribute('material', 'opacity: 0.3; transparent: true; shader: flat');
    ring.setAttribute('rotation', '90 0 0');
    el.appendChild(ring);
    this._ring = ring;

    // ── Label au-dessus ──
    const label = document.createElement('a-text');
    label.setAttribute('value', data.label.toUpperCase());
    label.setAttribute('color', '#E0FFE8');
    label.setAttribute('align', 'center');
    label.setAttribute('width', '1.2');
    label.setAttribute('position', `0 ${data.radius + 0.2} 0`);
    label.setAttribute('billboard', '');   // Toujours face caméra
    el.appendChild(label);
    this._label = label;

    // ── Animation idle : rotation sur Y ──
    el.setAttribute('animation__rot', `
      property: rotation;
      to: 0 360 0;
      loop: true;
      dur: 8000;
      easing: linear
    `);

    // ── Animation idle : flottement vertical ──
    el.setAttribute('animation__float', `
      property: position;
      from: 0 0 0;
      to: 0 0.12 0;
      dir: alternate;
      loop: true;
      dur: 2200;
      easing: easeInOutSine
    `);

    // ── Interactivité ──
    el.setAttribute('class', 'clickable');

    el.addEventListener('mouseenter', () => this._onHover(true));
    el.addEventListener('mouseleave', () => this._onHover(false));
    el.addEventListener('click', () => {
      // Pulse au clic
      sphere.setAttribute('animation__click', `
        property: material.emissiveIntensity;
        from: 1;
        to: 0.3;
        dur: 400;
        easing: easeOutQuad
      `);
    });
  },

  _onHover(active) {
    const { _sphere: s, _ring: r, _label: l, data } = this;
    if (active) {
      s.setAttribute('material', `
        color: #00FFCC;
        emissive: #00FFCC;
        emissiveIntensity: 0.7;
        roughness: 0.2;
        metalness: 0.8;
      `);
      r.setAttribute('material', 'opacity: 0.8; transparent: true; shader: flat; color: #00FFCC');
      l.setAttribute('color', '#00FFCC');
      l.setAttribute('scale', '1.3 1.3 1.3');
    } else {
      s.setAttribute('material', `
        color: ${data.color};
        emissive: ${data.color};
        emissiveIntensity: 0.3;
        roughness: 0.3;
        metalness: 0.6;
      `);
      r.setAttribute('material', 'opacity: 0.3; transparent: true; shader: flat; color: #00FFCC');
      l.setAttribute('color', '#E0FFE8');
      l.setAttribute('scale', '1 1 1');
    }
  },
});
