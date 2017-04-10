//todo: poder poner ml-header en cada pagina (como en ionic)
//todo: poder definir colores, temas, fuentes, etc. Consultar colores en mlLayout.css
//todo: hacer de ml un modulo en vez de un namespace para poder importar funciones individuales
//todo: implementar MlLayout usando slots
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
var mlLayoutLib_1 = require("./mlLayoutLib");
var ml = require("../../lib/ml_lib");
// ---------------------------------------------------------------------------------------------------------------------
var MlLayout = (function () {
    function MlLayout(host, ren) {
        this.host = host;
        this.ren = ren;
    }
    MlLayout.prototype.hideDrawer = function () {
        this.mdlLayout.drawer_.classList.remove('is-visible');
        this.mdlLayout.obfuscator_.classList.remove('is-visible');
    };
    MlLayout.prototype.ngAfterViewInit = function () {
        if (this.drawer === 'fixed') {
            ml.setClass(this.host, 'mdl-layout--fixed-drawer', this.ren);
        }
        // if (this.tabs === 'fixed'){
        //   ml.setClass(this.host, 'mdl-layout--fixed-header', this.ren);
        //   ml.setClass(this.host, 'mdl-layout--fixed-tabs', this.ren);
        // }
        if (ml.isDefined(this.background)) {
            this.host.nativeElement.style.background = "url('" + this.background + "') 0 0 / cover";
            var mlContent = document.querySelector('ml-content');
            mlContent && (mlContent.style.backgroundColor = 'transparent');
        }
        this.mdlLayout = new mlLayoutLib_1.default(this.host.nativeElement);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlLayout.prototype, "drawer", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlLayout.prototype, "tabs", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlLayout.prototype, "background", void 0);
    MlLayout = __decorate([
        core_1.Component({
            selector: 'ml-layout',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styleUrls: ['./mlLayout.css', '../ripple/mlRipple.css', '../icon/mlIicon.css'],
            host: { class: 'mdl-layout mdl-layout__container' },
            encapsulation: core_1.ViewEncapsulation.None,
            template: '<ng-content></ng-content>',
            moduleId: module.id,
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MlLayout);
    return MlLayout;
}());
exports.MlLayout = MlLayout;
// ---------------------------------------------------------------------------------------------------------------------
var MlHeader = (function () {
    function MlHeader(host, ren) {
        this.host = host;
        this.ren = ren;
    }
    MlHeader.prototype.ngOnInit = function () {
        ml.isDefined(this.seamed) && ml.setClass(this.host, 'mdl-layout__header--seamed', this.ren);
        ml.isDefined(this.scrollable) && ml.setClass(this.host, 'mdl-layout__header--waterfall', this.ren);
        if (this.scrollable === 'hide-top-header') {
            ml.setClass(this.host, 'mdl-layout__header--waterfall', this.ren);
            ml.setClass(this.host, 'mdl-layout__header--waterfall-hide-top', this.ren);
        }
        // todo: Header scrollable no funciona
        // todo: mdl-layout__content hace que la cabecera sea scrollable (en concreto position: absolute/relative)
        // ml.setClass(this.host,'mdl-layout__header--scroll', this.ren);
    };
    MlHeader.prototype.ngAfterViewInit = function () {
        if (ml.isDefined(this.transparent)) {
            ml.setClass(this.host, 'mdl-layout__header--transparent', this.ren);
            var mlContent = document.querySelector('ml-content');
            mlContent && (mlContent.style.backgroundColor = 'transparent');
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlHeader.prototype, "scrollable", void 0);
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
            obfuscator && obfuscator.classList.remove('is-visible');
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
            template: '<ng-content></ng-content>' }), 
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
var MlHeaderTab = (function () {
    function MlHeaderTab(host) {
        this.host = host;
    }
    MlHeaderTab.prototype.ngOnInit = function () {
        this.host.nativeElement.innerHTML += "\n      <span class=\"mdl-layout__tab-ripple-container\">\n        <span class=\"mdl-ripple\"></span>\n      </span>";
    };
    MlHeaderTab = __decorate([
        core_1.Directive({
            selector: '[header-tab]',
            host: { class: 'mdl-layout__tab' } }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MlHeaderTab);
    return MlHeaderTab;
}());
exports.MlHeaderTab = MlHeaderTab;
// ---------------------------------------------------------------------------------------------------------------------
var MlHeaderTabContent = (function () {
    function MlHeaderTabContent() {
    }
    MlHeaderTabContent = __decorate([
        core_1.Component({
            selector: 'ml-content-tabheader',
            host: { class: 'mdl-layout__tab-panel' },
            template: '<ng-content></ng-content>' }), 
        __metadata('design:paramtypes', [])
    ], MlHeaderTabContent);
    return MlHeaderTabContent;
}());
exports.MlHeaderTabContent = MlHeaderTabContent;
// ---------------------------------------------------------------------------------------------------------------------
var MlHeaderTabActive = (function () {
    function MlHeaderTabActive() {
    }
    MlHeaderTabActive = __decorate([
        core_1.Directive({
            selector: '[active]',
            host: { class: 'is-active' } }), 
        __metadata('design:paramtypes', [])
    ], MlHeaderTabActive);
    return MlHeaderTabActive;
}());
exports.MlHeaderTabActive = MlHeaderTabActive;
