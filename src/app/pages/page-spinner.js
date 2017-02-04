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
    PageSpinner.prototype.clickBtn1 = function () {
        this.spinner1.stop();
        this.btn1.disable();
    };
    PageSpinner.prototype.clickBtn2 = function () {
        this.spinner1.start();
        this.btn1.enable();
    };
    __decorate([
        core_1.ViewChild('btn1'), 
        __metadata('design:type', Object)
    ], PageSpinner.prototype, "btn1", void 0);
    __decorate([
        core_1.ViewChild('spinner1'), 
        __metadata('design:type', Object)
    ], PageSpinner.prototype, "spinner1", void 0);
    PageSpinner = __decorate([
        core_1.Component({
            template: "\n\n<h5>Spinner</h5>\n\nMulti-color:\n<ml-spinner #spinner1 active></ml-spinner>\n\n<br><br>\n\nSingle color:\n<ml-spinner active single-color></ml-spinner>\n\n<br><br>\n\n<p>SPINNER API:</p>\n<p><ml-button #btn1 aspect=\"raised\" (click)=\"clickBtn1()\">Stop spinner 1</ml-button></p>\n<p><ml-button aspect=\"raised\" (click)=\"clickBtn2()\">Start spinner 1</ml-button></p>\n        \n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PageSpinner);
    return PageSpinner;
}());
exports.PageSpinner = PageSpinner;
//# sourceMappingURL=page-spinner.js.map