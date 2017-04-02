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
// https://material.io/icons/
// NOTE: icon names: http://google.github.io/web-starter-kit/latest/styleguide/icons/demo.html
// NOTE: change middle dash (-) for lower dash (_) in icon name for using ICON NAMES from the above url
var core_1 = require("@angular/core");
var MlIcon = (function () {
    function MlIcon() {
    }
    MlIcon = __decorate([
        core_1.Component({ selector: 'ml-icon', host: { class: 'material-icons' }, template: '<ng-content></ng-content>' }), 
        __metadata('design:paramtypes', [])
    ], MlIcon);
    return MlIcon;
}());
exports.MlIcon = MlIcon;
