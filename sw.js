
const CACHE_NAME = 'premium-pig-v1';
const PRECACHE = [
  '/',
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).then(resp => {
        return caches.open(CACHE_NAME).then(cache => {
          try { cache.put(event.request, resp.clone()); } catch(e){ }
          return resp;
        });
      });
    })
  );
});
