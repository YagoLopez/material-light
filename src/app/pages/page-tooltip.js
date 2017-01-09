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
var PageToolTip = (function () {
    function PageToolTip() {
    }
    PageToolTip = __decorate([
        core_1.Component({
            selector: 'page-tooltip',
            template: "\n\n<style>\n.paragraph{display:inline-block}\n</style>\n\n<h5>Tooltip</h5>\n\n<div>\n  <div id=\"tooltip1\" class=\"paragraph\">Mouseover/Tap to show tooltip</div>\n  <ml-tooltip for=\"tooltip1\">This is a tooltip</ml-tooltip>\n</div>\n<hr>\n<div>\n  <div id=\"tooltip2\" class=\"paragraph\">Tooltip multiline</div>\n  <ml-tooltip for=\"tooltip2\">\n    Tooltip line 1<br>Tooltip line 2\n  </ml-tooltip>\n</div>\n<hr>\n<div>\n  <div id=\"tooltip3\" class=\"paragraph\">Tooltip large</div>\n  <ml-tooltip large for=\"tooltip3\">Tooltip large</ml-tooltip>\n</div>\n<hr>\n<div>\n  <div id=\"tooltip4\" class=\"paragraph\">Tooltip with image</div>\n  <ml-tooltip for=\"tooltip4\">\n    <span>Tooltip width image</span>\n    <br><br>\n    <img src=\"assets/img/welcome_card.jpg\" style=\"width:100px; height: 100px\">\n  </ml-tooltip>\n</div>\n\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PageToolTip);
    return PageToolTip;
}());
exports.PageToolTip = PageToolTip;
//# sourceMappingURL=C:/Users/Yago/WebstormProjects/material-light/src/app/pages/page-tooltip.js.map