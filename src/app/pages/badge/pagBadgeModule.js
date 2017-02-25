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
var mlBadgeMod_1 = require("../../ml/components/badge/mlBadgeMod");
var pagBadge_1 = require("./pagBadge");
var PagBadgeModule = (function () {
    function PagBadgeModule() {
    }
    PagBadgeModule = __decorate([
        core_1.NgModule({ imports: [mlBadgeMod_1.MlBadgeMod, router_1.RouterModule.forChild([{ path: '', component: pagBadge_1.PagBadge }])],
            declarations: [pagBadge_1.PagBadge] }), 
        __metadata('design:paramtypes', [])
    ], PagBadgeModule);
    return PagBadgeModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PagBadgeModule;
//# sourceMappingURL=pagBadgeModule.js.map