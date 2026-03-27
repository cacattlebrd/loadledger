// LoadLedger Service Worker — keeps app alive in background
const CACHE_NAME = 'loadledger-v1';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

// Basic offline fallback — cache the main page
self.addEventListener('fetch', event => {
  // Pass through all requests (we're using this mainly for PWA install + background persistence)
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
