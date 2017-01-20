// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

'use strict';

debugger;
var precacheConfig = [[
  "assets/fonts/fonts.css", "4a80a2ddc653736f9aad71a32f208059"],
  ["assets/fonts/material-icons.css","0cf04de9603333a9f11177c54cf3d36a"],

  ["assets/fonts/material-icons.woff2","8661ec807b7ef443666919b921c58211"],
  ["assets/fonts/roboto-v15-latin-500.woff","57af64fc644194101c1593abea164433"],
  ["assets/fonts/roboto-v15-latin-500.woff2","bb474f16c9f76f522d656d66aa4a220e"],
  ["assets/fonts/roboto-v15-latin-500italic.woff","b670694ba39f55b5ab9b6022eb09d9ef"],
  ["assets/fonts/roboto-v15-latin-500italic.woff2","9e7beee5510fcd9cbc4dd37f2c721f14"],
  ["assets/fonts/roboto-v15-latin-regular.woff","16e1d930cf13fb7a956372044b6d02d0"],
  ["assets/fonts/roboto-v15-latin-regular.woff2","7e367be02cd17a96d513ab74846bafb3"],

  ["assets/img/logo.png","cc420173e45fa9d2c049d823e88be901"],
  ["assets/img/logo.psd","7a1f2927c76c1266a84dc8c6d51d6144"],
  ["assets/img/transparent.jpg","f17853017415f4def9d23508feff521a"],
  ["assets/img/user.jpg","01b46903dd0c2cb3b0abc908f3095d93"],
  ["assets/img/welcome_card.jpg","810f0185586b37951e07c25376663834"],
  ["assets/styles/app-loader.css","2815614795b12669258cb99a97981a7d"],
  ["favicon.ico","b9aa7c338693424aae99599bec875b5f"],
  ["index.html","1a2358d2c213bca52cb365802039b9d2"],
  ["main.708c16106474c1fb3674.bundle.js","08d11bad477c2724ed562612ae1d5b18"],
  ["inline.d41d8cd98f00b204e980.bundle.js","027d404cf6d424f2dc590c266eb47687"],
  // ["main.708c16106474c1fb3674.bundle.js.gz","94ea6764b7ae8ad96d11d2115ca30451"],
  ["vendor.bf5dda6f310fec820727.bundle.js","6fc0ccf99d1dbf432da1ad5bceb6fd16"],
  // ["vendor.bf5dda6f310fec820727.bundle.js.gz","06a7c26f33d697bc9daafef24c3d167c"],
  ["ml-service-worker.js","ebada424e87a49cfe7fedef348762a51"]

];

// Service worker registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('ml-service-worker.js').then(function() {
    console.log('sw: registration ok');
  }).catch(function(err) {
    console.error('sw: registration failed ', err);
  })
}

var cacheName = 'material-light-' + (self.registration ? self.registration.scope : '');

var ignoreUrlParametersMatching = [/^utm_/];

var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }
    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }
    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {
                credentials: 'same-origin',
                redirect: 'follow'
              }));
            }
          })
        );
      });
    }).then(function() {
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







