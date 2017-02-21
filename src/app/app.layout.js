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
var App = (function () {
    function App() {
        // This code is ony to show/hide header tabs
        this.headerTabs = false;
    }
    App.prototype.getUrlParameter = function (name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
    ;
    App.prototype.toggleHeaderTabs = function () {
        this.headerTabs = !this.headerTabs;
        window.location.href = '?headertabs=' + this.headerTabs;
    };
    App.prototype.ngOnInit = function () {
        var temp = this.getUrlParameter('headertabs');
        temp.toLowerCase() === 'true' ? this.headerTabs = true : this.headerTabs = false;
    };
    App = __decorate([
        core_1.Component({
            selector: 'ml-demo-app',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            template: "\n\n<style>\n  a[nav-item]{padding-top: 10px !important; padding-bottom: 10px !important}\n  .bg-grey{background: lightgrey}\n  .content-pad{padding: 10px}\n</style>\n\n<ml-layout>\n\n  <!-- Header ------------------------------------------------------------------------------------------------------ -->\n\n  <ml-header>\n    <ml-header-row>\n      <ml-title>Material Light Demo</ml-title>\n      <ml-spacer></ml-spacer>\n      <ml-nav large-screen-only>\n        <a nav-item href=\"\">Link</a>\n        <a nav-item href=\"\">Link</a>\n        <a nav-item href=\"\">Link</a>\n        <a nav-item href=\"\">Link</a>\n      </ml-nav>\n    </ml-header-row>\n    <ml-header-tabs *ngIf=\"headerTabs\">\n      <a tab-bar href=\"#tab1\" active>Tab 1</a>\n      <a tab-bar href=\"#tab2\">Tab 2</a>\n      <a tab-bar href=\"#tab3\">Tab 3</a>\n      <a tab-bar href=\"#tab4\">Tab 4</a>\n      <a tab-bar href=\"#tab5\">Tab 5</a>\n      <a tab-bar href=\"#tab6\">Tab 6</a>\n    </ml-header-tabs>\n  </ml-header>\n\n  <!-- Drawer ------------------------------------------------------------------------------------------------------ -->\n  \n  <ml-drawer>\n    <ml-title class=\"bg-grey\">Material Light</ml-title>\n    <ml-nav>\n      <a nav-item routerLink=\"button\">Button</a>\n      <a nav-item routerLink=\"badge\">Badge</a>\n      <a nav-item routerLink=\"card\">Card</a>\n      <a nav-item routerLink=\"grid\">Grid</a>\n      <a nav-item routerLink=\"tabs\">Tabs</a>\n      <a nav-item routerLink=\"chip\">Chip</a>\n      <a nav-item routerLink=\"list\">List</a>\n      <a nav-item routerLink=\"menu\">Menu</a>\n      <a nav-item routerLink=\"progressbar\">ProgressBar</a>\n      <a nav-item routerLink=\"spinner\">Spinner</a>\n      <a nav-item routerLink=\"snackbar\">SnackBar</a>\n      <a nav-item routerLink=\"tooltip\">Tooltip</a>\n      <a nav-item routerLink=\"checkbox\">Checkbox</a>\n      <a nav-item routerLink=\"radio\">RadioButton</a>\n      <a nav-item routerLink=\"switch\">SwitchButton</a>\n      <a nav-item routerLink=\"toggle\">IconToggle</a>\n      <a nav-item routerLink=\"textfield\">TextControls</a>\n      <a nav-item routerLink=\"selectfield\">SelectField</a>\n      <a nav-item routerLink=\"slider\">Slider</a>\n      <a nav-item routerLink=\"dialog\">Dialog</a>\n      <a nav-item routerLink=\"table\">Table</a>\n      <a nav-item href=\"#\" (click)=\"toggleHeaderTabs()\">Header Tabs</a>\n    </ml-nav>\n  </ml-drawer>\n  \n  <!-- Content ----------------------------------------------------------------------------------------------------- -->\n  \n  <ml-content class=\"content-pad\"> \n    <ml-tab-content id=\"tab1\" active><router-outlet></router-outlet></ml-tab-content>\n    <ml-tab-content id=\"tab2\"><ml-title>Empty tab 2. Back to tab 1</ml-title></ml-tab-content>\n    <ml-tab-content id=\"tab3\"><ml-title>Empty tab 3. Back to tab 1</ml-title></ml-tab-content>\n    <ml-tab-content id=\"tab4\"><ml-title>Empty tab 4. Back to tab 1</ml-title></ml-tab-content>\n    <ml-tab-content id=\"tab5\"><ml-title>Empty tab 5. Back to tab 1</ml-title></ml-tab-content>\n    <ml-tab-content id=\"tab6\"><ml-title>Empty tab 6. Back to tab 1</ml-title></ml-tab-content>\n  </ml-content>\n    \n  <!-- End --------------------------------------------------------------------------------------------------------- -->\n\n</ml-layout>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.layout.js.map