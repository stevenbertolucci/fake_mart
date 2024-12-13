//
// lax.js initialization
//

import lax from 'lax.js';

// Select elements with `data-lax` attributes
const laxElements = document.querySelectorAll('[data-lax], [data-lax-preset]');

// Initialize Lax.js
lax.init();

// Add global presets (optional)
lax.addPreset('fadeIn', {
  opacity: [
    ['elInY', 'elCenterY'],
    [0, 1],
  ],
});
lax.addPreset('driftLeft', {
  translateX: [
    ['elInX', 'elCenterX'],
    [200, 0],
  ],
});

// Update lax.js elements on scroll
lax.updateElements();
window.addEventListener('scroll', () => lax.updateElements());

// Add lax.js to the global scope if needed
window.lax = lax;