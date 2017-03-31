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
var MlChipButton = (function () {
    function MlChipButton() {
    }
    MlChipButton = __decorate([
        core_1.Component({
            selector: 'ml-chip-button',
            moduleId: module.id,
            styleUrls: ['./mlChip.css'],
            template: "\n\n<button type=\"button\" class=\"mdl-chip\" style=\"cursor: pointer\">\n<span class=\"mdl-chip__text\"><ng-content></ng-content></span>\n</button>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], MlChipButton);
    return MlChipButton;
}());
exports.MlChipButton = MlChipButton;
