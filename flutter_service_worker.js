'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/admin_assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/admin_assets/icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/admin_assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/admin_assets/icons/excle_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/admin_assets/icons/Figma_file.svg": "0ae328b79325e7615054aed3147c81f9",
"assets/admin_assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/admin_assets/icons/google_drive.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"assets/admin_assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/admin_assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/admin_assets/icons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"assets/admin_assets/icons/menu_dashbord.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/admin_assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/admin_assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/admin_assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/admin_assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/admin_assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/admin_assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/admin_assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/admin_assets/icons/one_drive.svg": "aa908c0a29eb795606799385cdfc8592",
"assets/admin_assets/icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/admin_assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/admin_assets/icons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/admin_assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/admin_assets/icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/admin_assets/images/logo.png": "5315be9d0a7602fb12a0ad4c2e3006e9",
"assets/admin_assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/AssetManifest.json": "6b20087a546e1673264d12de32d51e66",
"assets/assets/icons/back_arrow.svg": "c35b3f97779bff7b669938acb7b7ad93",
"assets/assets/icons/flower.svg": "46f699fab9e4cc4bd9f942ea53d73de3",
"assets/assets/icons/heart-icon.svg": "3ed69ef95480946fc2aa43a17722ec79",
"assets/assets/icons/icon_2.svg": "b74115c161dd696370af47f48c1ef148",
"assets/assets/icons/icon_3.svg": "cddbcb223ffa19a4d1faf8ba0aabef6a",
"assets/assets/icons/icon_4.svg": "4c78bde50054255c1c981a2c3aaaec04",
"assets/assets/icons/menu.svg": "0dd3549af7ee5b368ebcb0d8e0deb904",
"assets/assets/icons/more.svg": "a4a9ee0bf291be1d95f79949ad88b498",
"assets/assets/icons/search.svg": "dfc7db1dfd5bb8b26916d9226bc02bac",
"assets/assets/icons/sun.svg": "de21a25e2878fb1b62579a0d2cf4444a",
"assets/assets/icons/user-icon.svg": "76536891a2f21ae4a44ffe82f1f0f6d0",
"assets/assets/images/bottom_img_1.png": "9f62a10df50dbac13dfe4ef6911053e3",
"assets/assets/images/bottom_img_2.png": "048ef6167b9d28ddf6f3c8be98d4bdfd",
"assets/assets/images/image_1.png": "4e100c6056ca67572abb11a23626773a",
"assets/assets/images/image_2.png": "ac500e92f625b5cceabcefaec670da59",
"assets/assets/images/image_3.png": "b1a6125791100a2c73d57b1ee4937a8e",
"assets/assets/images/img.png": "d0dfb918c39695889777b347b2080a6e",
"assets/assets/images/img_main.png": "3777e97bd18084e42016641d40c3a30d",
"assets/assets/images/logo.png": "86d4dc5cbadc8459349e2e75e8c3000a",
"assets/FontManifest.json": "08c2a268a8ca1751181968354ad85639",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "a46dee1bb3b26339eef0bc19544b16d3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/unicons/icons/UniconsLine.ttf": "b6a7ecc47d2853caf153cc1aa5cf93ec",
"assets/packages/unicons/icons/UniconsSolid.ttf": "630f8bd494e53400fa9cda3a4eb8ec10",
"assets/packages/unicons/icons/UniconsThinline.ttf": "fe40541d1f998ea2122a68d072f8e254",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "be7f0f24d22163686cf45added62f399",
"/": "be7f0f24d22163686cf45added62f399",
"main.dart.js": "113b098e63be0fd0b84a9948b1e4e095",
"manifest.json": "7099e3b358ed52d79b50454751b4b71c",
"version.json": "8b71d51fa5b384c7b33fbe880cd5fe6f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
