//todo: ripple effect doesnt work on checkboxes
//todo: quizas se pueda evitar la repeticion de codigo usando herencia (sobre todo con los constructores repetidos)
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
var ml = require('../../lib/ml_lib');
// ---------------------------------------------------------------------------------------------------------------------
var MlTableContainer = (function () {
    function MlTableContainer(host, ren) {
        this.host = host;
        this.ren = ren;
    }
    MlTableContainer.prototype.shadowClassName = function (shadowValue) {
        return 'mdl-shadow--' + shadowValue + 'dp';
    };
    MlTableContainer.prototype.ngOnInit = function () {
        ml.setClass(this.host, this.shadowClassName(this.shadow), this.ren);
        if (this.selectable === "")
            ml.setClass(this.host, 'mdl-data-table--selectable', this.ren);
        if (this.order === "asc")
            ml.setClass(this.host, 'mdl-data-table__header--sorted-ascending', this.ren);
        if (this.order === "desc")
            ml.setClass(this.host, 'mdl-data-table__header--sorted-descending', this.ren);
        // new MaterialDataTable(this.host.nativeElement);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlTableContainer.prototype, "shadow", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlTableContainer.prototype, "selectable", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlTableContainer.prototype, "order", void 0);
    MlTableContainer = __decorate([
        core_1.Component({
            selector: 'table.[ml-table]',
            styleUrls: ['./ml_table.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            moduleId: module.id.toString(),
            host: { class: 'mdl-data-table' },
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MlTableContainer);
    return MlTableContainer;
}());
exports.MlTableContainer = MlTableContainer;
// ---------------------------------------------------------------------------------------------------------------------
var MlTableAlphanumericCell = (function () {
    function MlTableAlphanumericCell() {
    }
    MlTableAlphanumericCell = __decorate([
        core_1.Directive({
            selector: '[alphanumeric]',
            host: { class: 'mdl-data-table__cell--non-numeric' }
        }), 
        __metadata('design:paramtypes', [])
    ], MlTableAlphanumericCell);
    return MlTableAlphanumericCell;
}());
exports.MlTableAlphanumericCell = MlTableAlphanumericCell;
// ---------------------------------------------------------------------------------------------------------------------
exports.MlTable = [MlTableContainer, MlTableAlphanumericCell];
//# sourceMappingURL=C:/Users/Yago/WebstormProjects/material-light/src/app/ml/components/table/ml_table.js.map