// sections.js — renders category cards into #category-grid
import DATA from '/modules/category-data.js';

export function renderCategories(containerId = 'category-grid') {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = DATA.map(c => `
    <div class="lesson-card" data-id="${c.id}">
      <div class="lesson-title">${c.title}</div>
      <div class="lesson-meta">${c.description}</div>
      <div class="lesson-desc">Examples: ${c.examples.join(', ')}</div>
      <div class="lesson-actions">
        <a class="btn primary" href="${c.contentUrl}">Open overview</a>
        <a class="btn" href="${c.payUrl}">Buy access</a>
      </div>
    </div>
  `).join('');
}
