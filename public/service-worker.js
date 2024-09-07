self.addEventListener("install", function (event) {
});
self.addEventListener("activate", function (event) {
    event.waitUntil(self.clients.claim());
    // return self.clients.claim();
});

self.addEventListener(" fetch", function (event) {
    // console.log("[service worker] fetching something...", event);
})