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
var mlChip_1 = require("./mlChip");
var mlChipButton_1 = require("./mlChipButton");
var common_1 = require("@angular/common");
var MlChipMod = (function () {
    function MlChipMod() {
    }
    MlChipMod = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule], declarations: [mlChip_1.MlChip, mlChipButton_1.MlChipButton], exports: [mlChip_1.MlChip, mlChipButton_1.MlChipButton] }), 
        __metadata('design:paramtypes', [])
    ], MlChipMod);
    return MlChipMod;
}());
exports.MlChipMod = MlChipMod;
