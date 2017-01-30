//todo: revisar el funcionamiento de las fuentes y si no funcionan usar las del proyecto ng1.5-F7-components
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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var ml_components_list_1 = require("./components/ml_components_list");
var MlModule = (function () {
    function MlModule() {
    }
    MlModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                ml_components_list_1.MlComponentsList
            ],
            exports: [
                ml_components_list_1.MlComponentsList
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MlModule);
    return MlModule;
}());
exports.MlModule = MlModule;
//# sourceMappingURL=ml_module.js.map