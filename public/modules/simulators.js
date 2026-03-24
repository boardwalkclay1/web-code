// simulators.js — populate simulators list with dropdown descriptions and simple toggles
const SIMULATORS = [
  {
    id: 'html-playground',
    title: 'HTML Playground',
    desc: 'Live-edit HTML/CSS and preview results in real time.',
    url: '/simulators/html-playground.html'
  },
  {
    id: 'css-lab',
    title: 'CSS Lab',
    desc: 'Experiment with layouts, grids, and animations.',
    url: '/simulators/css-lab.html'
  },
  {
    id: 'js-sandbox',
    title: 'JS Sandbox',
    desc: 'Run small scripts and test DOM interactions safely.',
    url: '/simulators/js-sandbox.html'
  }
];

export function initSimulators(containerId = 'simulators-list') {
  const list = document.getElementById(containerId);
  if (!list) return;
  list.innerHTML = SIMULATORS.map(s => `
    <div class="lesson-card">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div>
          <div class="lesson-title">${s.title}</div>
          <div class="lesson-meta small">${s.desc}</div>
        </div>
        <div>
          <button class="btn" data-toggle="${s.id}">Open</button>
        </div>
      </div>
      <div id="${s.id}" class="small hidden" style="margin-top:12px">
        <div style="margin-bottom:8px">Simulator will load here when selected.</div>
        <a class="btn" href="${s.url}" target="_blank" rel="noopener">Open simulator</a>
      </div>
    </div>
  `).join('');

  list.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-toggle]');
    if (!btn) return;
    const id = btn.getAttribute('data-toggle');
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle('hidden');
    btn.textContent = el.classList.contains('hidden') ? 'Open' : 'Close';
  });
}
