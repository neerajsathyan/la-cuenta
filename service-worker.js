! function() {
    "use strict";
    const e = ["client/index.a15cf8eb.js", "client/client.6e93d47c.js"].concat(["service-worker-index.html", "android-chrome-192x192.png", "android-chrome-512x512.png", "apple-touch-icon.png", "favicon-16x16.png", "favicon-32x32.png", "favicon.ico", "global.css", "manifest.json"]),
        t = new Set(e);
    self.addEventListener("install", t => {
        t.waitUntil(caches.open("cache1602891945499").then(t => t.addAll(e)).then(() => {
            self.skipWaiting()
        }))
    }), self.addEventListener("activate", e => {
        e.waitUntil(caches.keys().then(async e => {
            for (const t of e) "cache1602891945499" !== t && await caches.delete(t);
            self.clients.claim()
        }))
    }), self.addEventListener("fetch", e => {
        if ("GET" !== e.request.method || e.request.headers.has("range")) return;
        const n = new URL(e.request.url);
        n.protocol.startsWith("http") && (n.hostname === self.location.hostname && n.port !== self.location.port || (n.host === self.location.host && t.has(n.pathname) ? e.respondWith(caches.match(e.request)) : "only-if-cached" !== e.request.cache && e.respondWith(caches.open("offline1602891945499").then(async t => {
            try {
		const c = await t.match(e.request);
                if (c) return c;
                const n = await fetch(e.request);
                return t.put(e.request, n.clone()), n
            } catch (n) {
                const c = await t.match(e.request);
                if (c) return c;
                throw n
            }
        }))))
    })
}();
