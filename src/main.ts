import 'polyfills';
import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from "./app/mlDemoAppMod";

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
