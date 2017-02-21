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
var mlButtonMod_1 = require("../../ml/components/controls/button/mlButtonMod");
var mlSpinnerMod_1 = require("../../ml/components/spinner/mlSpinnerMod");
var pagSpinner_1 = require("./pagSpinner");
var PagSpinnerModule = (function () {
    function PagSpinnerModule() {
    }
    PagSpinnerModule = __decorate([
        core_1.NgModule({
            imports: [mlButtonMod_1.MlButtonMod, mlSpinnerMod_1.MlSpinnerMod, router_1.RouterModule.forChild([{ path: '', component: pagSpinner_1.PagSpinner }])],
            declarations: [pagSpinner_1.PagSpinner]
        }), 
        __metadata('design:paramtypes', [])
    ], PagSpinnerModule);
    return PagSpinnerModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PagSpinnerModule;
//# sourceMappingURL=pagSpinnerModule.js.map