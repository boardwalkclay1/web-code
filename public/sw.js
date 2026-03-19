const CACHE = 'thecode-cache-v1';
const PRECACHE_URLS = [
  '/', '/index.html', '/css/index.css', '/manifest.json',
  '/assets/img/code-index.png', '/assets/img/icon-192.png', '/assets/img/icon-512.png',
  '/modules/sections.js', '/modules/category-data.js', '/pay/index.html', '/pay/success.html'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE_URLS)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).catch(()=>caches.match('/index.html')));
    return;
  }
  e.respondWith(caches.match(req).then(r => r || fetch(req).then(resp => {
    if (req.destination === 'script' || req.destination === 'style' || req.destination === 'image') {
      const copy = resp.clone();
      caches.open(CACHE).then(c => c.put(req, copy));
    }
    return resp;
  }).catch(()=>{})));
});
