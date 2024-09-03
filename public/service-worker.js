self.addEventListener("install", function (event) {
    console.log("[service worker] Install service worke ...", event)
});
self.addEventListener("activate", function (event) {
    console.log("[service worker] Activation service worker ...", event)
    event.waitUntil(self.clients.claim());
    // return self.clients.claim();
});

self.addEventListener("fetch", function (event) {
    // console.log("[service worker] fetching something...", event);
    event.respondWidth("asasa")
})