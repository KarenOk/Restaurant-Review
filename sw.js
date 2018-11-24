console.log("Helllo from the service worker!");
const CACHE = "restaurant-review-v1";
let cacheUrls = [
    "/",
    "/css/styles.css",
    "/css/responsive.css",
    "/js/main.js",
    "/js/dbhelper.js",
    "/js/restaurant_info.js",
    "/data/restaurants.json",
    "/restaurant.html"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE)
            .then(cache => {
                return cache.addAll(cacheUrls);
            })
            .catch(err => {
                console.log(err);
            })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) return response;
                
                // return fetch(event.request);

                let requestClone = event.request.clone();

                return fetch(requestClone)
                    .then(response => {
                        // console.log(response)
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        } else {
                            let responseClone = response.clone();
                            caches.open(CACHE)
                                .then(cache => {
                                    cache.put(event.request, responseClone);
                                })
                            return response;

                        }
                    })
            })
    );
})