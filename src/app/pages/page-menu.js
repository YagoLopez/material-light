//todo: falta mostrar las distinas posiciones del menu
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
var PageMenu = (function () {
    function PageMenu() {
    }
    PageMenu = __decorate([
        core_1.Component({
            template: "\n\n<style>\n.icon-menu{\n  vertical-align: middle;\n}\n</style>\n\n<h5>Menu</h5>\n\n<h6>With ripple effect</h6>\n<ml-menu ripple>\n  <ml-menu-item ripple>\n    <ml-icon class=\"icon-menu\">email</ml-icon> Item with icon\n  </ml-menu-item>\n  <ml-menu-item ripple divider>Item with divider</ml-menu-item>\n  <ml-menu-item ripple disabled>Item disabled</ml-menu-item>\n</ml-menu>\n\n<br>\n\n<h6>No ripple effect</h6>\n<ml-menu>\n  <ml-menu-item>\n    <ml-icon class=\"icon-menu\">email</ml-icon> Item with icon\n  </ml-menu-item>\n  <ml-menu-item divider>Item with divider</ml-menu-item>\n  <ml-menu-item disabled>Item disabled</ml-menu-item>\n</ml-menu>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PageMenu);
    return PageMenu;
}());
exports.PageMenu = PageMenu;
//# sourceMappingURL=C:/Users/Yago/WebstormProjects/material-light-demo-webpack/src/app/pages/page-menu.js.map