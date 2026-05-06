self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // This empty listener is enough to satisfy PWA requirements
    if (event.request.method === 'POST') {
        event.respondWith(Response.redirect('./index.html'));
    }
});
