//todo: revisar el controlador
//todo: hacer componente MlRouterProgressbar
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
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var MlLoaderRouter = (function () {
    function MlLoaderRouter(router) {
        this.router = router;
        this.isLoading = new core_1.EventEmitter();
        this.loading = true;
    }
    MlLoaderRouter.prototype.ngOnInit = function () {
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
                console.error('MlLoaderRouter: navigation error');
            }
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MlLoaderRouter.prototype, "isLoading", void 0);
    MlLoaderRouter = __decorate([
        core_1.Component({
            selector: 'ml-loader-router',
            template: "\n<style>\n.router-loader-text{\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: 37%;\n  bottom: 0;\n  text-align: center;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 14px;}\n.router-loader {\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: 44%;\n  text-align: center;}\n</style>\n<div class=\"router-loader\">\n<ml-spinner *ngIf=\"loading\" class=\"router-loader\" single-color></ml-spinner>\n</div>\n" //template
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], MlLoaderRouter);
    return MlLoaderRouter;
}());
exports.MlLoaderRouter = MlLoaderRouter;
//# sourceMappingURL=mlLoaderRouter.js.map