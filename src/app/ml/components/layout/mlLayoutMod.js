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
var mlTitleMod_1 = require("../title/mlTitleMod");
var mlLayout_1 = require("./mlLayout");
var MlLayoutMod = (function () {
    function MlLayoutMod() {
    }
    MlLayoutMod = __decorate([
        core_1.NgModule({
            declarations: [mlLayout_1.MlLayout, mlLayout_1.MlHeader, mlLayout_1.MlHeaderRow, mlLayout_1.MlDrawer, mlLayout_1.MlSpacer, mlLayout_1.MlNav, mlLayout_1.MlNavItem, mlLayout_1.MlLargeScreenOnly,
                mlLayout_1.MlSmallScreenOnly, mlLayout_1.MlContent, mlLayout_1.MlHeaderTabs, mlLayout_1.MlHeaderTab, mlLayout_1.MlHeaderTabContent, mlLayout_1.MlHeaderTabActive],
            exports: [mlTitleMod_1.MlTitleMod, mlLayout_1.MlLayout, mlLayout_1.MlHeader, mlLayout_1.MlHeaderRow, mlLayout_1.MlDrawer, mlLayout_1.MlSpacer, mlLayout_1.MlNav, mlLayout_1.MlNavItem, mlLayout_1.MlLargeScreenOnly,
                mlLayout_1.MlSmallScreenOnly, mlLayout_1.MlContent, mlLayout_1.MlHeaderTabs, mlLayout_1.MlHeaderTab, mlLayout_1.MlHeaderTabContent, mlLayout_1.MlHeaderTabActive] }), 
        __metadata('design:paramtypes', [])
    ], MlLayoutMod);
    return MlLayoutMod;
}());
exports.MlLayoutMod = MlLayoutMod;
