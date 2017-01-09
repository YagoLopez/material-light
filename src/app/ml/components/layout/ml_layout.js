//todo: poder definir colores, temas, fuentes, etc
//todo: hacer de ml un modulo en vez de un namespace para poder importar funciones individuales
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
var mdl_layout_1 = require("./mdl_layout");
var ml = require("../../lib/ml_lib");
// ---------------------------------------------------------------------------------------------------------------------
var MlLayoutContainer = (function () {
    function MlLayoutContainer(host, ren) {
        this.host = host;
        this.ren = ren;
    }
    MlLayoutContainer.prototype.hideDrawer = function () {
        this.mdlLayout.drawer_.classList.remove('is-visible');
        this.mdlLayout.obfuscator_.classList.remove('is-visible');
    };
    MlLayoutContainer.prototype.ngAfterViewInit = function () {
        if (this.drawer === 'fixed')
            ml.setClass(this.host, 'mdl-layout--fixed-drawer', this.ren);
        if (this.tabs === 'fixed') {
            ml.setClass(this.host, 'mdl-layout--fixed-header', this.ren);
            ml.setClass(this.host, 'mdl-layout--fixed-tabs', this.ren);
        }
        this.mdlLayout = new mdl_layout_1.default(this.host.nativeElement);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlLayoutContainer.prototype, "drawer", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlLayoutContainer.prototype, "tabs", void 0);
    MlLayoutContainer = __decorate([
        core_1.Component({
            selector: 'ml-layout',
            moduleId: module.id.toString(),
            styleUrls: ['./ml_layout.css', './fonts.css', './ml_ripple.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            host: { class: 'mdl-layout' },
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MlLayoutContainer);
    return MlLayoutContainer;
}());
exports.MlLayoutContainer = MlLayoutContainer;
// ---------------------------------------------------------------------------------------------------------------------
var MlHeader = (function () {
    function MlHeader(host, ren) {
        this.host = host;
        this.ren = ren;
    }
    MlHeader.prototype.ngOnInit = function () {
        if (this.seamed === '')
            ml.setClass(this.host, 'mdl-layout__header--seamed', this.ren);
        if (this.transparent === '')
            ml.setClass(this.host, 'mdl-layout__header--transparent', this.ren);
        if (this.waterfall === '')
            ml.setClass(this.host, 'mdl-layout__header--waterfall', this.ren);
        if (this.waterfall === 'hide-top') {
            ml.setClass(this.host, 'mdl-layout__header--waterfall', this.ren);
            ml.setClass(this.host, 'mdl-layout__header--waterfall-hide-top', this.ren);
        }
        // todo: Header scroll doesnt work
        // ml.setClass(this.host,'mdl-layout__header--scroll', this.ren);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlHeader.prototype, "waterfall", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlHeader.prototype, "transparent", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlHeader.prototype, "seamed", void 0);
    MlHeader = __decorate([
        core_1.Component({
            selector: 'ml-header',
            host: { class: 'mdl-layout__header' },
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MlHeader);
    return MlHeader;
}());
exports.MlHeader = MlHeader;
// ---------------------------------------------------------------------------------------------------------------------
var MlHeaderRow = (function () {
    function MlHeaderRow() {
    }
    MlHeaderRow = __decorate([
        core_1.Component({
            selector: 'ml-header-row',
            host: { class: 'mdl-layout__header-row' },
            template: '<ng-content></ng-content>' }), 
        __metadata('design:paramtypes', [])
    ], MlHeaderRow);
    return MlHeaderRow;
}());
exports.MlHeaderRow = MlHeaderRow;
// ---------------------------------------------------------------------------------------------------------------------
var MlSpacer = (function () {
    function MlSpacer() {
    }
    MlSpacer = __decorate([
        core_1.Component({
            selector: 'ml-spacer', template: '',
            styles: ['.mdl-layout-spacer {-webkit-flex-grow: 1; -ms-flex-positive: 1; flex-grow: 1;}'],
            encapsulation: core_1.ViewEncapsulation.None,
            host: { class: 'mdl-layout-spacer' } }), 
        __metadata('design:paramtypes', [])
    ], MlSpacer);
    return MlSpacer;
}());
exports.MlSpacer = MlSpacer;
// ---------------------------------------------------------------------------------------------------------------------
var MlNav = (function () {
    function MlNav() {
    }
    MlNav = __decorate([
        core_1.Component({
            selector: 'ml-nav',
            host: { class: 'mdl-navigation' },
            template: '<ng-content></ng-content>' }), 
        __metadata('design:paramtypes', [])
    ], MlNav);
    return MlNav;
}());
exports.MlNav = MlNav;
// ---------------------------------------------------------------------------------------------------------------------
var MlLargeScreenOnly = (function () {
    function MlLargeScreenOnly() {
    }
    MlLargeScreenOnly = __decorate([
        core_1.Directive({
            selector: '[large-screen-only]',
            host: { class: 'mdl-layout--large-screen-only' } }), 
        __metadata('design:paramtypes', [])
    ], MlLargeScreenOnly);
    return MlLargeScreenOnly;
}());
exports.MlLargeScreenOnly = MlLargeScreenOnly;
// ---------------------------------------------------------------------------------------------------------------------
var MlSmallScreenOnly = (function () {
    function MlSmallScreenOnly() {
    }
    MlSmallScreenOnly = __decorate([
        core_1.Directive({
            selector: '[small-screen-only]',
            host: { class: 'mdl-layout--small-screen-ongly' } }), 
        __metadata('design:paramtypes', [])
    ], MlSmallScreenOnly);
    return MlSmallScreenOnly;
}());
exports.MlSmallScreenOnly = MlSmallScreenOnly;
// ---------------------------------------------------------------------------------------------------------------------
var MlNavItem = (function () {
    function MlNavItem() {
    }
    MlNavItem = __decorate([
        core_1.Directive({
            selector: '[nav-item]',
            host: { class: 'mdl-navigation__link' } }), 
        __metadata('design:paramtypes', [])
    ], MlNavItem);
    return MlNavItem;
}());
exports.MlNavItem = MlNavItem;
// ---------------------------------------------------------------------------------------------------------------------
var MlDrawer = (function () {
    function MlDrawer(host, ren) {
        this.host = host;
        this.ren = ren;
    }
    MlDrawer.prototype.ngOnInit = function () {
        var _this = this;
        // Hides drawer and obfuscator when clicking item menu on drawer
        this.ren.listen(this.host.nativeElement, 'click', function () {
            _this.host.nativeElement.classList.remove('is-visible');
            var obfuscator = document.querySelector('div.mdl-layout__obfuscator.is-visible');
            obfuscator.classList.remove('is-visible');
        });
        ml.setClass(this.host, 'mdl-layout__drawer', this.ren);
    };
    MlDrawer = __decorate([
        core_1.Component({
            selector: 'ml-drawer',
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MlDrawer);
    return MlDrawer;
}());
exports.MlDrawer = MlDrawer;
// ---------------------------------------------------------------------------------------------------------------------
var MlContent = (function () {
    function MlContent() {
    }
    MlContent = __decorate([
        core_1.Component({
            selector: 'ml-content',
            host: { class: 'mdl-layout__content' },
            template: '<div class="page-content"><ng-content></ng-content></div>' }), 
        __metadata('design:paramtypes', [])
    ], MlContent);
    return MlContent;
}());
exports.MlContent = MlContent;
// ---------------------------------------------------------------------------------------------------------------------
var MlHeaderTabs = (function () {
    function MlHeaderTabs() {
    }
    MlHeaderTabs = __decorate([
        core_1.Component({
            selector: 'ml-header-tabs',
            host: { class: 'mdl-layout__tab-bar' },
            template: '<ng-content></ng-content>' }), 
        __metadata('design:paramtypes', [])
    ], MlHeaderTabs);
    return MlHeaderTabs;
}());
exports.MlHeaderTabs = MlHeaderTabs;
// ---------------------------------------------------------------------------------------------------------------------
var MlTabBar = (function () {
    function MlTabBar() {
    }
    MlTabBar = __decorate([
        core_1.Directive({
            selector: '[tab-bar]',
            host: { class: 'mdl-layout__tab' } }), 
        __metadata('design:paramtypes', [])
    ], MlTabBar);
    return MlTabBar;
}());
exports.MlTabBar = MlTabBar;
// ---------------------------------------------------------------------------------------------------------------------
var MlTabContent = (function () {
    function MlTabContent() {
    }
    MlTabContent = __decorate([
        core_1.Component({
            selector: 'ml-tab-content',
            host: { class: 'mdl-layout__tab-panel' },
            template: '<ng-content></ng-content>' }), 
        __metadata('design:paramtypes', [])
    ], MlTabContent);
    return MlTabContent;
}());
exports.MlTabContent = MlTabContent;
// ---------------------------------------------------------------------------------------------------------------------
var MlTabActive = (function () {
    function MlTabActive() {
    }
    MlTabActive = __decorate([
        core_1.Directive({
            selector: '[active]',
            host: { class: 'is-active' } }), 
        __metadata('design:paramtypes', [])
    ], MlTabActive);
    return MlTabActive;
}());
exports.MlTabActive = MlTabActive;
// ---------------------------------------------------------------------------------------------------------------------
exports.MlLayout = [
    MlLayoutContainer,
    MlHeader,
    MlHeaderRow,
    MlDrawer,
    MlSpacer,
    MlNav,
    MlNavItem,
    MlLargeScreenOnly,
    MlSmallScreenOnly,
    MlContent,
    MlHeaderTabs,
    MlTabContent,
    MlTabBar,
    MlTabActive
];
//# sourceMappingURL=C:/Users/Yago/WebstormProjects/material-light-demo-webpack/src/app/ml/components/layout/ml_layout.js.map