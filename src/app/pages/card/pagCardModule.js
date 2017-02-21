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
var mlCardMod_1 = require("../../ml/components/card/mlCardMod");
var pagCard_1 = require("./pagCard");
var PagCardModule = (function () {
    function PagCardModule() {
    }
    PagCardModule = __decorate([
        core_1.NgModule({
            imports: [mlCardMod_1.MlCardMod, router_1.RouterModule.forChild([{ path: '', component: pagCard_1.PagCard }])],
            declarations: [pagCard_1.PagCard],
        }), 
        __metadata('design:paramtypes', [])
    ], PagCardModule);
    return PagCardModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PagCardModule;
//# sourceMappingURL=pagCardModule.js.map