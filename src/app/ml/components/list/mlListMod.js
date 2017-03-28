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
var mlRippleMod_1 = require("../ripple/mlRippleMod");
var mlIconMod_1 = require("../icon/mlIconMod");
var mlList_1 = require("./mlList");
var MlListMod = (function () {
    function MlListMod() {
    }
    MlListMod = __decorate([
        core_1.NgModule({
            imports: [mlRippleMod_1.MlRippleMod, mlIconMod_1.MlIconMod],
            declarations: [mlList_1.MlList, mlList_1.MlItem, mlList_1.MlItemContent, mlList_1.MlItemAction, mlList_1.MlItemIcon, mlList_1.MlItemTitle, mlList_1.MlItemSubtitle, mlList_1.MlItemDesc],
            exports: [mlRippleMod_1.MlRippleMod, mlIconMod_1.MlIconMod, mlList_1.MlList, mlList_1.MlItem, mlList_1.MlItemContent, mlList_1.MlItemAction, mlList_1.MlItemIcon, mlList_1.MlItemTitle,
                mlList_1.MlItemSubtitle, mlList_1.MlItemDesc] }), 
        __metadata('design:paramtypes', [])
    ], MlListMod);
    return MlListMod;
}());
exports.MlListMod = MlListMod;
