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
var mlSelectfield_1 = require("./mlSelectfield");
var mlIconMod_1 = require("../../icon/mlIconMod");
var mlButtonMod_1 = require("../button/mlButtonMod");
var MlSelectfieldMod = (function () {
    function MlSelectfieldMod() {
    }
    MlSelectfieldMod = __decorate([
        core_1.NgModule({ imports: [mlIconMod_1.MlIconMod, mlButtonMod_1.MlButtonMod], declarations: [mlSelectfield_1.MlSelectfield, mlSelectfield_1.MlSelectfieldItem],
            exports: [mlSelectfield_1.MlSelectfield, mlSelectfield_1.MlSelectfieldItem] }), 
        __metadata('design:paramtypes', [])
    ], MlSelectfieldMod);
    return MlSelectfieldMod;
}());
exports.MlSelectfieldMod = MlSelectfieldMod;
