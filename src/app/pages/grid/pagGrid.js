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
var PagGrid = (function () {
    function PagGrid() {
    }
    PagGrid = __decorate([
        core_1.Component({
            template: "\n\n<style>\n.bg-blue{\n  background: cornflowerblue;\n}  \n.bg-grey{\n  background: gainsboro;\n}  \n.bg-yellow{\n  background: yellow;\n}  \n.bg-red{\n  background: red;\n}\n</style>\n\n<h6>Grid</h6>\n\n<ml-grid>\n  <ml-grid-cell width=\"1\" class=\"bg-grey\">1 cols</ml-grid-cell>\n  <ml-grid-cell width=\"1\" class=\"bg-grey\">1 cols</ml-grid-cell>\n  <br>\n  <ml-grid-cell width=\"12\" class=\"bg-grey\">Full width</ml-grid-cell>\n  <ml-grid-cell width=\"12\" class=\"bg-grey\">Full width</ml-grid-cell>\n</ml-grid>\n        \n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PagGrid);
    return PagGrid;
}());
exports.PagGrid = PagGrid;
//# sourceMappingURL=pagGrid.js.map