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
var PageSpinner = (function () {
    function PageSpinner() {
    }
    PageSpinner = __decorate([
        core_1.Component({
            template: "\n\n<h5>Spinner</h5>\n\nMulti-color:\n<ml-spinner active #spinner1></ml-spinner>\n\n<br><br>\n\nSingle color:\n<ml-spinner active single-color></ml-spinner>\n\n<br><br>\n\n<p>SPINNER API:</p>\n<p><ml-button aspect=\"raised\" (click)=\"spinner1.stop()\">Disable spinner 1</ml-button></p>\n<p><ml-button aspect=\"raised\" (click)=\"spinner1.start()\">Enable spinner 1</ml-button></p>\n        \n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PageSpinner);
    return PageSpinner;
}());
exports.PageSpinner = PageSpinner;
//# sourceMappingURL=C:/Users/Yago/WebstormProjects/material-light-demo-webpack/src/app/pages/page-spinner.js.map