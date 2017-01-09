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
var PageDialog = (function () {
    function PageDialog() {
    }
    PageDialog = __decorate([
        core_1.Component({
            template: "\n\n<h5>Dialog</h5>\n\n<p>\n  <ml-button aspect=\"raised\" ripple (click)=\"dialog1.open()\">Open Dialog</ml-button>\n</p>\n\n<ml-dialog #dialog1>\n  <ml-dialog-title>Title</ml-dialog-title>\n  <ml-dialog-content>Content</ml-dialog-content>\n  <ml-dialog-actions>\n    <ml-button aspect=\"raised, colored, primary\" (click)=\"dialog1.close()\" ripple>Close</ml-button>\n  </ml-dialog-actions>\n</ml-dialog>\n        \n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PageDialog);
    return PageDialog;
}());
exports.PageDialog = PageDialog;
//# sourceMappingURL=C:/Users/Yago/WebstormProjects/material-light/src/app/pages/page-dialog.js.map