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
var mlTabsLib_1 = require("./mlTabsLib");
// ---------------------------------------------------------------------------------------------------------------------
var MlTabs = (function () {
    function MlTabs(host) {
        this.host = host;
    }
    MlTabs.prototype.ngAfterViewInit = function () { new mlTabsLib_1.default(this.host.nativeElement); };
    MlTabs = __decorate([
        core_1.Component({
            selector: 'ml-tabs',
            styleUrls: ['./mlTabs.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            host: { class: 'mdl-tabs' },
            template: '<ng-content></ng-content>',
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MlTabs);
    return MlTabs;
}());
exports.MlTabs = MlTabs;
// ---------------------------------------------------------------------------------------------------------------------
var MlTabsBar = (function () {
    function MlTabsBar() {
    }
    MlTabsBar = __decorate([
        core_1.Component({ selector: 'ml-tabs-bar', host: { class: 'mdl-tabs__tab-bar' }, template: '<ng-content></ng-content>' }), 
        __metadata('design:paramtypes', [])
    ], MlTabsBar);
    return MlTabsBar;
}());
exports.MlTabsBar = MlTabsBar;
// ---------------------------------------------------------------------------------------------------------------------
var MlTab = (function () {
    function MlTab() {
    }
    MlTab = __decorate([
        core_1.Directive({ selector: '[ml-tab]', host: { class: 'mdl-tabs__tab' } }), 
        __metadata('design:paramtypes', [])
    ], MlTab);
    return MlTab;
}());
exports.MlTab = MlTab;
// ---------------------------------------------------------------------------------------------------------------------
var MlActive = (function () {
    function MlActive() {
    }
    MlActive = __decorate([
        core_1.Directive({ selector: '[ml-active]', host: { class: 'is-active' } }), 
        __metadata('design:paramtypes', [])
    ], MlActive);
    return MlActive;
}());
exports.MlActive = MlActive;
// ---------------------------------------------------------------------------------------------------------------------
var MlTabPanel = (function () {
    function MlTabPanel() {
    }
    MlTabPanel = __decorate([
        core_1.Component({ selector: 'ml-tab-panel', host: { class: 'mdl-tabs__panel' }, template: '<ng-content></ng-content>' }), 
        __metadata('design:paramtypes', [])
    ], MlTabPanel);
    return MlTabPanel;
}());
exports.MlTabPanel = MlTabPanel;
