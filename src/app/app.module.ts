//todo: voy por page radio
//todo: habilitar webpack.config.js en angular-cli para poder usar local paths en router
//todo: revisar default keyword y otras cosasa para compilacion aot

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {MlSpinnerMod} from "./ml/components/spinner/mlSpinnerMod";
import {MlLayoutMod} from "./ml/components/layout/mlLayoutMod";
import {MlTitleMod} from "./ml/components/title/mlTitleMod";
import {App} from "./app.layout";
import {MlRouterLoaderMod} from "./ml/components/router_loader/mlRouterLoaderMod";

// Note: absolute paths are needed by webpack and lazy-load
/*
const APP_ROUTES = [
{path: '',           loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/radio/pagRadioModule'},
{path: 'button',     loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/button/pagButtonModule'},
{path: 'selectfield',loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/selectfield/pagSelectfieldMod'},
{path: 'textfield',  loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/textfield/pagTextfieldModule'},
{path: 'checkbox',   loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/checkbox/pagCheckboxMod'},
{path: 'radio',      loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/radio/pagRadioModule'},
{path: 'switch',     loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/switch/pagSwitchModule'},
{path: 'toggle',     loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/toggle/pagToggleModule'},
{path: 'badge',      loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/badge/pagBadgeModule'},
{path: 'card',       loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/card/pagCardModule'},
{path: 'grid',       loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/grid/pagGridModule'},
{path: 'tabs',       loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/tabs/pagTabsMod'},
{path: 'snackbar',   loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/snackbar/pagSnackbarModule'},
{path: 'chip',       loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/chip/pagChipModule'},
{path: 'list',       loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/list/pagListModule'},
{path: 'menu',       loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/menu/pagMenuModule'},
{path: 'progressbar',loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/progressbar/pagProgressbarModule'},
{path: 'spinner',    loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/spinner/pagSpinnerModule'},
{path: 'tooltip',    loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/tooltip/pagTooltipModule'},
{path: 'slider',     loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/slider/pagSliderModule'},
{path: 'dialog',     loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/dialog/pagDialogModule'},
{path: 'table',      loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/table/pagTableModule'},
{path: '**',         redirectTo: 'button'}
];
*/
const APP_ROUTES = [
{path: '',           loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/card/pagCardModule'},
{path: 'button',     loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/button/pagButtonModule'},
{path: 'selectfield',loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/selectfield/pagSelectfieldMod'},
{path: 'textfield',  loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/textfield/pagTextfieldModule'},
{path: 'checkbox',   loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/checkbox/pagCheckboxMod'},
{path: 'radio',      loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/radio/pagRadioModule'},
{path: 'switch',     loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/switch/pagSwitchModule'},
{path: 'toggle',     loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/toggle/pagToggleModule'},
{path: 'badge',      loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/badge/pagBadgeModule'},
{path: 'card',       loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/card/pagCardModule'},
{path: 'grid',       loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/grid/pagGridModule'},
{path: 'tabs',       loadChildren: 'C:/Users/UsuarioAurora/Documents/WebstormProjects/material-light/src/app/pages/tabs/pagTabsMod'},
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

@NgModule({
  imports: [
    MlRouterLoaderMod, BrowserModule, MlSpinnerMod, MlTitleMod, MlLayoutMod,
    RouterModule.forRoot(APP_ROUTES, {enableTracing: false,  useHash: true})],
  declarations: [App],
  bootstrap: [App]
})
export class AppModule {}