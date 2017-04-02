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
// ---------------------------------------------------------------------------------------------------------------------
var MlList = (function () {
    function MlList(componentElm) {
        this.componentElm = componentElm;
    }
    MlList.prototype.ngOnInit = function () {
        //todo: revisar esto bien
        var componentClasses = this.componentElm.nativeElement.className;
        this.ulElement.nativeElement.className += ' ' + componentClasses;
    };
    __decorate([
        core_1.ViewChild('ulElement'), 
        __metadata('design:type', core_1.ElementRef)
    ], MlList.prototype, "ulElement", void 0);
    MlList = __decorate([
        core_1.Component({
            selector: 'ml-list',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['./mlList.css'],
            template: '<ul class="mdl-list" #ulElement><ng-content></ng-content></ul>',
            moduleId: module.id }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MlList);
    return MlList;
}());
exports.MlList = MlList;
// ---------------------------------------------------------------------------------------------------------------------
var MlItem = (function () {
    function MlItem(ren) {
        this.ren = ren;
        this.lines = '';
    }
    MlItem.prototype.ngOnInit = function () {
        if (this.lines === '2') {
            ml.setClass(this.liElement, 'mdl-list__item--two-line', this.ren);
        }
        if (this.lines === '3') {
            ml.setClass(this.liElement, 'mdl-list__item--three-line', this.ren);
        }
    };
    __decorate([
        core_1.ViewChild('liElement'), 
        __metadata('design:type', core_1.ElementRef)
    ], MlItem.prototype, "liElement", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlItem.prototype, "lines", void 0);
    MlItem = __decorate([
        core_1.Component({
            selector: 'ml-item',
            template: '<li class="mdl-list__item" #liElement><ng-content></ng-content></li>', }), 
        __metadata('design:paramtypes', [core_1.Renderer])
    ], MlItem);
    return MlItem;
}());
exports.MlItem = MlItem;
// ---------------------------------------------------------------------------------------------------------------------
var MlItemContent = (function () {
    function MlItemContent() {
    }
    MlItemContent = __decorate([
        core_1.Component({
            selector: 'ml-item-content',
            host: { class: 'mdl-list__item-primary-content' },
            template: '<span class="mdl-list__item-primary-content"><ng-content></ng-content></span>' }), 
        __metadata('design:paramtypes', [])
    ], MlItemContent);
    return MlItemContent;
}());
exports.MlItemContent = MlItemContent;
// ---------------------------------------------------------------------------------------------------------------------
var MlItemAction = (function () {
    function MlItemAction() {
    }
    MlItemAction = __decorate([
        core_1.Component({
            selector: 'ml-item-action',
            host: { class: 'mdl-list__item-secondary-action' },
            template: '<ng-content></ng-content>' }), 
        __metadata('design:paramtypes', [])
    ], MlItemAction);
    return MlItemAction;
}());
exports.MlItemAction = MlItemAction;
// ---------------------------------------------------------------------------------------------------------------------
var MlItemIcon = (function () {
    function MlItemIcon(ren) {
        this.ren = ren;
    }
    MlItemIcon.prototype.ngOnInit = function () {
        if (this.type === 'avatar') {
            ml.setClass(this.icon, 'mdl-list__item-avatar', this.ren);
        }
        if (this.type === 'normal') {
            ml.setClass(this.icon, 'mdl-list__item-icon', this.ren);
        }
    };
    __decorate([
        core_1.ViewChild('icon'), 
        __metadata('design:type', core_1.ElementRef)
    ], MlItemIcon.prototype, "icon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlItemIcon.prototype, "type", void 0);
    MlItemIcon = __decorate([
        core_1.Component({
            selector: 'ml-item-icon',
            template: '<i class="material-icons" #icon><ng-content></ng-content></i>' }), 
        __metadata('design:paramtypes', [core_1.Renderer])
    ], MlItemIcon);
    return MlItemIcon;
}());
exports.MlItemIcon = MlItemIcon;
// ---------------------------------------------------------------------------------------------------------------------
var MlItemTitle = (function () {
    function MlItemTitle() {
    }
    MlItemTitle = __decorate([
        core_1.Component({ selector: 'ml-item-title', template: '<span><ng-content></ng-content></span>' }), 
        __metadata('design:paramtypes', [])
    ], MlItemTitle);
    return MlItemTitle;
}());
exports.MlItemTitle = MlItemTitle;
// ---------------------------------------------------------------------------------------------------------------------
var MlItemSubtitle = (function () {
    function MlItemSubtitle() {
    }
    MlItemSubtitle = __decorate([
        core_1.Component({ selector: 'ml-item-subtitle',
            template: '<span class="mdl-list__item-sub-title"><ng-content></ng-content></span>' }), 
        __metadata('design:paramtypes', [])
    ], MlItemSubtitle);
    return MlItemSubtitle;
}());
exports.MlItemSubtitle = MlItemSubtitle;
// ---------------------------------------------------------------------------------------------------------------------
var MlItemDesc = (function () {
    function MlItemDesc() {
    }
    MlItemDesc = __decorate([
        core_1.Component({ selector: 'ml-item-desc',
            template: '<span class="mdl-list__item-text-body"><ng-content></ng-content></span>' }), 
        __metadata('design:paramtypes', [])
    ], MlItemDesc);
    return MlItemDesc;
}());
exports.MlItemDesc = MlItemDesc;
// ---------------------------------------------------------------------------------------------------------------------
