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
//todo: sustituir ml-page-loader por gif animado para mas rendimiento
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var MlPageLoader = (function () {
    function MlPageLoader(router) {
        this.router = router;
        this.onLoading = new core_1.EventEmitter();
        this.isLoading = true;
    }
    MlPageLoader.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                _this.isLoading = true;
                _this.onLoading.emit(_this.isLoading);
            }
            if (event instanceof router_1.NavigationEnd) {
                _this.isLoading = false;
                _this.onLoading.emit(_this.isLoading);
            }
            if (event instanceof router_1.NavigationCancel) {
                _this.isLoading = false;
                _this.onLoading.emit(_this.isLoading);
            }
            if (event instanceof router_1.NavigationError) {
                _this.divLoader.nativeElement.remove();
                console.error('MlPageLoader: navigation error');
            }
        });
    };
    __decorate([
        core_1.ViewChild('divLoader'), 
        __metadata('design:type', core_1.ElementRef)
    ], MlPageLoader.prototype, "divLoader", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MlPageLoader.prototype, "onLoading", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlPageLoader.prototype, "spinner", void 0);
    MlPageLoader = __decorate([
        core_1.Component({
            selector: 'ml-page-loader',
            template: "\n<div #divLoader *ngIf=\"isLoading\" style=\"position:absolute;width:95%;top:40%;text-align:center\">\n<ml-spinner *ngIf=\"spinner === ''\" single-color></ml-spinner>\n<div><ng-content></ng-content></div>\n</div>\n" //template
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], MlPageLoader);
    return MlPageLoader;
}());
exports.MlPageLoader = MlPageLoader;
