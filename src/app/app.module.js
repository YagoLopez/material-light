//todo: media query para que se muestre el menu lateral en modo tablet en iframe
//todo: hacer documentacion de api para cada componente
//todo: que se puedan usar diferentes cabeceras y menus laterales (<ml-header>) en cada pagina (usar named router-outlet?)
//todo: hacer Ml boilerplate project
//todo: habilitar webpack.config.js en angular-cli para poder usar local paths en router
//todo: revisar default keyword y otras cosas para compilacion aot
//todo: transiciones de estado usando eventos de router
// (ref: https://toddmotto.com/dynamic-page-titles-angular-2-router-events)
// Se podría pensar en hacer una directiva o un componente
//todo: abrir issue en repo angular sobre los warnings en controles
//todo: drawer dragabble
//todo: documentar m-layout
//todo: travis
//todo: browserstack
//todo: decir donde buscar nombre de iconos
//todo: footer component
//todo: hacer directiva para main content responsive
//todo: separar fuentes (*.ts) de codigo transpilado (*.js, *.map)
//todo: renombrar modulos de paginas a mod
//todo: el nombre aquel: usar formControlName en lugar de formControl, o viceversa
//todo: crear un componente para visualizar gist en angular 2
//todo: crear mas librerias de componentes
//todo: buscar/hacer un componente markdown para ng2
//todo: separar page loader component en un repositorio diferente, hacer una pagina de page-loader
//todo: poner las clases de app.layout.ts en el fichero css correspondiente (las que convenga)
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
/*
type ModuleLoader = 'webpack' | 'systemjs';
const LOADER: ModuleLoader = 'webpack';
export let basePath: string;
if(LOADER === 'webpack'){
  basePath = 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/';
} else {
  basePath = '.app/pages/';
}
*/
exports.basePath = 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/';
// WEBPACK ROUTES: absolute paths are needed by webpack and lazy-load
var APP_ROUTES = [
    { path: '', redirectTo: 'button', pathMatch: 'full' },
    { path: 'card', loadChildren: exports.basePath + 'card/pagCardModule' },
    { path: 'button', loadChildren: exports.basePath + 'button/pagButtonModule' },
    { path: 'selectfield', loadChildren: exports.basePath + 'selectfield/pagSelectfieldModule' },
    { path: 'textfield', loadChildren: exports.basePath + 'textfield/pagTextfieldModule' },
    { path: 'textfield2', loadChildren: exports.basePath + 'textfield2/pagTextfieldModule2' },
    { path: 'checkbox', loadChildren: exports.basePath + 'checkbox/pagCheckboxMod' },
    { path: 'radio', loadChildren: exports.basePath + 'radio/pagRadioModule' },
    { path: 'switch', loadChildren: exports.basePath + 'switch/pagSwitchModule' },
    { path: 'toggle', loadChildren: exports.basePath + 'toggle/pagToggleModule' },
    { path: 'badge', loadChildren: exports.basePath + 'badge/pagBadgeModule' },
    { path: 'grid', loadChildren: exports.basePath + 'grid/pagGridModule' },
    { path: 'tabs', loadChildren: exports.basePath + 'tabs/pagTabsModule' },
    { path: 'snackbar', loadChildren: exports.basePath + 'snackbar/pagSnackbarModule' },
    { path: 'chip', loadChildren: exports.basePath + 'chip/pagChipModule' },
    { path: 'list', loadChildren: exports.basePath + 'list/pagListModule' },
    { path: 'menu', loadChildren: exports.basePath + 'menu/pagMenuModule' },
    { path: 'progressbar', loadChildren: exports.basePath + 'progressbar/pagProgressbarModule' },
    { path: 'spinner', loadChildren: exports.basePath + 'spinner/pagSpinnerModule' },
    { path: 'tooltip', loadChildren: exports.basePath + 'tooltip/pagTooltipModule' },
    { path: 'slider', loadChildren: exports.basePath + 'slider/pagSliderModule' },
    { path: 'dialog', loadChildren: exports.basePath + 'dialog/pagDialogModule' },
    { path: 'table', loadChildren: exports.basePath + 'table/pagTableModule' },
    { path: 'layout', loadChildren: exports.basePath + 'layout/pagLayoutMod' },
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