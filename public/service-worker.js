self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open("static")
            .then(function (cache) {
                cache.add("/")
                cache.add("/index.html");
                cache.add("/src/js/app.js");
            })
    )
});

self.addEventListener("activate", function (event) {
    event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            console.log("response", response);
            if (response) {
                return response;
            } else {
                return fetch(event.request)
            }
        })
    )
})