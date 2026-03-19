import DATA from '/modules/category-data.js';
const grid = document.getElementById('category-grid');
if (grid) {
  grid.innerHTML = DATA.map(c => `
    <div class="lesson-card">
      <div class="lesson-title">${c.title}</div>
      <div class="lesson-meta">${c.description}</div>
      <div class="lesson-desc">Examples: ${c.buildExamples.join(', ')}</div>
      <div><a class="lesson-button" href="${c.contentUrl}">Open overview</a>
      <a class="lesson-button" href="${c.paywallUrl}" style="margin-left:8px">Buy access</a></div>
    </div>
  `).join('');
}
