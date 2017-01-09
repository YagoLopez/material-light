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
var MdlListContainer = (function () {
    function MdlListContainer(componentElm) {
        this.componentElm = componentElm;
    }
    MdlListContainer.prototype.ngOnInit = function () {
        //todo: revisar esto bien
        var componentClasses = this.componentElm.nativeElement.className;
        this.ulElement.nativeElement.className += ' ' + componentClasses;
    };
    __decorate([
        core_1.ViewChild('ulElement'), 
        __metadata('design:type', core_1.ElementRef)
    ], MdlListContainer.prototype, "ulElement", void 0);
    MdlListContainer = __decorate([
        core_1.Component({
            selector: 'mdl-list',
            encapsulation: core_1.ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            moduleId: module.id.toString(),
            styleUrls: ['./ml_list.css'],
            template: '<ul class="mdl-list" #ulElement><ng-content></ng-content></ul>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MdlListContainer);
    return MdlListContainer;
}());
exports.MdlListContainer = MdlListContainer;
// ---------------------------------------------------------------------------------------------------------------------
var MdlItem = (function () {
    function MdlItem(ren) {
        this.ren = ren;
        this.lines = '';
    }
    MdlItem.prototype.ngOnInit = function () {
        if (this.lines === '2')
            ml.setClass(this.liElement, 'mdl-list__item--two-line', this.ren);
        if (this.lines === '3')
            ml.setClass(this.liElement, 'mdl-list__item--three-line', this.ren);
    };
    __decorate([
        core_1.ViewChild('liElement'), 
        __metadata('design:type', core_1.ElementRef)
    ], MdlItem.prototype, "liElement", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdlItem.prototype, "lines", void 0);
    MdlItem = __decorate([
        core_1.Component({
            selector: 'mdl-item',
            moduleId: module.id.toString(),
            template: '<li class="mdl-list__item" #liElement><ng-content></ng-content></li>'
        }), 
        __metadata('design:paramtypes', [core_1.Renderer])
    ], MdlItem);
    return MdlItem;
}());
exports.MdlItem = MdlItem;
// ---------------------------------------------------------------------------------------------------------------------
var MdlItemContent = (function () {
    function MdlItemContent() {
    }
    MdlItemContent = __decorate([
        core_1.Component({
            selector: 'mdl-item-content',
            host: { class: 'mdl-list__item-primary-content' },
            template: '<span class="mdl-list__item-primary-content"><ng-content></ng-content></span>'
        }), 
        __metadata('design:paramtypes', [])
    ], MdlItemContent);
    return MdlItemContent;
}());
exports.MdlItemContent = MdlItemContent;
// ---------------------------------------------------------------------------------------------------------------------
var MdlItemAction = (function () {
    function MdlItemAction() {
    }
    MdlItemAction = __decorate([
        core_1.Component({
            selector: 'mdl-item-action',
            host: { class: 'mdl-list__item-secondary-action' },
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [])
    ], MdlItemAction);
    return MdlItemAction;
}());
exports.MdlItemAction = MdlItemAction;
// ---------------------------------------------------------------------------------------------------------------------
var MdlItemIcon = (function () {
    function MdlItemIcon(ren) {
        this.ren = ren;
    }
    MdlItemIcon.prototype.ngOnInit = function () {
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
    ], MdlItemIcon.prototype, "icon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdlItemIcon.prototype, "type", void 0);
    MdlItemIcon = __decorate([
        core_1.Component({
            selector: 'mdl-item-icon',
            template: '<i class="material-icons" #icon><ng-content></ng-content></i>'
        }), 
        __metadata('design:paramtypes', [core_1.Renderer])
    ], MdlItemIcon);
    return MdlItemIcon;
}());
exports.MdlItemIcon = MdlItemIcon;
// ---------------------------------------------------------------------------------------------------------------------
var MdlItemTitle = (function () {
    function MdlItemTitle() {
    }
    MdlItemTitle = __decorate([
        core_1.Component({
            selector: 'mdl-item-title',
            template: '<span><ng-content></ng-content></span>'
        }), 
        __metadata('design:paramtypes', [])
    ], MdlItemTitle);
    return MdlItemTitle;
}());
exports.MdlItemTitle = MdlItemTitle;
// ---------------------------------------------------------------------------------------------------------------------
var MdlItemSubtitle = (function () {
    function MdlItemSubtitle() {
    }
    MdlItemSubtitle = __decorate([
        core_1.Component({
            selector: 'mdl-item-subtitle',
            template: '<span class="mdl-list__item-sub-title"><ng-content></ng-content></span>'
        }), 
        __metadata('design:paramtypes', [])
    ], MdlItemSubtitle);
    return MdlItemSubtitle;
}());
exports.MdlItemSubtitle = MdlItemSubtitle;
// ---------------------------------------------------------------------------------------------------------------------
var MdlItemDesc = (function () {
    function MdlItemDesc() {
    }
    MdlItemDesc = __decorate([
        core_1.Component({
            selector: 'mdl-item-desc',
            template: '<span class="mdl-list__item-text-body"><ng-content></ng-content></span>'
        }), 
        __metadata('design:paramtypes', [])
    ], MdlItemDesc);
    return MdlItemDesc;
}());
exports.MdlItemDesc = MdlItemDesc;
// ---------------------------------------------------------------------------------------------------------------------
exports.MlList = [
    MdlListContainer,
    MdlItem,
    MdlItemContent,
    MdlItemAction,
    MdlItemIcon,
    MdlItemTitle,
    MdlItemSubtitle,
    MdlItemDesc
];
//# sourceMappingURL=ml_list.js.map