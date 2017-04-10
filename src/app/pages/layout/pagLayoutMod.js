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
var viewSourceMod_1 = require("../view-source/viewSourceMod");
var mlRadioMod_1 = require("../../ml/components/controls/radio/mlRadioMod");
var pagLayout_1 = require("./pagLayout");
var PagLayoutMod = (function () {
    function PagLayoutMod() {
    }
    PagLayoutMod = __decorate([
        core_1.NgModule({ imports: [mlRadioMod_1.MlRadioMod, viewSourceMod_1.ViewSourceMod, router_1.RouterModule.forChild([{ path: '', component: pagLayout_1.PagLayout }])],
            declarations: [pagLayout_1.PagLayout] }), 
        __metadata('design:paramtypes', [])
    ], PagLayoutMod);
    return PagLayoutMod;
}());
exports.PagLayoutMod = PagLayoutMod;
