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
var mlButtonMod_1 = require("../../ml/components/controls/button/mlButtonMod");
var router_1 = require("@angular/router");
var viewSourceMod_1 = require("../view-source/viewSourceMod");
var pagButton_1 = require("./pagButton");
var PagButtonModule = (function () {
    function PagButtonModule() {
    }
    PagButtonModule = __decorate([
        core_1.NgModule({
            imports: [mlButtonMod_1.MlButtonMod, viewSourceMod_1.ViewSourceMod, router_1.RouterModule.forChild([{ path: '', component: pagButton_1.PagButton }])],
            declarations: [pagButton_1.PagButton] }), 
        __metadata('design:paramtypes', [])
    ], PagButtonModule);
    return PagButtonModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PagButtonModule;
//# sourceMappingURL=pagButtonModule.js.map