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
var mlTableMod_1 = require("../../ml/components/table/mlTableMod");
var router_1 = require("@angular/router");
var viewSourceMod_1 = require("../view-source/viewSourceMod");
var pagTable_1 = require("./pagTable");
var PagTableModule = (function () {
    function PagTableModule() {
    }
    PagTableModule = __decorate([
        core_1.NgModule({
            imports: [mlTableMod_1.MlTableMod, viewSourceMod_1.ViewSourceMod, router_1.RouterModule.forChild([{ path: '', component: pagTable_1.PagTable }])],
            declarations: [pagTable_1.PagTable] }), 
        __metadata('design:paramtypes', [])
    ], PagTableModule);
    return PagTableModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PagTableModule;
//# sourceMappingURL=pagTableModule.js.map