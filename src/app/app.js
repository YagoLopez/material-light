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
//todo: cambiar nombre de app a ml-app y en ficheros relacionados
var core_1 = require('@angular/core');
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'ml-demo-app',
            // changeDetection: ChangeDetectionStrategy.OnPush,
            template: "\n\n<ml-layout>\n\n  <!-- Header ------------------------------------------------------------------------------------------------------ -->\n\n  <ml-header>\n    <ml-header-row>\n      <ml-title>Material Light Demo</ml-title>\n      <ml-spacer></ml-spacer>\n      <ml-nav large-screen-only>\n        <a nav-item href=\"\">Link</a>\n        <a nav-item href=\"\">Link</a>\n        <a nav-item href=\"\">Link</a>\n        <a nav-item href=\"\">Link</a>\n      </ml-nav>\n    </ml-header-row>\n    <ml-header-tabs>\n      <a tab-bar href=\"#tab1\" active>Tab 1</a>\n      <a tab-bar href=\"#tab2\">Tab 2</a>\n      <a tab-bar href=\"#tab3\">Tab 3</a>\n      <a tab-bar href=\"#tab4\">Tab 4</a>\n      <a tab-bar href=\"#tab5\">Tab 5</a>\n      <a tab-bar href=\"#tab6\">Tab 6</a>\n    </ml-header-tabs>\n  </ml-header>\n\n  <!-- Drawer ------------------------------------------------------------------------------------------------------ -->\n  \n<!--\n  <style>\n    a[nav-item]{\n      padding: 0 !important;\n    }\n  </style>\n-->\n\n  <ml-drawer>\n    <ml-title>Material Light</ml-title>\n    <ml-nav>\n      <a nav-item routerLink=\"/button\">Button</a>\n      <a nav-item routerLink=\"/grid\">Grid</a>\n      <a nav-item routerLink=\"/tabs\">Tabs</a>\n      <a nav-item routerLink=\"/badge\">Badge</a>\n      <a nav-item routerLink=\"/card\">Card</a>\n      <a nav-item routerLink=\"/chip\">Chip</a>\n      <a nav-item routerLink=\"/list\">List</a>\n      <a nav-item routerLink=\"/menu\">Menu</a>\n      <a nav-item routerLink=\"/progressbar\">ProgressBar</a>\n      <a nav-item routerLink=\"/spinner\">Spinner</a>\n      <a nav-item routerLink=\"/snackbar\">SnackBar</a>\n      <a nav-item routerLink=\"/tooltip\">Tooltip</a>\n      <a nav-item routerLink=\"/checkbox\">Checkbox</a>\n      <a nav-item routerLink=\"/radio\">RadioButton</a>\n      <a nav-item routerLink=\"/switch\">SwitchButton</a>\n      <a nav-item routerLink=\"/toggle\">IconToggle</a>\n      <a nav-item routerLink=\"/textfield\">TextControls</a>\n      <a nav-item routerLink=\"/selectfield\">SelectField</a>\n      <a nav-item routerLink=\"/slider\">Slider</a>\n      <a nav-item routerLink=\"/dialog\">Dialog</a>\n      <a nav-item routerLink=\"/table\">Table</a>\n    </ml-nav>\n  </ml-drawer>\n  \n  <!-- Content ----------------------------------------------------------------------------------------------------- -->\n  \n  <ml-content style=\"padding:10px\"> \n    <ml-tab-content id=\"tab1\" active><router-outlet></router-outlet></ml-tab-content>\n    <ml-tab-content id=\"tab2\"><ml-title>Tab 2</ml-title></ml-tab-content>\n    <ml-tab-content id=\"tab3\"><ml-title>Tab 3</ml-title></ml-tab-content>\n    <ml-tab-content id=\"tab4\"><ml-title>Tab 4</ml-title></ml-tab-content>\n    <ml-tab-content id=\"tab5\"><ml-title>Tab 5</ml-title></ml-tab-content>\n    <ml-tab-content id=\"tab6\"><ml-title>Tab 6</ml-title></ml-tab-content>\n  </ml-content>\n    \n  <!-- End --------------------------------------------------------------------------------------------------------- -->\n\n</ml-layout>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map