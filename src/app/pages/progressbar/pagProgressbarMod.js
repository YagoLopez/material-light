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
var mlPgrogressbarMod_1 = require("../../ml/components/progressbar/mlPgrogressbarMod");
var viewSourceMod_1 = require("../view-source/viewSourceMod");
var pagProgressbar_1 = require("./pagProgressbar");
var PagProgressbarMod = (function () {
    function PagProgressbarMod() {
    }
    PagProgressbarMod = __decorate([
        core_1.NgModule({
            imports: [mlButtonMod_1.MlButtonMod, mlPgrogressbarMod_1.MlProgressbarMod, viewSourceMod_1.ViewSourceMod, router_1.RouterModule.forChild([{ path: '', component: pagProgressbar_1.PagProgressar }])],
            declarations: [pagProgressbar_1.PagProgressar] }), 
        __metadata('design:paramtypes', [])
    ], PagProgressbarMod);
    return PagProgressbarMod;
}());
exports.PagProgressbarMod = PagProgressbarMod;
