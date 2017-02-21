import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {MlLayoutMod} from "./ml/components/layout/mlLayoutMod";
import {MlTitleMod} from "./ml/components/title/mlTitleMod";
import {App} from "./app.layout";

// Note: Webpack needs absolute paths
const APP_ROUTES = [
// {path: '',           loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/button/pagButtonModule'},
{path: 'button',     loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/button/pagButtonModule'},
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
{path: 'checkbox',   loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/checkbox/pagCheckboxMod'},
{path: 'radio',      loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/radio/pagRadioModule'},
{path: 'switch',     loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/switch/pagSwitchModule'},
{path: 'toggle',     loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/toggle/pagToggleModule'},
{path: 'textfield',  loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/textfield/pagTextfieldModule'},
{path: 'selectfield',loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/selectfield/pagSelectfieldMod'},
{path: 'dialog',     loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/dialog/pagDialogModule'},
{path: 'table',      loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/table/pagTableModule'},
{path: '**',         redirectTo: 'button'}
];

@NgModule({
  imports: [
    BrowserModule, MlTitleMod, MlLayoutMod, RouterModule.forRoot(APP_ROUTES, {enableTracing: false,  useHash: true})
  ],
  declarations: [
    App
  ],
  bootstrap: [
    App
  ]
})
export class AppModule {}

