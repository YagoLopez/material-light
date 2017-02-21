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
var PagSlider = (function () {
    function PagSlider() {
    }
    PagSlider = __decorate([
        core_1.Component({
            template: "\n\n<h5>Slider</h5>\n\n<div style=\"width:300px\">\n\n  <h6>Slider enabled:</h6>\n  <p><input ml-slider min=\"0\" max=\"10\" value=\"5\" #slider1></p>\n  <p>Change slider programatically</p>\n  <p><ml-button ripple aspect=\"raised\" (click)=\"slider1.change(0)\" ripple>Value 0</ml-button></p>\n  <p><ml-button ripple aspect=\"raised\" (click)=\"slider1.change(10)\" ripple>Value 10</ml-button></p>\n\n  <h6>Slider disabled:</h6>\n  <p><input ml-slider min=\"0\" max=\"10\" value=\"5\" disabled></p>\n\n</div>\n\n        \n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PagSlider);
    return PagSlider;
}());
exports.PagSlider = PagSlider;
//# sourceMappingURL=pagSlider.js.map