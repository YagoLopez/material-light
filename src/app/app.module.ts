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

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {MlPageLoaderMod} from "./ml/components/loader/mlPageLoaderMod";
import {MlLayoutMod} from "./ml/components/layout/mlLayoutMod";
import {App} from "./app.layout";

// Relative paths for SystemJS
// export const basePath = '.app/pages/';

// Absolute paths for Webpack
export const basePath = 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/';

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

@NgModule({
  imports: [
    BrowserModule, MlPageLoaderMod, MlLayoutMod, RouterModule.forRoot(APP_ROUTES, {enableTracing: false,  useHash: true})],
  declarations: [App],
  bootstrap: [App]
})
export class AppModule {}
