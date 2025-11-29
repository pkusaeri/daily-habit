self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("habit-cache-v1").then(cache => {
      return cache.addAll([
        "./",
        "index.html",
        "manifest.json"
        // kalau nanti pakai file .css / .js terpisah, tambahkan di sini
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
