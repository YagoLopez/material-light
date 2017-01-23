// todo: seems the 'install' event is launched each time the page is reloaded, which cause an indeterminated error
// todo: split filesToCache in two arrays for easy configuration and merge them

var cacheName = 'material-light';

var filesToCache = [

  // infrastructure files
  // '/manifest.json',
  'index.html',
  'favicon.ico',

  // app files
  'inline.d41d8cd98f00b204e980.bundle.js',
  'vendor.bf5dda6f310fec820727.bundle.js',
  'main.708c16106474c1fb3674.bundle.js',
  'assets/styles/app-loader.css',
  'assets/img/logo.png',
  'assets/fonts/material-icons.css',
  'assets/fonts/material-icons.woff2',
  'assets/fonts/roboto-v15-latin-regular.woff2',
  'assets/fonts/roboto-v15-latin-500.woff2',
  'assets/fonts/roboto-v15-latin-regular.woff',
  'assets/fonts/roboto-v15-latin-500.woff',
  'assets/img/user.jpg',
  'assets/img/welcome_card.jpg',
  'sw.js'

];

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function() {
    console.log('sw: registration ok');
  }).catch(function(error) {
    console.error('sw: registration failed ', error);
  })
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('sw: installed files into cache');
      return cache.addAll(filesToCache);
    }).catch(function (err) {
      console.log('error caching files', err);
    })
  )
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    // test if the request is cached
    caches.match(event.request).then(function(response) {
      // console.log('sw: feching file from cache: ', event.request.url);
      // return response from cache or from network if is available
      return response || fetch(event.request);
    }).catch(function () {
      // if request is not cached nor network available return to index
      return caches.match('index.html');
    })
  )
});