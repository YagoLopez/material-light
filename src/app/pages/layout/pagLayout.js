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
var pagLayout = (function () {
    function pagLayout() {
    }
    pagLayout = __decorate([
        core_1.Component({
            template: "\n\n<style>iframe{vertical-align: middle; border: 0; width: 100%;height: 300px; padding-bottom: 25px}</style>\n\n<h5>Material Light Layout</h5>\n\n<p><strong>ml-layout</strong> is the base component that creates the structure on which other components \nare placed</p> \n\n<p>The Material Light layout contains three main sections</p>\n<ul>\n  <li><strong>ml-header</strong>: the upper bar with the title and the menu icon</li>\n  <li><strong>ml-drawer</strong>: the deployable menu to the left</li>\n  <li><strong>ml-content</strong>: the main content area (suitable to place the router-outlet)</li>\n</ul>\n\n<p>Each section can have variations. For example ml-header can have header tabs, header links, or other icons</p>\n\n<p>It is also posible to have different submenus and headers for each page using auxiliar router-outlets. \nThis feature is experimental and still has not been tested</p>\n\n<!--<p>Here is a schematic code of a basic layout:</p>\n\n<iframe src=\"app/pages/layout/mlLayoutGist.html\"></iframe>\n\n<p>An here is the source code of this layout demo:</p>-->\n<view-source uri=\"../app.layout.ts\"></view-source>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], pagLayout);
    return pagLayout;
}());
exports.pagLayout = pagLayout;
//# sourceMappingURL=pagLayout.js.map