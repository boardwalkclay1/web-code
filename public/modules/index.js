// index.js — page bootstrap: guard, render categories, init simulators, wire start button
import { renderCategories } from '/modules/sections.js';
import { initSimulators } from '/modules/simulators.js';
import { runGuard } from '/modules/guard.js';

const REQUIRED_CATEGORY = 'web';

// Run guard first; if it redirects, the rest won't execute
document.addEventListener('DOMContentLoaded', () => {
  runGuard({ category: REQUIRED_CATEGORY, payUrl: '/pay/index.html?category=' + encodeURIComponent(REQUIRED_CATEGORY) });

  // Render categories and simulators
  renderCategories('category-grid');
  initSimulators('simulators-list');

  // Wire start button to the primary lesson
  const startBtn = document.getElementById('start-lesson');
  if (startBtn) {
    startBtn.addEventListener('click', (e) => {
      // allow default navigation; could add analytics here
    });
  }

  // Optional: small accessibility focus
  const firstCard = document.querySelector('.lesson-card .lesson-title');
  if (firstCard) firstCard.setAttribute('tabindex', '0');
});
