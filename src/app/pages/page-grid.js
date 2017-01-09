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
var PageGrid = (function () {
    function PageGrid() {
    }
    PageGrid = __decorate([
        core_1.Component({
            template: "\n\n<style>\n.bg-blue{\n  background: cornflowerblue;\n}  \n.bg-grey{\n  background: gainsboro;\n}  \n.bg-yellow{\n  background: yellow;\n}  \n.bg-red{\n  background: red;\n}\n</style>\n\n<ml-title>Grid</ml-title>\n\n<ml-grid>\n  <ml-cell width=\"1\" class=\"bg-grey\">1 cols</ml-cell>\n  <ml-cell width=\"1\" class=\"bg-grey\">1 cols</ml-cell>\n  <br>\n  <ml-cell width=\"12\" class=\"bg-grey\">Full width</ml-cell>\n  <ml-cell width=\"12\" class=\"bg-grey\">Full width</ml-cell>\n</ml-grid>\n        \n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PageGrid);
    return PageGrid;
}());
exports.PageGrid = PageGrid;
//# sourceMappingURL=C:/Users/Yago/WebstormProjects/material-light/src/app/pages/page-grid.js.map