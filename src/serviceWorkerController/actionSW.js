function registerServiceWorker() {
    return navigator.serviceWorker.register("/serviceWorker.js");
}

export {
    registerServiceWorker,
};