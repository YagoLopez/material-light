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
var ml_table_1 = require("./ml_table");
var MlTableMod = (function () {
    function MlTableMod() {
    }
    MlTableMod = __decorate([
        core_1.NgModule({ declarations: [ml_table_1.MlTable, ml_table_1.MlTableTextCell], exports: [ml_table_1.MlTable, ml_table_1.MlTableTextCell] }), 
        __metadata('design:paramtypes', [])
    ], MlTableMod);
    return MlTableMod;
}());
exports.MlTableMod = MlTableMod;
//# sourceMappingURL=mlTableMod.js.map