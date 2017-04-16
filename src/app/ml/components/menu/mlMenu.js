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
var mlButton_1 = require("../controls/button/mlButton");
var mlMenuLib_1 = require("./mlMenuLib");
var ml = require("../../lib/ml_lib");
var MlMenu = (function () {
    function MlMenu(ren) {
        this.ren = ren;
        this.icon = 'more_vert';
        this.className = {
            BOTTOM_LEFT: 'mdl-menu--bottom-left',
            BOTTOM_RIGHT: 'mdl-menu--bottom-right',
            TOP_LEFT: 'mdl-menu--top-left',
            TOP_RIGHT: 'mdl-menu--top-right',
        };
    }
    MlMenu.prototype.ngOnInit = function () {
        !this.id && (this.id = ml.randomStr());
        if (ml.isDefined(this.ripple)) {
            ml.setClass(this.mdlButton.host, 'mdl-js-ripple-effect', this.ren);
            ml.setClass(this.menuList, 'mdl-js-ripple-effect', this.ren);
        }
    };
    MlMenu.prototype.ngAfterViewInit = function () {
        if (this.position) {
            var positionClass = this.getMenuPosition(this.position);
            ml.setClass(this.menuList, positionClass, this.ren);
        }
        new mlMenuLib_1.default(this.menuList.nativeElement);
    };
    /**
     * Get menu position from @Input.position
     * @param position {string} Input Menu position relative to screen corners.
     * @returns {string} Class name defining position
     *
     * Allowed values: [top-left, top-right, bottom-left, bottom, right] (in lower case)
     */
    //todo: definir tipos de valores permitidos como en otros casos
    MlMenu.prototype.getMenuPosition = function (position) {
        // todo: class names are wrong?
        var mdlClassName = '';
        if (position === 'top-left') {
            mdlClassName = this.className.BOTTOM_LEFT;
        }
        if (position === 'top-right') {
            mdlClassName = this.className.BOTTOM_RIGHT;
        }
        if (position === 'bottom-left') {
            mdlClassName = this.className.TOP_LEFT;
        }
        if (position === 'bottom-right') {
            mdlClassName = this.className.TOP_RIGHT;
        }
        return mdlClassName;
    };
    __decorate([
        core_1.ViewChild('menuList'), 
        __metadata('design:type', core_1.ElementRef)
    ], MlMenu.prototype, "menuList", void 0);
    __decorate([
        core_1.ViewChild('mdlButton'), 
        __metadata('design:type', mlButton_1.MlButton)
    ], MlMenu.prototype, "mdlButton", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlMenu.prototype, "icon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlMenu.prototype, "position", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlMenu.prototype, "ripple", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlMenu.prototype, "id", void 0);
    MlMenu = __decorate([
        core_1.Component({
            selector: 'ml-menu',
            moduleId: module.id,
            styleUrls: ['./mlMenu.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            template: "\n\n<ml-button #mdlButton [attr.id]=\"id\" variant=\"icon\"><ml-icon>{{icon}}</ml-icon></ml-button>\n<ul class=\"mdl-menu\" [attr.for]=\"id\" #menuList>\n<ng-content select=\"ml-menu-item\"></ng-content>\n</ul>         \n\n" //template
        }), 
        __metadata('design:paramtypes', [core_1.Renderer])
    ], MlMenu);
    return MlMenu;
}());
exports.MlMenu = MlMenu;
// ---------------------------------------------------------------------------------------------------------------------
var MlMenuItem = (function () {
    function MlMenuItem(ren) {
        this.ren = ren;
    }
    MlMenuItem.prototype.ngOnInit = function () {
        ml.isDefined(this.divider) && ml.setClass(this.menuItem, 'mdl-menu__item--full-bleed-divider', this.ren);
        ml.isDefined(this.disabled) && ml.setAttribute(this.menuItem, 'disabled', '', this.ren);
    };
    __decorate([
        core_1.ViewChild('menuItem'), 
        __metadata('design:type', core_1.ElementRef)
    ], MlMenuItem.prototype, "menuItem", void 0);
    __decorate([
        core_1.Input('with-divider'), 
        __metadata('design:type', String)
    ], MlMenuItem.prototype, "divider", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlMenuItem.prototype, "disabled", void 0);
    MlMenuItem = __decorate([
        core_1.Component({
            selector: 'ml-menu-item',
            template: '<li class="mdl-menu__item" #menuItem><ng-content></ng-content></li>' }), 
        __metadata('design:paramtypes', [core_1.Renderer])
    ], MlMenuItem);
    return MlMenuItem;
}());
exports.MlMenuItem = MlMenuItem;
