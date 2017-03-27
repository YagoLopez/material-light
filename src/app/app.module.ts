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

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {MlLoaderMod} from "./ml/components/loader/mlLoaderMod";
import {MlLayoutMod} from "./ml/components/layout/mlLayoutMod";
import {App} from "./app.layout";

// export const basePath = '.app/pages/';
export const basePath = 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/';

// WEBPACK ROUTES: absolute paths are needed by webpack and lazy-load
const APP_ROUTES = [
{path: '',           redirectTo: 'button', pathMatch: 'full'},
{path: 'card',       loadChildren: basePath + 'card/pagCardModule'},
{path: 'button',     loadChildren: basePath + 'button/pagButtonModule'},
{path: 'selectfield',loadChildren: basePath + 'selectfield/pagSelectfieldModule'},
{path: 'textfield',  loadChildren: basePath + 'textfield/pagTextfieldModule'},
{path: 'textfield2', loadChildren: basePath + 'textfield2/pagTextfieldModule2'},
{path: 'checkbox',   loadChildren: basePath + 'checkbox/pagCheckboxMod'},
{path: 'radio',      loadChildren: basePath + 'radio/pagRadioModule'},
{path: 'switch',     loadChildren: basePath + 'switch/pagSwitchModule'},
{path: 'toggle',     loadChildren: basePath + 'toggle/pagToggleModule'},
{path: 'badge',      loadChildren: basePath + 'badge/pagBadgeModule'},
{path: 'grid',       loadChildren: basePath + 'grid/pagGridModule'},
{path: 'tabs',       loadChildren: basePath + 'tabs/pagTabsModule'},
{path: 'snackbar',   loadChildren: basePath + 'snackbar/pagSnackbarModule'},
{path: 'chip',       loadChildren: basePath + 'chip/pagChipModule'},
{path: 'list',       loadChildren: basePath + 'list/pagListModule'},
{path: 'menu',       loadChildren: basePath + 'menu/pagMenuModule'},
{path: 'progressbar',loadChildren: basePath + 'progressbar/pagProgressbarModule'},
{path: 'spinner',    loadChildren: basePath + 'spinner/pagSpinnerModule'},
{path: 'tooltip',    loadChildren: basePath + 'tooltip/pagTooltipModule'},
{path: 'slider',     loadChildren: basePath + 'slider/pagSliderModule'},
{path: 'dialog',     loadChildren: basePath + 'dialog/pagDialogModule'},
{path: 'table',      loadChildren: basePath + 'table/pagTableModule'},
{path: 'layout',     loadChildren: basePath + 'layout/pagLayoutMod'},
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
