// ═══════════════════════════════════════════
// scene-floor.js
// Sol grille cyber infinie avec animation subtile
// ═══════════════════════════════════════════

AFRAME.registerComponent('scene-floor', {
  schema: {
    size:      { type: 'number', default: 60 },
    divisions: { type: 'number', default: 60 },
    color:     { type: 'color',  default: '#1a4a30' },
  },

  init() {
    // Plan principal
    const floor = document.createElement('a-plane');
    floor.setAttribute('rotation', '-90 0 0');
    floor.setAttribute('width',  this.data.size);
    floor.setAttribute('height', this.data.size);
    floor.setAttribute('material', `
      color: #020a05;
      roughness: 1;
      metalness: 0;
    `);
    this.el.appendChild(floor);

    // Grille A-Frame native
    const grid = document.createElement('a-entity');
    grid.setAttribute('rotation', '-90 0 0');
    grid.setAttribute('position', '0 0.01 0');
    grid.setAttribute('geometry', `
      primitive: plane;
      width: ${this.data.size};
      height: ${this.data.size}
    `);
    grid.setAttribute('material', `
      color: ${this.data.color};
      wireframe: true;
      opacity: 0.35;
      transparent: true;
      shader: flat
    `);
    this.el.appendChild(grid);

    // Second grille plus fine pour effet profondeur
    const gridFine = document.createElement('a-entity');
    gridFine.setAttribute('rotation', '-90 0 0');
    gridFine.setAttribute('position', '0 0.02 0');
    gridFine.setAttribute('geometry', `
      primitive: plane;
      width: ${this.data.size};
      height: ${this.data.size}
    `);
    gridFine.setAttribute('material', `
      color: #00FFCC;
      wireframe: true;
      opacity: 0.06;
      transparent: true;
      shader: flat
    `);
    this.el.appendChild(gridFine);
  },
});
