//todo: habilitar webpack.config.js en angular-cli para poder usar local paths en router
//todo: revisar default keyword y otras cosasa para compilacion aot

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {MlLoaderRouterMod} from "./ml/components/loader_router/mlLoaderRouterMod";
import {MlSpinnerMod} from "./ml/components/spinner/mlSpinnerMod";
import {MlLayoutMod} from "./ml/components/layout/mlLayoutMod";
import {MlTitleMod} from "./ml/components/title/mlTitleMod";
import {App} from "./app.layout";

// WEBPACK ROUTES: absolute paths are needed by webpack and lazy-load
const APP_ROUTES = [
{path: '',           loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/button/pagButtonModule'},
{path: 'button',     loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/button/pagButtonModule'},
{path: 'selectfield',loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/selectfield/pagSelectfieldModule'},
{path: 'textfield',  loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/textfield/pagTextfieldModule'},
{path: 'checkbox',   loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/checkbox/pagCheckboxMod'},
{path: 'radio',      loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/radio/pagRadioModule'},
{path: 'switch',     loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/switch/pagSwitchModule'},
{path: 'toggle',     loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/toggle/pagToggleModule'},
{path: 'badge',      loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/badge/pagBadgeModule'},
{path: 'card',       loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/card/pagCardModule'},
{path: 'grid',       loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/grid/pagGridModule'},
{path: 'tabs',       loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/tabs/pagTabsModule'},
{path: 'snackbar',   loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/snackbar/pagSnackbarModule'},
{path: 'chip',       loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/chip/pagChipModule'},
{path: 'list',       loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/list/pagListModule'},
{path: 'menu',       loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/menu/pagMenuModule'},
{path: 'progressbar',loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/progressbar/pagProgressbarModule'},
{path: 'spinner',    loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/spinner/pagSpinnerModule'},
{path: 'tooltip',    loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/tooltip/pagTooltipModule'},
{path: 'slider',     loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/slider/pagSliderModule'},
{path: 'dialog',     loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/dialog/pagDialogModule'},
{path: 'table',      loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/table/pagTableModule'},
{path: '**',         redirectTo: 'button'}
];

// SYSTEMJS ROUTES
/*
const APP_ROUTES = [
  {path: '',           loadChildren: '.app/pages/switch/pagSwitchModule'},
  {path: 'button',     loadChildren: '.app/pages/button/pagButtonModule'},
  {path: 'selectfield',loadChildren: '.app/pages/selectfield/pagSelectfieldModule'},
  {path: 'textfield',  loadChildren: '.app/pages/textfield/pagTextfieldModule'},
  {path: 'checkbox',   loadChildren: '.app/pages/checkbox/pagCheckboxMod'},
  {path: 'radio',      loadChildren: '.app/pages/radio/pagRadioModule'},
  {path: 'switch',     loadChildren: '.app/pages/switch/pagSwitchModule'},
  {path: 'toggle',     loadChildren: '.app/pages/toggle/pagToggleModule'},
  {path: 'badge',      loadChildren: '.app/pages/badge/pagBadgeModule'},
  {path: 'card',       loadChildren: '.app/pages/card/pagCardModule'},
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
  {path: '**',         redirectTo: 'button'}
];
*/

@NgModule({
  imports: [
    MlLoaderRouterMod, BrowserModule, MlSpinnerMod, MlTitleMod, MlLayoutMod,
    RouterModule.forRoot(APP_ROUTES, {enableTracing: false,  useHash: true})],
  declarations: [App],
  bootstrap: [App]
})
export class AppModule {}