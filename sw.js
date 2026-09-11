// GPsaver — minimal service worker.
// Purpose: (1) satisfy browser installability requirements for "Add to Home Screen",
// (2) cache the app shell so it opens even with zero connectivity after first load.
// This app already stores all its data in localStorage, not via network — this worker
// only caches the static files (html/css/js/icons) themselves, nothing user-entered.

const CACHE_NAME = 'gpsaver-shell-v1';
const SHELL_FILES = [
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
  './icons/icon-32.png',
  './icons/icon-16.png',
  './icons/icon-180.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(SHELL_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    ).then(() => self.clients.claim())
  );
});

// Cache-first strategy: the app shell rarely changes, and this person needs
// it to work with zero connectivity, so prefer the cached copy instantly
// and only fall back to network if something is missing from cache.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).catch(() => {
        // No cache, no network — nothing more we can do for this request.
        return new Response('', { status: 504, statusText: 'Offline and not cached' });
      });
    })
  );
});
