//todo: eliminar ficheros *.js en repo
//todo: usar enums para posibles valores de inputs
//todo: eventos drawer y obfuscator
//todo: probar a eliminar atributos id en elementos 'label'. revisar docs angular
//todo: probar a quitar "mdl-layout__container" de ml-layout => (cabcera+contenido) scrollable. hacer tests
//todo: themes: (1) estudiar como pasar estilos css a componentes
//todo: themes: (2) revisar sitios donde es posible eliminar encapsulation.none usando :host /deep/
//todo: themes: (3) investigar lo de quitar el encapsulation: ViewEncapsulation.None en cada componente (funciono en ml-radio)
//todo: revisar todos lo modulos, puede haber clases que sobren como paso con MlLayoutMod (sobre todo en los imports)
//todo: comprobar consola usando chrome remote debugging por usb en el movil
//todo: migracion a angular 4
//todo: crear paquete npm
//todo: ponerse en contacto con f7 para hacer otros componentes. ej: acordeon
//todo: atributo "fixed" en <ml-drawer>. mas intuitivo
//todo: Pruebas con Changedetection.onpush on/off para ml-selectfield type=date
//todo: revisar header scrollable
//todo: validaciones de input.date component (probar con valueChanges())
//todo: que se oculten dropwdowns al hacer click en el fondo
//todo: renombrar mlLayoutLib.ts a mdlLayoutLib, por ejemplo, y los demas ficheros
//todo: hacer documentacion de api para cada componente
//todo: que se puedan usar diferentes cabeceras y menus laterales (<ml-header>) en cada pagina (usar named router-outlet?)
//todo: hacer Ml starter project
//todo: habilitar webpack.config.js en angular-cli para poder usar local paths en router
//todo: animaciones en transiciones de estado usando eventos de router
// (ref: https://toddmotto.com/dynamic-page-titles-angular-2-router-events)
// Se podría pensar en hacer una directiva o un componente
//todo: abrir issue en repo angular sobre los warnings en controles
//todo: drawer dragabble
//todo: travis
//todo: completar tests con browserstack
//todo: footer component
//todo: crear un componente para visualizar gist en angular 2
//todo: separar page-loader component en un repositorio diferente, hacer 2: page-loader y progressbar-loader

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, Routes} from "@angular/router";
import {MlPageLoaderMod} from "./ml/components/loader/mlContentLoaderMod";
import {MlLayoutMod} from "./ml/components/layout/mlLayoutMod";
import {MlMenuMod} from "./ml/components/menu/mlMenuMod";
import {App} from "./app.layout";

// Relative paths for SystemJS
// const basePath = '.app/pages/';

// Absolute paths for Webpack
export const basePath = 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/';

const APP_ROUTES: Routes = [
{path: '',           redirectTo: 'button', pathMatch: 'full'},
{path: 'button',     loadChildren: basePath + 'button/pagButtonMod#PagButtonMod'},
{path: 'layout',     loadChildren: basePath + 'layout/pagLayoutMod#PagLayoutMod'},
{path: 'card',       loadChildren: basePath + 'card/pagCardMod#PagCardMod'},
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
{path: '**',         redirectTo: 'layout'}
];

@NgModule({
  imports: [BrowserModule, MlPageLoaderMod, MlLayoutMod, MlMenuMod,
    RouterModule.forRoot(APP_ROUTES, {enableTracing: false,  useHash: true})],
  declarations: [App], bootstrap: [App]
})
export class AppModule {}
