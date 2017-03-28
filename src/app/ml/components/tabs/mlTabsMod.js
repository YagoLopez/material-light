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
var mlTabs_1 = require("./mlTabs");
var MlTabsMod = (function () {
    function MlTabsMod() {
    }
    MlTabsMod = __decorate([
        core_1.NgModule({ declarations: [mlTabs_1.MlTabs, mlTabs_1.MlTabsBar, mlTabs_1.MlTab, mlTabs_1.MlTabPanel, mlTabs_1.MlActive],
            exports: [mlTabs_1.MlTabs, mlTabs_1.MlTabsBar, mlTabs_1.MlTab, mlTabs_1.MlTabPanel, mlTabs_1.MlActive] }), 
        __metadata('design:paramtypes', [])
    ], MlTabsMod);
    return MlTabsMod;
}());
exports.MlTabsMod = MlTabsMod;
