const CACHE_NAME = 'shalomy-cache-v1';
const urlsToCache = [
    './index.html',
    './webResources/styles.css',
    './webResources/main.js',
    './manifest.json',
    './service-worker.js',
    './webResources/images/icon-72x72.png',
    './webResources/images/icon-192x192.png',
    './webResources/images/favicon.ico',
    './webResources/images/psicoLogo.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

/*self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});*/ //Used to be cached first, now is fetch first 
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request) // Always fetch from the network
            .catch(() => caches.match(event.request)) // If network fails, fall back to cache
    );
});


self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});