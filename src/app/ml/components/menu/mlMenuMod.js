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
var mlIconMod_1 = require("../icon/mlIconMod");
var mlButtonMod_1 = require("../controls/button/mlButtonMod");
var ml_menu_1 = require("./ml_menu");
var MlMenuMod = (function () {
    function MlMenuMod() {
    }
    MlMenuMod = __decorate([
        core_1.NgModule({
            imports: [mlIconMod_1.MlIconMod, mlButtonMod_1.MlButtonMod],
            declarations: [ml_menu_1.MlMenu, ml_menu_1.MlMenuItem],
            exports: [ml_menu_1.MlMenu, ml_menu_1.MlMenuItem]
        }), 
        __metadata('design:paramtypes', [])
    ], MlMenuMod);
    return MlMenuMod;
}());
exports.MlMenuMod = MlMenuMod;
//# sourceMappingURL=mlMenuMod.js.map