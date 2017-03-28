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
var PagCard = (function () {
    function PagCard() {
    }
    PagCard = __decorate([
        core_1.Component({
            template: "\n\n<style>\nml-card {width: 100%; height: 300px}\nml-menu {color: white}\n</style>\n\n<h5>Card</h5>\n\n<ml-card shadow=\"3\" img=\"assets/img/welcome_card.jpg\">\n  <ml-card-title>Title</ml-card-title>\n  <ml-card-text>Card text content</ml-card-text>\n  <ml-card-actions>\n    <ml-button aspect=\"colored\" ripple>Card Action 1</ml-button>\n  </ml-card-actions>\n  <ml-card-menu>\n    <ml-menu icon=\"share\" position=\"top-right\" ripple>\n      <ml-menu-item ripple>item 1</ml-menu-item>\n      <ml-menu-item ripple>item 2</ml-menu-item>\n    </ml-menu>\n  </ml-card-menu>\n</ml-card>\n\n<view-source uri=\"card/pagCard.ts\"></view-source>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PagCard);
    return PagCard;
}());
exports.PagCard = PagCard;
