// todo: menu items
// todo: revisar si usar o no componentHandler
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
var ml_button_1 = require("../controls/button/ml_button");
var mdl_menu_1 = require("./mdl_menu");
var ml = require("../../lib/ml_lib");
var MlMenuContainer = (function () {
    function MlMenuContainer(ren) {
        this.ren = ren;
        this.icon = 'more_vert';
        this.className = {
            BOTTOM_LEFT: 'mdl-menu--bottom-left',
            BOTTOM_RIGHT: 'mdl-menu--bottom-right',
            TOP_LEFT: 'mdl-menu--top-left',
            TOP_RIGHT: 'mdl-menu--top-right',
        };
    }
    MlMenuContainer.prototype.ngOnInit = function () {
        if (!this.id) {
            this.id = ml.randomStr();
        }
        if (this.ripple === '') {
            ml.setClass(this.mdlButton.host, 'mdl-js-ripple-effect', this.ren);
            ml.setClass(this.menuList, 'mdl-js-ripple-effect', this.ren);
        }
    };
    MlMenuContainer.prototype.ngAfterViewInit = function () {
        if (this.position) {
            var positionClass = this.getMenuPosition(this.position);
            ml.setClass(this.menuList, positionClass, this.ren);
        }
        new mdl_menu_1.default(this.menuList.nativeElement);
    };
    /**
     * Get menu position from input attribute POSITION.
     *
     * @param position {string} Input Menu position relative to screen corners.
     * @returns {string} Class name defining position
     *
     * Allowed values: [top-left, top-right, bottom-left, bottom, right] (in lower case)
     */
    MlMenuContainer.prototype.getMenuPosition = function (position) {
        // todo: class names are wrong?
        var mdlClassName = "";
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
    ], MlMenuContainer.prototype, "menuList", void 0);
    __decorate([
        core_1.ViewChild('mdlButton'), 
        __metadata('design:type', ml_button_1.MlButton)
    ], MlMenuContainer.prototype, "mdlButton", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlMenuContainer.prototype, "icon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlMenuContainer.prototype, "position", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlMenuContainer.prototype, "ripple", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlMenuContainer.prototype, "id", void 0);
    MlMenuContainer = __decorate([
        core_1.Component({
            selector: 'ml-menu',
            styleUrls: ['./ml_menu.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            moduleId: module.id.toString(),
            template: "\n\n<ml-button [attr.id]=\"id\" type=\"icon\" #mdlButton><ml-icon>{{icon}}</ml-icon></ml-button>\n\n<ul class=\"mdl-menu\" [attr.for]=\"id\" #menuList>\n  <ng-content select=\"ml-menu-item\"></ng-content>\n</ul>         \n\n" //template
        }), 
        __metadata('design:paramtypes', [core_1.Renderer])
    ], MlMenuContainer);
    return MlMenuContainer;
}());
exports.MlMenuContainer = MlMenuContainer;
// ---------------------------------------------------------------------------------------------------------------------
var MlMenuItem = (function () {
    function MlMenuItem(ren) {
        this.ren = ren;
    }
    MlMenuItem.prototype.ngOnInit = function () {
        if (this.divider === '') {
            ml.setClass(this.menuItem, 'mdl-menu__item--full-bleed-divider', this.ren);
        }
        if (this.disabled === '') {
            ml.setAttribute(this.menuItem, 'disabled', '', this.ren);
        }
    };
    __decorate([
        core_1.ViewChild('menuItem'), 
        __metadata('design:type', core_1.ElementRef)
    ], MlMenuItem.prototype, "menuItem", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlMenuItem.prototype, "divider", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlMenuItem.prototype, "disabled", void 0);
    MlMenuItem = __decorate([
        core_1.Component({
            selector: 'ml-menu-item',
            template: '<li class="mdl-menu__item" #menuItem><ng-content></ng-content></li>'
        }), 
        __metadata('design:paramtypes', [core_1.Renderer])
    ], MlMenuItem);
    return MlMenuItem;
}());
exports.MlMenuItem = MlMenuItem;
// ---------------------------------------------------------------------------------------------------------------------
exports.MlMenu = [MlMenuContainer, MlMenuItem];
//# sourceMappingURL=C:/Users/Yago/WebstormProjects/material-light/src/app/ml/components/menu/ml_menu.js.map