// todo: seems the 'install' event is launched each time the page is reloaded, which cause an indeterminated error
// todo: split filesToCache in two arrays for easy configuration and merge them

var cacheName = 'material-light';

var filesToCache = [

  // infrastructure files
  // '/manifest.json',
  'index.html',
  'favicon.ico',

  // app files
  'sw.js',
  'inline.bundle.js',
  'vendor.bundle.js',
  'main..bundle.js',
  'polyfills.bundle.js',
  '0.chink.js',
  '1.chink.js',
  '2.chink.js',
  '3.chink.js',
  '4.chink.js',
  '5.chink.js',
  '6.chink.js',
  '7.chink.js',
  '8.chink.js',
  '9.chink.js',
  '10.chink.js',
  '11.chink.js',
  '12.chink.js',
  '13.chink.js',
  '14.chink.js',
  '15.chink.js',
  '16.chink.js',
  '17.chink.js',
  '18.chink.js',
  '19.chink.js',
  '20.chink.js',
  '21.chink.js',
  '22.chink.js',

  // styles
  'assets/styles/app-loader.css',
  'assets/img/logo.png',
  'assets/fonts/material-icons.css',

  // fonts
  'assets/fonts/material-icons.woff2',
  'assets/fonts/roboto-v15-latin-regular.woff2',
  'assets/fonts/roboto-v15-latin-500.woff2',
  'assets/fonts/roboto-v15-latin-regular.woff',
  'assets/fonts/roboto-v15-latin-500.woff',

  // images
  'assets/img/user.jpg',
  'assets/img/welcome_card.jpg',

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
