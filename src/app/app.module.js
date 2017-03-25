//todo: media query para que se muestre el menu lateral en modo tablet en iframe
//todo: hacer documentacion de api para cada componente
//todo: que se puedan usar diferentes cabeceras y menus laterales (<ml-header>) en cada pagina (usar named router-outlet?)
//todo: hacer Ml boilerplate project
//todo: hacer release en github
//todo: habilitar webpack.config.js en angular-cli para poder usar local paths en router
//todo: revisar default keyword y otras cosas para compilacion aot
//todo: transiciones de estado usando eventos de router
// (ref: https://toddmotto.com/dynamic-page-titles-angular-2-router-events)
// Se podría pensar en hacer una directiva o un componente
//todo: abrir issue en repo angular sobre los warnings en controles
//todo: drawer dragabble
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var mlLoaderMod_1 = require("./ml/components/loader/mlLoaderMod");
var mlLayoutMod_1 = require("./ml/components/layout/mlLayoutMod");
var app_layout_1 = require("./app.layout");
// WEBPACK ROUTES: absolute paths are needed by webpack and lazy-load
var APP_ROUTES = [
    { path: '', redirectTo: 'button', pathMatch: 'full' },
    { path: 'card', loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/card/pagCardModule' },
    { path: 'button', loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/button/pagButtonModule' },
    { path: 'selectfield', loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/selectfield/pagSelectfieldModule' },
    { path: 'textfield', loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/textfield/pagTextfieldModule' },
    { path: 'textfield2', loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/textfield2/pagTextfieldModule2' },
    { path: 'checkbox', loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/checkbox/pagCheckboxMod' },
    { path: 'radio', loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/radio/pagRadioModule' },
    { path: 'switch', loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/switch/pagSwitchModule' },
    { path: 'toggle', loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/toggle/pagToggleModule' },
    { path: 'badge', loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/badge/pagBadgeModule' },
    { path: 'grid', loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/grid/pagGridModule' },
    { path: 'tabs', loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/tabs/pagTabsModule' },
    { path: 'snackbar', loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/snackbar/pagSnackbarModule' },
    { path: 'chip', loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/chip/pagChipModule' },
    { path: 'list', loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/list/pagListModule' },
    { path: 'menu', loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/menu/pagMenuModule' },
    { path: 'progressbar', loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/progressbar/pagProgressbarModule' },
    { path: 'spinner', loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/spinner/pagSpinnerModule' },
    { path: 'tooltip', loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/tooltip/pagTooltipModule' },
    { path: 'slider', loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/slider/pagSliderModule' },
    { path: 'dialog', loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/dialog/pagDialogModule' },
    { path: 'table', loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/table/pagTableModule' },
    { path: '**', redirectTo: 'button' }
];
// SYSTEMJS ROUTES: relative paths
/*
const APP_ROUTES = [
  {path: '',           redirectTo: 'button', pathMatch: 'full'},
  {path: 'button',     loadChildren: '.app/pages/button/pagButtonModule'},
  {path: 'card',       loadChildren: '.app/pages/card/pagCardModule'},
  {path: 'selectfield',loadChildren: '.app/pages/selectfield/pagSelectfieldModule'},
  {path: 'textfield',  loadChildren: '.app/pages/textfield/pagTextfieldModule'},
  {path: 'textfield2', loadChildren: '.app/pages/textfield2/pagTextfieldModule2'},
  {path: 'checkbox',   loadChildren: '.app/pages/checkbox/pagCheckboxMod'},
  {path: 'radio',      loadChildren: '.app/pages/radio/pagRadioModule'},
  {path: 'switch',     loadChildren: '.app/pages/switch/pagSwitchModule'},
  {path: 'toggle',     loadChildren: '.app/pages/toggle/pagToggleModule'},
  {path: 'badge',      loadChildren: '.app/pages/badge/pagBadgeModule'},
  {path: 'grid',       loadChildren: '.app/pages/grid/pagGridModule'},
  {path: 'tabs',       loadChildren: '.app/pages/tabs/pagTabsModule'},
  {path: 'snackbar',   loadChildren: '.app/pages/snackbar/pagSnackbarModule'},
  {path: 'chip',       loadChildren: '.app/pages/chip/pagChipModule'},
  {path: 'list',       loadChildren: '.app/pages/list/pagListModule'},
  {path: 'menu',       loadChildren: '.app/pages/menu/pagMenuModule'},
  {path: 'progressbar',loadChildren: '.app/pages/progressbar/pagProgressbarModule'},
  {path: 'spinner',    loadChildren: '.app/pages/spinner/pagSpinnerModule'},
  {path: 'tooltip',    loadChildren: '.app/pages/tooltip/pagTooltipModule'},
  {path: 'slider',     loadChildren: '.app/pages/slider/pagSliderModule'},
  {path: 'dialog',     loadChildren: '.app/pages/dialog/pagDialogModule'},
  {path: 'table',      loadChildren: '.app/pages/table/pagTableModule'},
  {path: '**',         redirectTo  : 'button'}
];
*/
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule, mlLoaderMod_1.MlLoaderMod, mlLayoutMod_1.MlLayoutMod, router_1.RouterModule.forRoot(APP_ROUTES, { enableTracing: false, useHash: true })],
            declarations: [app_layout_1.App],
            bootstrap: [app_layout_1.App]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map