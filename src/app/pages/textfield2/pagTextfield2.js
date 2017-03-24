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
var PagTextfield = (function () {
    function PagTextfield() {
        this.passLength = 4;
        this.password = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(this.passLength)]);
        this.date = new forms_1.FormControl();
        this.textfieldForm2 = new forms_1.FormGroup({
            password: this.password,
            date: this.date
        });
    }
    PagTextfield.prototype.onSubmit = function () {
        console.log('on submit form', this.textfieldForm2.value);
    };
    PagTextfield = __decorate([
        core_1.Component({
            template: "\n<style>\n.pad-top {padding-top: 0}\n.date-field {padding-top: 10px; padding-bottom: 10px}\n</style>\n\n<h5>More text Controls</h5>\n\n<form [formGroup]=\"textfieldForm2\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\n\n  <!-- Password ---------------------------------------------------------------------------------------------------- -->\n\n  <div>\u2783 <strong>Password field: </strong></div>\n  <ml-textfield type=\"password\" id=\"password\" [formControl]=\"password\" floating>\n    <ml-textfield-label>Enter password</ml-textfield-label>\n    <ml-error [validateControl]=\"password\" validator=\"required\">Required field</ml-error>\n    <ml-error [validateControl]=\"password\" validator=\"minLength\">Minimum length: {{ passLength }}</ml-error>\n  </ml-textfield>\n  \n  <br>\n  <!-- Date -------------------------------------------------------------------------------------------------------- -->\n  \n  <!-- todo: at this moment error classes are not correctly applied at date field-->\n  <div class=\"date-field\">\u2784 <strong>Date field: </strong></div>\n  <ml-textfield type=\"date\" [formControl]=\"date\" class=\"pad-top\"></ml-textfield>\n  \n  <!-- Submit button ----------------------------------------------------------------------------------------------- -->\n  <p> \n    <ml-button-submit [disabled]=\"textfieldForm2.invalid\" \n      text=\"Submit to console\" aspect=\"raised\" ripple></ml-button-submit>\n  </p>                      \n  <!-- /Submit button ---------------------------------------------------------------------------------------------- -->\n                      \n</form>\n\n<debug-form [name]=\"textfieldForm2\"></debug-form>\n<view-source uri=\"textfield2/pagTextfield2.ts\"></view-source>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PagTextfield);
    return PagTextfield;
}());
exports.PagTextfield = PagTextfield;
//# sourceMappingURL=pagTextfield2.js.map