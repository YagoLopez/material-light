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
var PageCard = (function () {
    function PageCard() {
    }
    PageCard = __decorate([
        core_1.Component({
            template: "\n\n<h5>Card</h5>\n\n<ml-card shadow=\"2\">\n  <ml-card-title>title</ml-card-title>\n  <ml-card-media>\n    <img src=\"assets/img/welcome_card.jpg\" style=\"height:150px\">\n  </ml-card-media>\n  <ml-card-text>\n    text\n  </ml-card-text>\n  <ml-card-actions>\n    <a href=\"#\">Related Action</a>\n  </ml-card-actions>\n</ml-card>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PageCard);
    return PageCard;
}());
exports.PageCard = PageCard;
//# sourceMappingURL=page-card.js.map