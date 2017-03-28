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
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var mlIconMod_1 = require("../../icon/mlIconMod");
var mlTextfield_1 = require("./mlTextfield");
var mlTextfieldExpand_1 = require("./mlTextfieldExpand");
var mlTextfieldArea_1 = require("./mlTextfieldArea");
var mlTextfieldLabel_1 = require("./mlTextfieldLabel");
var MlTextfieldMod = (function () {
    function MlTextfieldMod() {
    }
    MlTextfieldMod = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, mlIconMod_1.MlIconMod],
            declarations: [mlTextfield_1.MlTextfield, mlTextfieldExpand_1.MlTextfieldExpand, mlTextfieldArea_1.MlTextfieldArea, mlTextfieldLabel_1.MlTextfieldLabel],
            exports: [mlTextfield_1.MlTextfield, mlTextfieldExpand_1.MlTextfieldExpand, mlTextfieldArea_1.MlTextfieldArea, mlTextfieldLabel_1.MlTextfieldLabel]
        }), 
        __metadata('design:paramtypes', [])
    ], MlTextfieldMod);
    return MlTextfieldMod;
}());
exports.MlTextfieldMod = MlTextfieldMod;
