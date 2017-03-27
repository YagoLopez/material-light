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
            template: "\n\n<style>\n.bg-blue{background: lightblue}  \n.bg-grey{background: gainsboro}  \n.bg-orange{background: orange}  \n.bg-darkgrey{background: darkgrey}\nstrong{color: #3f51b5}\n</style>\n\n<h5>Grid</h5>\n<hr>\n<h6>Grid system adapts automatically position of block to screen size</h6>\n\n<strong>\u2022 Grid 1</strong>\n<ml-grid>\n  <ml-grid-cell width=\"1\" class=\"bg-grey\">1 col</ml-grid-cell>\n  <ml-grid-cell width=\"1\" class=\"bg-grey\">1 col</ml-grid-cell>\n  <ml-grid-cell width=\"1\" class=\"bg-grey\">1 col</ml-grid-cell>\n  <ml-grid-cell width=\"1\" class=\"bg-grey\">1 col</ml-grid-cell>\n  <ml-grid-cell width=\"1\" class=\"bg-grey\">1 col</ml-grid-cell>\n  <ml-grid-cell width=\"1\" class=\"bg-grey\">1 col</ml-grid-cell>\n</ml-grid>\n\n<strong>\u2022 Grid 2</strong>\n<ml-grid>\n  <ml-grid-cell width=\"2\" class=\"bg-blue\">2 col</ml-grid-cell>\n  <ml-grid-cell width=\"2\" class=\"bg-blue\">2 col</ml-grid-cell>\n</ml-grid>\n\n<strong>\u2022 Grid 3</strong>\n<ml-grid>\n  <ml-grid-cell width=\"12\" class=\"bg-darkgrey\">Full width</ml-grid-cell>\n  <ml-grid-cell width=\"12\" class=\"bg-darkgrey\">Full width</ml-grid-cell>\n</ml-grid>\n\n<hr>\n<h6>One grid with mixed widths</h6>\n\n<ml-grid>\n  <ml-grid-cell width=\"1\" class=\"bg-grey\">1 col</ml-grid-cell>\n  <ml-grid-cell width=\"1\" class=\"bg-grey\">1 col</ml-grid-cell>\n  <ml-grid-cell width=\"1\" class=\"bg-grey\">1 col</ml-grid-cell>\n  <ml-grid-cell width=\"1\" class=\"bg-grey\">1 col</ml-grid-cell>\n  <ml-grid-cell width=\"2\" class=\"bg-blue\">2 col</ml-grid-cell>\n  <ml-grid-cell width=\"2\" class=\"bg-blue\">2 col</ml-grid-cell>\n  <ml-grid-cell width=\"3\" class=\"bg-orange\">3 col</ml-grid-cell>\n  <ml-grid-cell width=\"3\" class=\"bg-orange\">3 col</ml-grid-cell>\n</ml-grid>\n\n<hr>\n\n<view-source uri=\"grid/pagGrid.ts\"></view-source>\n        \n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PagGrid);
    return PagGrid;
}());
exports.PagGrid = PagGrid;
//# sourceMappingURL=pagGrid.js.map