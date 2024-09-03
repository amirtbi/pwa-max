var deferredPrompt;
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/service-worker.js", { scope: "" })
        .then(function () {
            console.log("service worker registered!");
        }).catch(function (e) {
            console.error("error", e)
        });
}

window.addEventListener("beforeinstallprompt", function (e) {
    console.log("beforeinstallprompt install fired");
    e.preventDefault();
    deferredPrompt = e;
    return false;
})
