//todo: revisar header scrollable
//todo: crear instalador npm
//todo: probar con angular 4
//todo: validaciones de input.date component (probar con valueChanges())
//todo: que se oculten dropwdowns al hacer click en el fondo
//todo: renombrar mlLayoutLib.ts a mdlLayoutLib, por ejemplo, y los demas ficheros
//todo: hacer documentacion de api para cada componente
//todo: que se puedan usar diferentes cabeceras y menus laterales (<ml-header>) en cada pagina (usar named router-outlet?)
//todo: hacer Ml starter project
//todo: habilitar webpack.config.js en angular-cli para poder usar local paths en router
//todo: transiciones de estado usando eventos de router
// (ref: https://toddmotto.com/dynamic-page-titles-angular-2-router-events)
// Se podría pensar en hacer una directiva o un componente
//todo: abrir issue en repo angular sobre los warnings en controles
//todo: drawer dragabble
//todo: travis
//todo: completar tests con browserstack
//todo: footer component
//todo: crear un componente para visualizar gist en angular 2
//todo: crear mas librerias de componentes
//todo: separar page-loader component en un repositorio diferente, hacer 2: page-loader y progressbar-loader
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
var mlPageLoaderMod_1 = require("./ml/components/loader/mlPageLoaderMod");
var mlLayoutMod_1 = require("./ml/components/layout/mlLayoutMod");
var app_layout_1 = require("./app.layout");
// Relative paths for SystemJS
// export const basePath = '.app/pages/';
// Absolute paths for Webpack
exports.basePath = 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/';
// WEBPACK ROUTES: absolute paths are needed by webpack and lazy-load
var APP_ROUTES = [
    { path: '', redirectTo: 'button', pathMatch: 'full' },
    { path: 'card', loadChildren: exports.basePath + 'card/pagCardMod#PagCardMod' },
    { path: 'button', loadChildren: exports.basePath + 'button/pagButtonMod#PagButtonMod' },
    { path: 'selectfield', loadChildren: exports.basePath + 'selectfield/pagSelectfieldMod#PagSelectfieldMod' },
    { path: 'textfield', loadChildren: exports.basePath + 'textfield/pagTextfieldMod#PagTextfieldMod' },
    { path: 'textfield2', loadChildren: exports.basePath + 'textfield2/pagTextfield2Mod#PagTextfiel2dMod' },
    { path: 'checkbox', loadChildren: exports.basePath + 'checkbox/pagCheckboxMod#PagCheckboxMod' },
    { path: 'radio', loadChildren: exports.basePath + 'radio/pagRadioMod#PagRadioMod' },
    { path: 'switch', loadChildren: exports.basePath + 'switch/pagSwitchMod#PagSwitchMod' },
    { path: 'toggle', loadChildren: exports.basePath + 'toggle/pagToggleMod#PagToggleMod' },
    { path: 'badge', loadChildren: exports.basePath + 'badge/pagBadgeMod#PagBadgeMod' },
    { path: 'grid', loadChildren: exports.basePath + 'grid/pagGridMod#PagGridMod' },
    { path: 'tabs', loadChildren: exports.basePath + 'tabs/pagTabsMod#PagTabsMod' },
    { path: 'snackbar', loadChildren: exports.basePath + 'snackbar/pagSnackbarMod#PagSnackbarMod' },
    { path: 'chip', loadChildren: exports.basePath + 'chip/pagChipMod#PagChipMod' },
    { path: 'list', loadChildren: exports.basePath + 'list/pagListMod#PagListMod' },
    { path: 'menu', loadChildren: exports.basePath + 'menu/pagMenuMod#PagMenuMod' },
    { path: 'progressbar', loadChildren: exports.basePath + 'progressbar/pagProgressbarMod#PagProgressbarMod' },
    { path: 'spinner', loadChildren: exports.basePath + 'spinner/pagSpinnerMod#PagSpinnerMod' },
    { path: 'tooltip', loadChildren: exports.basePath + 'tooltip/pagTooltipMod#PagTooltipMod' },
    { path: 'slider', loadChildren: exports.basePath + 'slider/pagSliderMod#PagSliderMod' },
    { path: 'dialog', loadChildren: exports.basePath + 'dialog/pagDialogMod#PagDialogMod' },
    { path: 'table', loadChildren: exports.basePath + 'table/pagTableMod#PagTableMod' },
    { path: 'layout', loadChildren: exports.basePath + 'layout/pagLayoutMod#PagLayoutMod' },
    { path: '**', redirectTo: 'button' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule, mlPageLoaderMod_1.MlPageLoaderMod, mlLayoutMod_1.MlLayoutMod, router_1.RouterModule.forRoot(APP_ROUTES, { enableTracing: false, useHash: true })],
            declarations: [app_layout_1.App],
            bootstrap: [app_layout_1.App]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
