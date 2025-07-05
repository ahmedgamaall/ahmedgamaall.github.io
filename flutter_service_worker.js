'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bfc210acb359087216a6a804b37555d9",
"assets/AssetManifest.bin.json": "3c4a3be16bbf0c558315f97ed47dabe4",
"assets/AssetManifest.json": "ee40de3e57c2ddeefc0497a31473041a",
"assets/assets/fonts/Inter_Medium.ttf": "4591e900425d177e6ba268d165bf12e8",
"assets/assets/fonts/Inter_Regular.ttf": "e48c1217adab2a0e44f8df400d33c325",
"assets/assets/fonts/Poppins_Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/Poppins_Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/images/ahmed.jpg": "a686d63b46669366c1b6fcb8faf62a83",
"assets/assets/images/animations.gif": "10777b7860454b3cb2f3260d024e044e",
"assets/assets/images/api.png": "f234f435d99c690d23237d6b2e374bdf",
"assets/assets/images/auth-mobile-app.png": "7061295a831e98b97485e479acaba844",
"assets/assets/images/bloc.png": "5a19fcc9b8f9ac13bf895aac43671d09",
"assets/assets/images/bookly.png": "2aae2c1b35d694281f235d1ee878de50",
"assets/assets/images/clean_architecture.png": "473631af491342a8a45c9ac45d55a736",
"assets/assets/images/clean_code.png": "12f713adf8f11d05c77909a353b78bd9",
"assets/assets/images/dart.png": "2c54c5b408797dc35f92e94627ed6e43",
"assets/assets/images/design_patterns.png": "3c8f96359f5057bd060f5a042ba259d4",
"assets/assets/images/figma.png": "015dffaa3ebe9b640329cee1e1b60e12",
"assets/assets/images/firebase.png": "ad5c2a9c0d0e7caafb99188d9ba4b49e",
"assets/assets/images/flutter.png": "594f86a9a97c4965dee556d4009abfa0",
"assets/assets/images/git.png": "04f537289b68cbf6faf4096bd19f6473",
"assets/assets/images/github.png": "34dc7032bcbe411896ab070b6dacf817",
"assets/assets/images/gitlab.png": "bec9887174881160e2fd537a6fa7b8db",
"assets/assets/images/hive.png": "556190a51df0d6cac80daadf0c64d3f1",
"assets/assets/images/in_app_purchases.png": "0ddb8b659af5895e483bbf9afa88218a",
"assets/assets/images/localization.png": "acf086e3f33363768c953112e0cc7774",
"assets/assets/images/movie-mingle.png": "e52666b33bd7a2539c1f405fb3854660",
"assets/assets/images/name_logo.png": "a50952f6ce31458e6fef36f3b47841fb",
"assets/assets/images/name_logo_white.png": "80ba3c5335fded22178768de8b24342a",
"assets/assets/images/oop.png": "c79016aff040816fab6fc628c039bec9",
"assets/assets/images/problem_solving.png": "ddf4f4ee0147ef65a0d1489a7ee0ad74",
"assets/assets/images/push_notification.png": "b13b190cd532df68ca16ac5adaedbe20",
"assets/assets/images/quote-generator-mobile-app.png": "b59db36e4d8ff37fdc175e13dafbc19d",
"assets/assets/images/responsive.png": "ba84135c34b3f178968b20448e0f3690",
"assets/assets/images/security.png": "8c909a94bdbc439edb43eb889d2982d2",
"assets/assets/images/shared_preferences.png": "015ba41f3ab531a7356ed4c515b322f4",
"assets/assets/images/solid.png": "3216fe45e012f88b6935738f88a6ad6e",
"assets/assets/images/sql.png": "7ecd8c89e32abfaed7622a3daff9732c",
"assets/assets/images/story_time.png": "0faef3c69a2a38b1aaf9f06096645e7d",
"assets/assets/images/ui_ux.png": "b7951322dcfdbfd42c3bbc80151e8b4c",
"assets/assets/images/xd.png": "b6d3da172362139c2ee33ca401413cb6",
"assets/FontManifest.json": "41e4d5034508bd19f69c113eacd8565a",
"assets/fonts/MaterialIcons-Regular.otf": "c9a124f15c19a9bf8f823f27d6a06953",
"assets/NOTICES": "87bcd2a6253454aba3765437a51f4476",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "8d9fab3ed15edba82f2492f4926020cc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "d58f21c3e4efc737973c31a9c1d7d8f3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "41de86a1f271a7c37e23ed8c733610c1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.ico": "53d697b6642103abf6a43320e7154fba",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "2d671ed2d5b0eb7b0d7f4f516dadef70",
"icons/apple-touch-icon.png": "7db31c7e17cb76f67d1b22fc649c6c1c",
"icons/icon-192.png": "995b06e37910a15ddd6cd967ee2787b6",
"icons/icon-512.png": "b6e1ea4d3ea6ca6388580ca711781387",
"icons/Icon-maskable-192.png": "054ad887d5c73cbee17879bb3563f929",
"icons/Icon-maskable-512.png": "9f6aaa4f09d2e93aa2a17b41ff5c38af",
"index.html": "9450f823d3a6af2cde2ad4ff228c9792",
"/": "9450f823d3a6af2cde2ad4ff228c9792",
"main.dart.js": "3e9ddaaa9fa1cdf45011de37001f226e",
"manifest.json": "9583ebe54188295a4768ae1aa040030b",
"version.json": "cc1fa9cce5af273c0909d105387fee89"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
