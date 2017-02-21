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
//todo: ripple
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var mlToggleMod_1 = require("../../ml/components/controls/toggle/mlToggleMod");
var mlRippleMod_1 = require("../../ml/components/ripple/mlRippleMod");
var mlIconMod_1 = require("../../ml/components/icon/mlIconMod");
var debugFormMod_1 = require("../../ml/lib/debug_form/debugFormMod");
var pagToggle_1 = require("./pagToggle");
var PagToggleModule = (function () {
    function PagToggleModule() {
    }
    PagToggleModule = __decorate([
        core_1.NgModule({
            imports: [mlRippleMod_1.MlRippleMod, forms_1.ReactiveFormsModule, mlIconMod_1.MlIconMod, mlToggleMod_1.MlToggleMod, debugFormMod_1.DebugFormMod,
                router_1.RouterModule.forChild([{ path: '', component: pagToggle_1.PagToggle }])],
            declarations: [pagToggle_1.PagToggle] }), 
        __metadata('design:paramtypes', [])
    ], PagToggleModule);
    return PagToggleModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PagToggleModule;
//# sourceMappingURL=pagToggleModule.js.map