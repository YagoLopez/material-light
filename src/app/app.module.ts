//todo: que se oculten drowdowns al hacer click en el fondo
//todo: renombrar mlLayoutLib.ts a mdlLayoutLib, por ejemplo, y los demas ficheros
//todo: media query para que se muestre el menu lateral en modo tablet en iframe
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
//todo: hacer test con browserstack
//todo: footer component
//todo: crear un componente para visualizar gist en angular 2
//todo: crear mas librerias de componentes
//todo: separar page loader component en un repositorio diferente, hacer una pagina de page-loader y progressbar loader

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {MlPageLoaderMod} from "./ml/components/loader/mlPageLoaderMod";
import {MlLayoutMod} from "./ml/components/layout/mlLayoutMod";
import {App} from "./app.layout";

// Relative paths for SystemJS
export const basePath = '.app/pages/';

// Absolute paths for Webpack
// export const basePath = 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/';

// WEBPACK ROUTES: absolute paths are needed by webpack and lazy-load
const APP_ROUTES = [
{path: '',           redirectTo: 'button', pathMatch: 'full'},
{path: 'card',       loadChildren: basePath + 'card/pagCardMod#PagCardMod'},
{path: 'button',     loadChildren: basePath + 'button/pagButtonMod#PagButtonMod'},
{path: 'selectfield',loadChildren: basePath + 'selectfield/pagSelectfieldMod#PagSelectfieldMod'},
{path: 'textfield',  loadChildren: basePath + 'textfield/pagTextfieldMod#PagTextfieldMod'},
{path: 'textfield2', loadChildren: basePath + 'textfield2/pagTextfield2Mod#PagTextfiel2dMod'},
{path: 'checkbox',   loadChildren: basePath + 'checkbox/pagCheckboxMod#PagCheckboxMod'},
{path: 'radio',      loadChildren: basePath + 'radio/pagRadioMod#PagRadioMod'},
{path: 'switch',     loadChildren: basePath + 'switch/pagSwitchMod#PagSwitchMod'},
{path: 'toggle',     loadChildren: basePath + 'toggle/pagToggleMod#PagToggleMod'},
{path: 'badge',      loadChildren: basePath + 'badge/pagBadgeMod#PagBadgeMod'},
{path: 'grid',       loadChildren: basePath + 'grid/pagGridMod#PagGridMod'},
{path: 'tabs',       loadChildren: basePath + 'tabs/pagTabsMod#PagTabsMod'},
{path: 'snackbar',   loadChildren: basePath + 'snackbar/pagSnackbarMod#PagSnackbarMod'},
{path: 'chip',       loadChildren: basePath + 'chip/pagChipMod#PagChipMod'},
{path: 'list',       loadChildren: basePath + 'list/pagListMod#PagListMod'},
{path: 'menu',       loadChildren: basePath + 'menu/pagMenuMod#PagMenuMod'},
{path: 'progressbar',loadChildren: basePath + 'progressbar/pagProgressbarMod#PagProgressbarMod'},
{path: 'spinner',    loadChildren: basePath + 'spinner/pagSpinnerMod#PagSpinnerMod'},
{path: 'tooltip',    loadChildren: basePath + 'tooltip/pagTooltipMod#PagTooltipMod'},
{path: 'slider',     loadChildren: basePath + 'slider/pagSliderMod#PagSliderMod'},
{path: 'dialog',     loadChildren: basePath + 'dialog/pagDialogMod#PagDialogMod'},
{path: 'table',      loadChildren: basePath + 'table/pagTableMod#PagTableMod'},
{path: 'layout',     loadChildren: basePath + 'layout/pagLayoutMod#PagLayoutMod'},
{path: '**',         redirectTo: 'button'}
];

// SYSTEMJS ROUTES: relative paths
/*
const APP_ROUTES = [
  {path: '',           redirectTo: 'button', pathMatch: 'full'},
  {path: 'button',     loadChildren: '.app/pages/button/pagButtonMod'},
  {path: 'card',       loadChildren: '.app/pages/card/pagCardMod'},
  {path: 'selectfield',loadChildren: '.app/pages/selectfield/pagSelectfieldMod'},
  {path: 'textfield',  loadChildren: '.app/pages/textfield/pagTextfieldMod'},
  {path: 'textfield2', loadChildren: '.app/pages/textfield2/pagTextfiel2dMod'},
  {path: 'checkbox',   loadChildren: '.app/pages/checkbox/pagCheckboxMod'},
  {path: 'radio',      loadChildren: '.app/pages/radio/pagRadioMod'},
  {path: 'switch',     loadChildren: '.app/pages/switch/pagSwitchMod'},
  {path: 'toggle',     loadChildren: '.app/pages/toggle/pagToggleMod'},
  {path: 'badge',      loadChildren: '.app/pages/badge/pagBadgeMod'},
  {path: 'grid',       loadChildren: '.app/pages/grid/pagGridMod'},
  {path: 'tabs',       loadChildren: '.app/pages/tabs/pagTabsMod'},
  {path: 'snackbar',   loadChildren: '.app/pages/snackbar/pagSnackbarMod'},
  {path: 'chip',       loadChildren: '.app/pages/chip/pagChipMod'},
  {path: 'list',       loadChildren: '.app/pages/list/pagListMod'},
  {path: 'menu',       loadChildren: '.app/pages/menu/pagMenuMod'},
  {path: 'progressbar',loadChildren: '.app/pages/progressbar/pagProgressbarMod'},
  {path: 'spinner',    loadChildren: '.app/pages/spinner/pagSpinnerMod'},
  {path: 'tooltip',    loadChildren: '.app/pages/tooltip/pagTooltipMod'},
  {path: 'slider',     loadChildren: '.app/pages/slider/pagSliderMod'},
  {path: 'dialog',     loadChildren: '.app/pages/dialog/pagDialogMod'},
  {path: 'table',      loadChildren: '.app/pages/table/pagTableMod'},
  {path: '**',         redirectTo  : 'button'}
];
*/

@NgModule({
  imports: [
    BrowserModule, MlPageLoaderMod, MlLayoutMod, RouterModule.forRoot(APP_ROUTES, {enableTracing: false,  useHash: true})],
  declarations: [App],
  bootstrap: [App]
})
export class AppModule {}
