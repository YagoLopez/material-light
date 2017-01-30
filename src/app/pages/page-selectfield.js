// todo: probar con template forms
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
var forms_1 = require("@angular/forms");
var PageSelectfield = (function () {
    function PageSelectfield() {
        this.minLength = 4;
        this.selectfield1 = new forms_1.FormControl('', [forms_1.Validators.required,
            forms_1.Validators.minLength(this.minLength)]);
        this.selectForm = new forms_1.FormGroup({
            selectfield1: this.selectfield1
        });
    }
    PageSelectfield.prototype.onSubmit = function () {
        console.log('submit', this.selectForm.value);
    };
    PageSelectfield = __decorate([
        core_1.Component({
            template: "\n\n<style>\n  .validationError{display: block; color: red;padding-bottom: 20px;}\n</style>\n\n<h5>Select Field</h5>\n<span>Reactive Forms only</span>\n<form [formGroup]=\"selectForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\n  <ml-selectfield [formControl]=\"selectfield1\">\n    <ml-sf-item></ml-sf-item>\n    <ml-sf-item>uno</ml-sf-item>\n    <ml-sf-item>dos</ml-sf-item>\n    <ml-sf-item>tres</ml-sf-item>\n    <ml-sf-item>cuatro</ml-sf-item>\n    <ml-sf-item>cinco</ml-sf-item>\n    <ml-sf-item>seis</ml-sf-item>\n    <ml-sf-item>siete</ml-sf-item>\n    <ml-sf-item>ocho</ml-sf-item>\n  </ml-selectfield>\n  <div class=\"validationError\">\n    <ml-error [control]=\"selectfield1\" validator=\"required\">Required field</ml-error>\n    <ml-error [control]=\"selectfield1\" validator=\"minLength\">Min length: {{ minLength }}</ml-error>  \n  </div>\n  <ml-button-submit [disabled]=\"selectForm.invalid\" value=\"Submit to console\" aspect=\"raised\"></ml-button-submit>\n</form>\n<br>\n<div><debug-form [name]=\"selectForm\"></debug-form></div>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PageSelectfield);
    return PageSelectfield;
}());
exports.PageSelectfield = PageSelectfield;
//# sourceMappingURL=page-selectfield.js.map