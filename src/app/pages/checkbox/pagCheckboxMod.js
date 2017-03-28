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
var mlCheckboxMod_1 = require("../../ml/components/controls/checkbox/mlCheckboxMod");
var debugFormMod_1 = require("../../ml/lib/debug_form/debugFormMod");
var mlRippleMod_1 = require("../../ml/components/ripple/mlRippleMod");
var viewSourceMod_1 = require("../view-source/viewSourceMod");
var pagCheckbox_1 = require("./pagCheckbox");
var PagCheckboxMod = (function () {
    function PagCheckboxMod() {
    }
    PagCheckboxMod = __decorate([
        core_1.NgModule({
            imports: [mlRippleMod_1.MlRippleMod, forms_1.FormsModule, forms_1.ReactiveFormsModule, mlCheckboxMod_1.MlCheckboxMod, debugFormMod_1.DebugFormMod, viewSourceMod_1.ViewSourceMod,
                router_1.RouterModule.forChild([{ path: '', component: pagCheckbox_1.PagCheckbox }])],
            declarations: [pagCheckbox_1.PagCheckbox] }), 
        __metadata('design:paramtypes', [])
    ], PagCheckboxMod);
    return PagCheckboxMod;
}());
exports.PagCheckboxMod = PagCheckboxMod;
