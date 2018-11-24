if (navigator.serviceWorker){
    navigator.serviceWorker.register("/sw.js")
    .then(() => {
        console.log("Service worker registered");
    })
    .catch(() => {
        console.log("Service worker not registered.")
    })
}