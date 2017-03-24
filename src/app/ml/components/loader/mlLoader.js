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
//todo: hacer componente MlLoaderProgressbar
//todo: habilitar opcion para incluir texto en loader
//todo: sustituir ml-loader por gif animado para mas rendimiento
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var MlLoader = (function () {
    function MlLoader(router) {
        this.router = router;
        this.isLoading = new core_1.EventEmitter();
        this.loading = true;
    }
    MlLoader.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                _this.loading = true;
                _this.isLoading.emit(_this.loading);
            }
            if (event instanceof router_1.NavigationEnd) {
                _this.loading = false;
                _this.isLoading.emit(_this.loading);
            }
            if (event instanceof router_1.NavigationCancel) {
                _this.loading = false;
                _this.isLoading.emit(_this.loading);
            }
            if (event instanceof router_1.NavigationError) {
                _this.loading = false;
                _this.isLoading.emit(_this.loading);
                console.error('MlLoader: navigation error');
            }
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MlLoader.prototype, "isLoading", void 0);
    MlLoader = __decorate([
        core_1.Component({
            selector: 'ml-loader',
            template: "\n<style>\n.loader-text{position: absolute; margin: auto; left: 0; right: 0; top: 37%; bottom: 0; text-align: center;\n  font-family: \"Roboto\",serif; font-size: 14px}\n.loader {position: absolute; margin: auto; left: 0; right: 0; top: 44%; text-align: center}\n</style>\n<div class=\"loader\" *ngIf=\"loading\">\n<ml-spinner class=\"loader\" single-color></ml-spinner>\n</div>\n" //template
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], MlLoader);
    return MlLoader;
}());
exports.MlLoader = MlLoader;
//# sourceMappingURL=mlLoader.js.map