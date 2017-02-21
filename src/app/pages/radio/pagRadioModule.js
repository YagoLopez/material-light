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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var mlRippleMod_1 = require("../../ml/components/ripple/mlRippleMod");
var mlRadioMod_1 = require("../../ml/components/controls/radio/mlRadioMod");
var mlButtonMod_1 = require("../../ml/components/controls/button/mlButtonMod");
var debugFormMod_1 = require("../../ml/lib/debug_form/debugFormMod");
var pagRadio_1 = require("./pagRadio");
var PagRadioModule = (function () {
    function PagRadioModule() {
    }
    PagRadioModule = __decorate([
        core_1.NgModule({
            imports: [mlRippleMod_1.MlRippleMod, forms_1.FormsModule, forms_1.ReactiveFormsModule, mlButtonMod_1.MlButtonMod, mlRadioMod_1.MlRadioMod, debugFormMod_1.DebugFormMod,
                router_1.RouterModule.forChild([{ path: '', component: pagRadio_1.PagRadio }])],
            declarations: [pagRadio_1.PagRadio] }), 
        __metadata('design:paramtypes', [])
    ], PagRadioModule);
    return PagRadioModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PagRadioModule;
//# sourceMappingURL=pagRadioModule.js.map