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
var mlLayoutMod_1 = require("./ml/components/layout/mlLayoutMod");
var mlTitleMod_1 = require("./ml/components/title/mlTitleMod");
var app_layout_1 = require("./app.layout");
// Note: Webpack needs absolute paths
var APP_ROUTES = [
    // {path: '',           loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/button/pagButtonModule'},
    { path: 'button', loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/button/pagButtonModule' },
    { path: 'badge', loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/badge/pagBadgeModule' },
    { path: 'card', loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/card/pagCardModule' },
    { path: 'grid', loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/grid/pagGridModule' },
    { path: 'tabs', loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/tabs/pagTabsMod' },
    { path: 'snackbar', loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/snackbar/pagSnackbarModule' },
    { path: 'chip', loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/chip/pagChipModule' },
    { path: 'list', loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/list/pagListModule' },
    { path: 'menu', loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/menu/pagMenuModule' },
    { path: 'progressbar', loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/progressbar/pagProgressbarModule' },
    { path: 'spinner', loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/spinner/pagSpinnerModule' },
    { path: 'tooltip', loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/tooltip/pagTooltipModule' },
    { path: 'slider', loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/slider/pagSliderModule' },
    { path: 'checkbox', loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/checkbox/pagCheckboxMod' },
    { path: 'radio', loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/radio/pagRadioModule' },
    { path: 'switch', loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/switch/pagSwitchModule' },
    { path: 'toggle', loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/toggle/pagToggleModule' },
    { path: 'textfield', loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/textfield/pagTextfieldModule' },
    { path: 'selectfield', loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/selectfield/pagSelectfieldMod' },
    { path: 'dialog', loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/dialog/pagDialogModule' },
    { path: 'table', loadChildren: 'C:/Users/Yago/WebstormProjects/material-light/src/app/pages/table/pagTableModule' },
    { path: '**', redirectTo: 'button' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule, mlTitleMod_1.MlTitleMod, mlLayoutMod_1.MlLayoutMod, router_1.RouterModule.forRoot(APP_ROUTES, { enableTracing: false, useHash: true })
            ],
            declarations: [
                app_layout_1.App
            ],
            bootstrap: [
                app_layout_1.App
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map