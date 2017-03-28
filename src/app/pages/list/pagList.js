//todo: convertir las clases de los iconos  mdl-list__item-avatar mdl-list__item-icon en directivas
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
var PagList = (function () {
    function PagList() {
    }
    PagList = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.None,
            template: "\n\n<h5>List</h5>\n\n<style>.demo-list {background: ghostwhite}</style>\n\n<ml-list class=\"demo-list\">\n\n  <ml-item>\n    <ml-item-content>\n      <ml-item-icon type=\"normal\">person</ml-item-icon>\n      <a href=\"#\" class=\"ml-item-link\">Item with link</a>\n    </ml-item-content>\n    <ml-item-action>\n      <a href=\"#\"><ml-icon>star</ml-icon></a>\n    </ml-item-action>\n    \n  </ml-item>\n  \n  <ml-item lines=\"2\">\n    <ml-item-content>\n      <ml-item-icon type=\"normal\">person</ml-item-icon>\n      <ml-item-title>Aaron Paul</ml-item-title>\n      <ml-item-subtitle>62 Episodes</ml-item-subtitle>\n    </ml-item-content>\n    <ml-item-action>\n      <a href=\"#\"><ml-icon>star</ml-icon></a>\n    </ml-item-action>\n  </ml-item>\n  \n  <ml-item lines=\"3\">\n    <ml-item-content>\n      <ml-item-icon type=\"avatar\">person</ml-item-icon>\n      <ml-item-title>Bryan Cranston</ml-item-title>\n      <ml-item-desc>\n        Bryan Cranston played the role of Walter in Breaking Bad. He is also known\n        for playing Hal in Malcom in the Middle.\n      </ml-item-desc>\n    </ml-item-content>\n    <ml-item-action>\n      <a href=\"#\"><ml-icon>star</ml-icon></a>\n    </ml-item-action>\n  </ml-item>\n  \n</ml-list>\n\n<view-source uri=\"list/pagList.ts\"></view-source>\n        \n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PagList);
    return PagList;
}());
exports.PagList = PagList;
