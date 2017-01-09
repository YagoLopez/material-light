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
var ml = require("../../lib/ml_lib");
var MlGridContainer = (function () {
    function MlGridContainer(host, ren) {
        this.host = host;
        this.ren = ren;
    }
    MlGridContainer.prototype.ngOnInit = function () {
        if (this.noSpace === '')
            ml.setClass(this.host, 'mdl-grid--no-spacing', this.ren);
    };
    __decorate([
        core_1.Input('no-space'), 
        __metadata('design:type', String)
    ], MlGridContainer.prototype, "noSpace", void 0);
    MlGridContainer = __decorate([
        core_1.Component({
            selector: 'ml-grid',
            moduleId: module.id.toString(),
            styleUrls: ['./ml_grid.css'],
            host: { class: 'mdl-grid' },
            encapsulation: core_1.ViewEncapsulation.None,
            template: "\n\n<ng-content></ng-content>\n\n" //template
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MlGridContainer);
    return MlGridContainer;
}());
exports.MlGridContainer = MlGridContainer;
// ---------------------------------------------------------------------------------------------------------------------
var MlCell = (function () {
    function MlCell(host, ren) {
        this.host = host;
        this.ren = ren;
    }
    MlCell.prototype.ngOnInit = function () {
        var widthClass = 'mdl-cell--' + this.width + '-col';
        var phoneWidthClass = 'mdl-cell--' + this.phoneWith + '-col-phone';
        var tabletWidthClass = 'mdl-cell--' + this.tabletWidth + '-col-tablet';
        var desktopWidthClass = 'mdl-cell--' + this.desktopWidth + '-col-desktop';
        var host = this.host;
        if (this.width)
            ml.setClass(host, widthClass, this.ren);
        if (this.phoneWith)
            ml.setClass(host, phoneWidthClass, this.ren);
        if (this.tabletWidth)
            ml.setClass(host, tabletWidthClass, this.ren);
        if (this.desktopWidth)
            ml.setClass(host, desktopWidthClass, this.ren);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlCell.prototype, "width", void 0);
    __decorate([
        core_1.Input('phone-width'), 
        __metadata('design:type', String)
    ], MlCell.prototype, "phoneWith", void 0);
    __decorate([
        core_1.Input('tablet-width'), 
        __metadata('design:type', String)
    ], MlCell.prototype, "tabletWidth", void 0);
    __decorate([
        core_1.Input('desktop-width'), 
        __metadata('design:type', String)
    ], MlCell.prototype, "desktopWidth", void 0);
    MlCell = __decorate([
        core_1.Component({
            selector: 'ml-cell',
            host: { class: 'mdl-cell' },
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MlCell);
    return MlCell;
}());
exports.MlCell = MlCell;
exports.MlGrid = [MlGridContainer, MlCell];
//# sourceMappingURL=C:/Users/Yago/WebstormProjects/material-light/src/app/ml/components/grid/ml_grid.js.map