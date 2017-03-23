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
var mlIconMod_1 = require("../../ml/components/icon/mlIconMod");
var mlButtonMod_1 = require("../../ml/components/controls/button/mlButtonMod");
var mlValidationErrorMod_1 = require("../../ml/components/controls/error/mlValidationErrorMod");
var debugFormMod_1 = require("../../ml/lib/debug_form/debugFormMod");
var mlTextfieldMod_1 = require("../../ml/components/controls/textfield/mlTextfieldMod");
var viewSourceMod_1 = require("../view-source/viewSourceMod");
var pagTextfield2_1 = require("./pagTextfield2");
var PagTextfieldModule = (function () {
    function PagTextfieldModule() {
    }
    PagTextfieldModule = __decorate([
        core_1.NgModule({
            imports: [mlIconMod_1.MlIconMod, mlValidationErrorMod_1.MlValidationErrorMod, mlButtonMod_1.MlButtonMod, debugFormMod_1.DebugFormMod, forms_1.FormsModule, forms_1.ReactiveFormsModule, mlTextfieldMod_1.MlTextfieldMod,
                viewSourceMod_1.ViewSourceMod, router_1.RouterModule.forChild([{ path: '', component: pagTextfield2_1.PagTextfield }])],
            declarations: [pagTextfield2_1.PagTextfield] }), 
        __metadata('design:paramtypes', [])
    ], PagTextfieldModule);
    return PagTextfieldModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PagTextfieldModule;
//# sourceMappingURL=pagTextfieldModule2.js.map