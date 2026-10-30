const CACHE_NAME = 'mi-hogar-v7';
const ASSETS = ['./', './index.html', './manifest.json', './icono-192.png', './icono-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});