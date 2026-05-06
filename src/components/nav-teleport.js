// ═══════════════════════════════════════════
// nav-teleport.js
// Téléportation fluide entre les zones de la scène
// ═══════════════════════════════════════════

AFRAME.registerComponent('nav-teleport', {
  schema: {
    target:   { type: 'string' },  // ID de la zone cible
    duration: { type: 'number', default: 400 },
  },

  init() {
    this.el.addEventListener('click', () => this._teleport());
  },

  _teleport() {
    const targets = {
      hub:      { x: 0,  y: 1.6, z: 4  },
      projects: { x: -8, y: 1.6, z: 3  },
      skills:   { x: 8,  y: 1.6, z: 3  },
    };

    const dest = targets[this.data.target];
    if (!dest) return;

    const rig = document.getElementById('rig');
    if (!rig) return;

    rig.setAttribute('animation__teleport', `
      property: position;
      to: ${dest.x} ${dest.y} ${dest.z};
      dur: ${this.data.duration};
      easing: easeInOutQuad
    `);
  },
});
