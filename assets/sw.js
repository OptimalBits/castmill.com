self.addEventListener("install", function(event) {
  console.log("Installed worker");
});
self.addEventListener("activate", function(event) {
  console.log("Activated worker version");
});
self.addEventListener("fetch", async function(event) {
  const request = event.request;
  event.respondWith((async () => {
    const response = await caches.match(request);
    if (response) {
      return response;
    } else {
      const fetchRequest = request.clone();
      try {
        const result = await fetch(fetchRequest);
        return result;
      } catch (err) {
        console.error("Error fetching", err);
      }
    }
  })());
});
//# sourceMappingURL=sw.js.map
