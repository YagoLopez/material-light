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
var mdl_tabs_1 = require("./mdl_tabs");
// ---------------------------------------------------------------------------------------------------------------------
var MlTabsContainer = (function () {
    function MlTabsContainer(host) {
        this.host = host;
    }
    MlTabsContainer.prototype.ngAfterViewInit = function () {
        new mdl_tabs_1.default(this.host.nativeElement);
    };
    MlTabsContainer = __decorate([
        core_1.Component({
            selector: 'ml-tabs',
            styleUrls: ['./ml_tabs.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            moduleId: module.id.toString(),
            host: { class: 'mdl-tabs' },
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MlTabsContainer);
    return MlTabsContainer;
}());
exports.MlTabsContainer = MlTabsContainer;
// ---------------------------------------------------------------------------------------------------------------------
var MlTabsBar = (function () {
    function MlTabsBar() {
    }
    MlTabsBar = __decorate([
        core_1.Component({
            selector: 'ml-tabs-bar',
            host: { class: 'mdl-tabs__tab-bar' },
            template: '<ng-content></ng-content>' }), 
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
        core_1.Directive({
            selector: '[tab]',
            host: { class: 'mdl-tabs__tab' } }), 
        __metadata('design:paramtypes', [])
    ], MlTab);
    return MlTab;
}());
exports.MlTab = MlTab; // Do not confuse with MdlTabHeader
// ---------------------------------------------------------------------------------------------------------------------
var MlTabPanel = (function () {
    function MlTabPanel() {
    }
    MlTabPanel = __decorate([
        // Do not confuse with MdlTabHeader
        core_1.Component({
            selector: 'ml-tab-panel',
            host: { class: 'mdl-tabs__panel' },
            template: '<ng-content></ng-content>' }), 
        __metadata('design:paramtypes', [])
    ], MlTabPanel);
    return MlTabPanel;
}());
exports.MlTabPanel = MlTabPanel;
// ---------------------------------------------------------------------------------------------------------------------
exports.MlTabs = [MlTabsContainer, MlTabsBar, MlTab, MlTabPanel];
//# sourceMappingURL=ml_tabs.js.map