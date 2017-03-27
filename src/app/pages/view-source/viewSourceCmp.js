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
var ViewSourceCmp = (function () {
    function ViewSourceCmp() {
        this.urlBaseRaw = 'https://raw.githubusercontent.com/YagoLopez/material-light/master/src/app/pages';
        this.urlBaseFormated = 'https://github.com/YagoLopez/material-light/blob/master/src/app/pages';
        this.features = 'resizable,scrollbars=yes,status=0,toolbar=0,menubar=0';
    }
    ViewSourceCmp.prototype.viewRawSource = function () { window.open(this.urlBaseRaw + "/" + this.uri, '_blank', this.features); };
    ViewSourceCmp.prototype.viewFormatedSource = function () { window.open(this.urlBaseFormated + "/" + this.uri, '_blank', this.features); };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ViewSourceCmp.prototype, "uri", void 0);
    ViewSourceCmp = __decorate([
        core_1.Component({
            selector: 'view-source',
            template: "\n<style>\n  .btn-view-src{font-size: small; display: block; color: grey; border: 1px solid grey; \n    text-decoration: none; padding: 8px; border-radius: 2px; box-shadow: 1px 1px 5px lightgrey; margin: 10px}\n  .btn-view-src:active{background-color: lightgrey}  \n  .btn-view-src-container{padding: 25px; text-align: center; margin: auto; width: 68%}\n</style>\n<div class=\"btn-view-src-container\">\n  <a href=\"javascript:void(0)\" (click)=\"viewRawSource()\" class=\"btn-view-src\">View raw source \u21D2 \u2750</a>\n  <a href=\"javascript:void(0)\" (click)=\"viewFormatedSource()\" class=\"btn-view-src\">Formated source \u21D2 \u2750</a>\n</div>\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], ViewSourceCmp);
    return ViewSourceCmp;
}());
exports.ViewSourceCmp = ViewSourceCmp;
//# sourceMappingURL=viewSourceCmp.js.map