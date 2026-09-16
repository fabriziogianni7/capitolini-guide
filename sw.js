/* Service worker: precache dell'app per uso offline al museo */
const CACHE = "capitolini-guide-v1";
const ASSETS = [
  "./", "./index.html", "./styles.css", "./data.js", "./map.js", "./app.js", "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png",
  "./img/costantino.jpg", "./img/orazi.jpg", "./img/spinario.jpg", "./img/bruto.jpg", "./img/lupa.jpg",
  "./img/medusa.jpg", "./img/marco-aurelio.jpg", "./img/ercole.jpg", "./img/commodo.jpg",
  "./img/buona-ventura.jpg", "./img/san-giovanni.jpg", "./img/marforio.jpg", "./img/galata.jpg",
  "./img/venere.jpg", "./img/colombe.jpg"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  e.respondWith(
    caches.match(e.request).then((cached) => {
      const fetched = fetch(e.request).then((res) => {
        if (res && res.ok) caches.open(CACHE).then((c) => c.put(e.request, res.clone()));
        return res;
      }).catch(() => cached);
      return cached || fetched;
    })
  );
});
