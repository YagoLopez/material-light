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
var mlDialogMod_1 = require("../../ml/components/dialog/mlDialogMod");
var viewSourceMod_1 = require("../view-source/viewSourceMod");
var pagDialog_1 = require("./pagDialog");
var PagDialogModule = (function () {
    function PagDialogModule() {
    }
    PagDialogModule = __decorate([
        core_1.NgModule({ imports: [mlDialogMod_1.MlDialogMod, viewSourceMod_1.ViewSourceMod, router_1.RouterModule.forChild([{ path: '', component: pagDialog_1.PagDialog }])],
            declarations: [pagDialog_1.PagDialog] }), 
        __metadata('design:paramtypes', [])
    ], PagDialogModule);
    return PagDialogModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PagDialogModule;
//# sourceMappingURL=pagDialogModule.js.map