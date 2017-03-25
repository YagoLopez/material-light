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

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {MlLoaderMod} from "./ml/components/loader/mlLoaderMod";
import {MlLayoutMod} from "./ml/components/layout/mlLayoutMod";
import {App} from "./app.layout";

// WEBPACK ROUTES: absolute paths are needed by webpack and lazy-load
const APP_ROUTES = [
{path: '',           redirectTo: 'button', pathMatch: 'full'},
{path: 'card',      loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/card/pagCardModule'},
{path: 'button',     loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/button/pagButtonModule'},
{path: 'selectfield',loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/selectfield/pagSelectfieldModule'},
{path: 'textfield',  loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/textfield/pagTextfieldModule'},
{path: 'textfield2', loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/textfield2/pagTextfieldModule2'},
{path: 'checkbox',   loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/checkbox/pagCheckboxMod'},
{path: 'radio',      loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/radio/pagRadioModule'},
{path: 'switch',     loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/switch/pagSwitchModule'},
{path: 'toggle',     loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/toggle/pagToggleModule'},
{path: 'badge',      loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/badge/pagBadgeModule'},
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

@NgModule({
  imports: [
    BrowserModule, MlLoaderMod, MlLayoutMod, RouterModule.forRoot(APP_ROUTES, {enableTracing: false,  useHash: true})],
  declarations: [App],
  bootstrap: [App]
})
export class AppModule {}
