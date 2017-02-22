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
        this.textfield1 = new forms_1.FormControl('', [forms_1.Validators.required,
            forms_1.Validators.minLength(2),
            forms_1.Validators.maxLength(4)]);
        this.textfield2 = new forms_1.FormControl('', forms_1.Validators.required);
        this.textfield3 = new forms_1.FormControl();
        this.txtArea = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(2)]);
        this.textfieldForm = new forms_1.FormGroup({
            textfield1: this.textfield1,
            textfield2: this.textfield2,
            textfield3: this.textfield3,
            txtArea: this.txtArea
        });
    }
    PagTextfield.prototype.onSubmit = function () {
        console.log('on submit', this.textfieldForm.value);
    };
    PagTextfield = __decorate([
        core_1.Component({
            template: "\n\n<style>\n.ico-aligned{vertical-align: middle; margin-top: -4px; padding-right: 5px}\n</style>\n\n<h5>Text Controls</h5>\n<p>(Only for reactive forms)</p>\n\n<form [formGroup]=\"textfieldForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\n\n  <p><strong><u>Textfields:</u></strong></p>\n  \n  <!-- textfield1  ------------------------------------------------------------------------------------------------- -->\n\n  <mdl-textfield [formControl]=\"textfield1\" floating>\n    <mdl-textfield-label>\n      <ml-icon class=\"ico-aligned\">email</ml-icon>Label (floating + icon + validation)\n    </mdl-textfield-label>\n    <ml-error [validateControl]=\"textfield1\" validator=\"required\">Required field</ml-error>\n    <ml-error [validateControl]=\"textfield1\" validator=\"minLength\">Minimum length is 2</ml-error>\n    <ml-error [validateControl]=\"textfield1\" validator=\"maxLength\">Maximum length is 4</ml-error>\n  </mdl-textfield>\n\n  <!-- textfield2  ------------------------------------------------------------------------------------------------- -->\n    \n  <mdl-textfield id=\"textfield2\" [formControl]=\"textfield2\">\n    <mdl-textfield-label>Label 2 (no icon, no floating, no validation)</mdl-textfield-label>\n    <ml-error [validateControl]=\"textfield2\" validator=\"required\">Required field</ml-error>\n  </mdl-textfield>\n  <br><br>\n\n  <!-- textfield expandable  --------------------------------------------------------------------------------------- -->\n  \n  <strong><u>Textfield expandable:</u></strong> (No validation)\n  <mdl-textfield-expand [formControl]=\"textfield3\" icon=\"search\"></mdl-textfield-expand>\n  <br>\n\n  <!-- textfield area  --------------------------------------------------------------------------------------------- -->\n  \n  <strong><u>Textfield Area:</u></strong> (Validated)\n  <mdl-textfield-area rows=\"3\" maxrows=\"6\" [formControl]=\"txtArea\">\n    <mdl-textfield-label>Text Area</mdl-textfield-label>\n    <ml-error [validateControl]=\"txtArea\" validator=\"required\">Required</ml-error>\n    <ml-error [validateControl]=\"txtArea\" validator=\"minLength\">Min length 2</ml-error>\n  </mdl-textfield-area>\n  <br><br>\n\n  <!-- /textfield area  -------------------------------------------------------------------------------------------- -->\n  \n  <p> \n    <ml-button-submit [disabled]=\"textfieldForm.invalid\" \n      value=\"Submit to console\" aspect=\"raised\"></ml-button-submit>\n  </p>                      \n                      \n</form>\n\n<p><debug-form [name]=\"textfieldForm\"></debug-form></p>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PagTextfield);
    return PagTextfield;
}());
exports.PagTextfield = PagTextfield;
//# sourceMappingURL=pagTextfield.js.map