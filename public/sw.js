const CACHE_NAME = 'my-pwa-cache';
const urlsToCache = [
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    // serve from cache
                    return response;
                } else {
                    // fetch from network
                    return fetch(event.request)
                        .then(response => {
                            // cache new response
                            return caches.open(CACHE_NAME)
                                .then(cache => {
                                    cache.put(event.request, response.clone());
                                    return response;
                                });
                        })
                        .catch(error => {
                            console.error('Fetch failed:', error);
                            // serve fallback response
                            return caches.match('/offline.html');
                        });
                }
            })
    );
});
