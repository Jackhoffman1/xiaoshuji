self.addEventListener('install', (e) => {
  console.log('Service Worker Installed');
});

self.addEventListener('fetch', (e) => {
  // This lets all network requests pass through normally so your downloads still work.
  e.respondWith(fetch(e.request));
});
