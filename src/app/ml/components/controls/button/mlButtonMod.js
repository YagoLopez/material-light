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
var mlRippleMod_1 = require("../../ripple/mlRippleMod");
var mlIconMod_1 = require("../../icon/mlIconMod");
var mlButton_1 = require("./mlButton");
var mlButtonSubmit_1 = require("./mlButtonSubmit");
var MlButtonMod = (function () {
    function MlButtonMod() {
    }
    MlButtonMod = __decorate([
        core_1.NgModule({
            imports: [mlRippleMod_1.MlRippleMod, mlIconMod_1.MlIconMod],
            declarations: [mlButton_1.MlButton, mlButtonSubmit_1.MlButtonSubmit],
            exports: [mlRippleMod_1.MlRippleMod, mlIconMod_1.MlIconMod, mlButton_1.MlButton, mlButtonSubmit_1.MlButtonSubmit] }), 
        __metadata('design:paramtypes', [])
    ], MlButtonMod);
    return MlButtonMod;
}());
exports.MlButtonMod = MlButtonMod;
