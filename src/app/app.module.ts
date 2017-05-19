//todo: reset button debe quitar errores de validacion en controles
//todo: hacer documentacion de api para cada componente
//todo: instalar polyfill classList.js para svg e IE?
//todo: probar a simplificar controles input usando ng-content (transclusion)
//todo: suscribirse a los valores observables de los forms (usar valueChanges) para simplificar los controles
//todo: drawer dragabble
//todo: eventos drawer y obfuscator
//todo: probar a eliminar atributos id en elementos 'label'. revisar docs angular
//todo: comprobar consola usando chrome remote debugging por usb en el movil
//todo: ponerse en contacto con f7 para hacer otros componentes. ej: acordeon
//todo: que se puedan usar diferentes cabeceras y menus laterales (<ml-header>) en cada pagina (usar named router-outlet?)
//todo: habilitar webpack.config.js en angular-cli para poder usar local paths en router
//todo: animaciones en transiciones de estado usando eventos de router
// (ref: https://toddmotto.com/dynamic-page-titles-angular-2-router-events)
// Se podría pensar en hacer una directiva o un componente
//todo: abrir issue en repo angular sobre los warnings en controles
//todo: travis
//todo: completar tests con browserstack
//todo: footer component
//todo: crear un componente para visualizar gist en angular 2
//todo: separar page-loader component en un repositorio diferente, hacer 2: page-loader y progressbar-loader
//todo: polyfill dialog component (usar w3s.js ó f7)

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, Routes} from "@angular/router";
import {MlPageLoaderMod} from "./ml/components/loader/mlContentLoaderMod";
import {MlLayoutMod} from "./ml/components/layout/mlLayoutMod";
import {MlMenuMod} from "./ml/components/menu/mlMenuMod";
import {MlDemoApp} from "./app.layout";

function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  let results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Absolute paths for Webpack
let basePath = 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/';

if(getUrlParameter('serve') === 'systemjs'){
  // Relative paths for SystemJS
  basePath = './app/pages/';
}

const APP_ROUTES: Routes = [
{path: '',           redirectTo: 'button', pathMatch: 'full'},
{path: 'button',     loadChildren: basePath + 'button/pagButtonMod#PagButtonMod'},
{path: 'layout',     loadChildren: basePath + 'layout/pagLayoutMod#PagLayoutMod'},
{path: 'card',       loadChildren: basePath + 'card/pagCardMod#PagCardMod'},
{path: 'selectfield',loadChildren: basePath + 'selectfield/pagSelectfieldMod#PagSelectfieldMod'},
{path: 'textfield',  loadChildren: basePath + 'textfield/pagTextfieldMod#PagTextfieldMod'},
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
{path: '**',         redirectTo: 'button'}
];

@NgModule({
  imports: [BrowserModule, MlPageLoaderMod, MlLayoutMod, MlMenuMod,
    RouterModule.forRoot(APP_ROUTES, {enableTracing: false,  useHash: true})],
  declarations: [MlDemoApp], bootstrap: [MlDemoApp]
})
export class AppModule {}
