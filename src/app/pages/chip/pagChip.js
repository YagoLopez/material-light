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
var PagChip = (function () {
    function PagChip() {
    }
    PagChip.prototype.deleteFn = function () {
        window.alert('Chip delete action executed');
    };
    PagChip.prototype.onClickChip = function () {
        window.alert('Button Chip Clicked');
    };
    PagChip = __decorate([
        core_1.Component({
            template: "\n\n<h5>Chip</h5>\n\n<p><ml-chip>Chip only text</ml-chip></p>\n\n<p><ml-chip img=\"assets/img/user.jpg\">Chip with contact image</ml-chip></p>\n\n<p><ml-chip letter=\"A\">Chip with contact letter</ml-chip></p>\n\n<p>\n  <ml-chip img=\"assets/img/user.jpg\" deletable=\"true\" [delete-action]=\"deleteFn\">\n    Image, deletable button and callback Fn\n  </ml-chip>\n</p>\n\n<p><ml-chip-button (click)=\"onClickChip()\">Chip button, click me!</ml-chip-button></p>\n\n<view-source uri=\"chip/pagChip.ts\"></view-source>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PagChip);
    return PagChip;
}());
exports.PagChip = PagChip;
