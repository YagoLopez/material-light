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
var ml = require("../../lib/ml_lib");
var MlBadge = (function () {
    function MlBadge(host, ren) {
        this.host = host;
        this.ren = ren;
        this.value = '0';
    }
    MlBadge.prototype.ngOnInit = function () {
        ml.setAttribute(this.host, 'data-badge', this.value, this.ren);
        ml.isDefined(this.background) && ml.setClass(this.host, 'mdl-badge--no-background', this.ren);
        ml.isDefined(this.overlap) && ml.setClass(this.host, 'mdl-badge--overlap', this.ren);
        if (ml.isDefined(this.icon)) {
            ml.setClass(this.host, 'material-icons', this.ren);
            ml.setClass(this.host, 'mdl-badge--overlap', this.ren);
            this.host.nativeElement.querySelector('ml-icon').className = 'mdl-badge-icon';
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlBadge.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlBadge.prototype, "background", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlBadge.prototype, "overlap", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlBadge.prototype, "icon", void 0);
    MlBadge = __decorate([
        core_1.Component({
            selector: 'ml-badge',
            moduleId: module.id,
            styleUrls: ['./mlBadge.css'],
            host: { class: 'mdl-badge' },
            encapsulation: core_1.ViewEncapsulation.None,
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MlBadge);
    return MlBadge;
}());
exports.MlBadge = MlBadge;
