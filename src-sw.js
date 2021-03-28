importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.2/workbox-sw.js');

workbox.setConfig({ modulePathPrefix: "workbox-v6.1.2/" });

const precacheManifest = [injectionPoint];

workbox.precaching.precacheAndRoute(precacheManifest);

workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/users'),
    workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.cacheFirst({
      cacheName: 'google-fonts',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 30,
        }),
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        }),
      ],
    }),
  );

workbox.precaching.precacheAndRoute([]);