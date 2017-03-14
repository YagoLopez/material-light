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
var PagProgressar = (function () {
    function PagProgressar() {
    }
    PagProgressar = __decorate([
        core_1.Component({
            template: "\n\n<h5>ProgressBar</h5>\n<p><ml-progressbar progress=\"50\" #progress1 style=\"width:200px\"></ml-progressbar></p>\n<p>\u2794 Progress value: {{progress1.progressValue}}%</p>\n<p><ml-button aspect=\"raised\" (click)=\"progress1.setProgress(20)\">Progress = 20%</ml-button></p>\n<p><ml-button aspect=\"raised\" (click)=\"progress1.setProgress(80)\">Progress = 80%</ml-button></p>\n\n<hr>\n\n<h5>ProgressBar with BufferBar</h5>\n<p><ml-progressbar progress=\"20\" buffer=\"80\" #progress2 style=\"width:200px\"></ml-progressbar></p>\n<p>\n\u2794 Progress value: {{progress2.progressValue}}%<br>\n\u2794 Buffer value: {{progress2.bufferValue}}%\n</p>\n<p><ml-button aspect=\"raised\" (click)=\"progress2.setProgress(10)\">Progress = 10%</ml-button></p>\n<p><ml-button aspect=\"raised\" (click)=\"progress2.setProgress(30)\">Progress = 30%</ml-button></p>\n<p><ml-button aspect=\"raised\" (click)=\"progress2.setBuffer(20)\">Buffer = 20%</ml-button></p>\n<p><ml-button aspect=\"raised\" (click)=\"progress2.setBuffer(80)\">Buffer = 80%</ml-button></p>\n\n<hr>\n\n<h5>ProgressBar Indeterminate</h5>\n<p><ml-progressbar indeterminate style=\"width:200px\"></ml-progressbar></p>\n\n<br>\n        \n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PagProgressar);
    return PagProgressar;
}());
exports.PagProgressar = PagProgressar;
//# sourceMappingURL=pagProgressbar.js.map