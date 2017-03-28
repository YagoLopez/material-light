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
var mlMenuMod_1 = require("../../ml/components/menu/mlMenuMod");
var router_1 = require("@angular/router");
var viewSourceMod_1 = require("../view-source/viewSourceMod");
var pagMenu_1 = require("./pagMenu");
var PagMenuMod = (function () {
    function PagMenuMod() {
    }
    PagMenuMod = __decorate([
        core_1.NgModule({
            imports: [mlMenuMod_1.MlMenuMod, viewSourceMod_1.ViewSourceMod, router_1.RouterModule.forChild([{ path: '', component: pagMenu_1.PageMenu }])],
            declarations: [pagMenu_1.PageMenu] }), 
        __metadata('design:paramtypes', [])
    ], PagMenuMod);
    return PagMenuMod;
}());
exports.PagMenuMod = PagMenuMod;
