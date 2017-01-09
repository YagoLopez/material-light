// import './polyfills';
// Polyfills needed by Angular 2 loaded before
// the app. You can add your own extra polyfills to this file.
"use strict";
require('core-js/es6/symbol');
require('core-js/es6/object');
require('core-js/es6/function');
require('core-js/es6/parse-int');
require('core-js/es6/parse-float');
require('core-js/es6/number');
require('core-js/es6/math');
require('core-js/es6/string');
require('core-js/es6/date');
require('core-js/es6/array');
require('core-js/es6/map');
require('core-js/es6/set');
require('core-js/es6/reflect');
require('zone.js/dist/zone');
require('core-js/es7/reflect');
// import 'core-js/es6/regexp';
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var app_module_1 = require("./app/app.module");
var PRODUCTION_MODE = true;
if (PRODUCTION_MODE) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=C:/Users/Yago/WebstormProjects/material-light/src/main.js.map