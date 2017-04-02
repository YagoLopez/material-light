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
var MlTable = (function () {
    function MlTable(host, ren) {
        this.host = host;
        this.ren = ren;
    }
    MlTable.prototype.shadowClassName = function (shadowValue) {
        return "mdl-shadow--" + shadowValue + "dp";
    };
    MlTable.prototype.ngOnInit = function () {
        ml.setClass(this.host, this.shadowClassName(this.shadow), this.ren);
        ml.isDefined(this.selectable) && ml.setClass(this.host, 'mdl-data-table--selectable', this.ren);
        if (this.order === "asc") {
            ml.setClass(this.host, 'mdl-data-table__header--sorted-ascending', this.ren);
        }
        if (this.order === "desc") {
            ml.setClass(this.host, 'mdl-data-table__header--sorted-descending', this.ren);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlTable.prototype, "shadow", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlTable.prototype, "selectable", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlTable.prototype, "order", void 0);
    MlTable = __decorate([
        core_1.Component({
            selector: 'table.[ml-table]',
            styleUrls: ['./mlTable.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            host: { class: 'mdl-data-table' },
            template: '<ng-content></ng-content>',
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MlTable);
    return MlTable;
}());
exports.MlTable = MlTable;
// ---------------------------------------------------------------------------------------------------------------------
var MlTableTextCell = (function () {
    function MlTableTextCell() {
    }
    MlTableTextCell = __decorate([
        core_1.Directive({ selector: '[text-cell]', host: { class: 'mdl-data-table__cell--non-numeric' } }), 
        __metadata('design:paramtypes', [])
    ], MlTableTextCell);
    return MlTableTextCell;
}());
exports.MlTableTextCell = MlTableTextCell;
