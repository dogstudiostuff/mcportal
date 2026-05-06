self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    if (event.request.method === 'POST') {
        event.respondWith(Response.redirect('./index.html', 303));
    }
});
