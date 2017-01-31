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
var PageTextfield = (function () {
    function PageTextfield() {
        this.textfield1 = new forms_1.FormControl('', [forms_1.Validators.required,
            forms_1.Validators.minLength(2),
            forms_1.Validators.maxLength(4)]);
        this.textfield2 = new forms_1.FormControl('', forms_1.Validators.required);
        this.textfield3 = new forms_1.FormControl();
        this.textfieldArea = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(2)]);
        this.controlsReactiveForm = new forms_1.FormGroup({
            textfield1: this.textfield1,
            textfield2: this.textfield2,
            textfield3: this.textfield3,
            textfieldArea: this.textfieldArea
        });
    }
    PageTextfield.prototype.onSubmit = function () {
        console.log('on submit', this.controlsReactiveForm.value);
    };
    PageTextfield = __decorate([
        core_1.Component({
            template: "\n\n<style>\n.aligned{vertical-align: middle;}\n</style>\n\n<h5>Text Controls</h5>\n<p>(Only work with reactive forms)</p>\n\n<form [formGroup]=\"controlsReactiveForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\n\n  <p>\n    <mdl-textfield [formControl]=\"textfield1\" floating>\n      <mdl-textfield-label><ml-icon class=\"aligned\">email</ml-icon>Label 1 (floating + icon)</mdl-textfield-label>\n      <ml-error [validateControl]=\"textfield1\" validator=\"required\">Required field</ml-error>\n      <ml-error [validateControl]=\"textfield1\" validator=\"minLength\">Minimum length is 2</ml-error>\n      <ml-error [validateControl]=\"textfield1\" validator=\"maxLength\">Maximum length is 4</ml-error>\n    </mdl-textfield>\n  </p>\n  \n  <p>  \n    <mdl-textfield id=\"textfield2\" [formControl]=\"textfield2\">\n      <mdl-textfield-label>Label 2 (no icon, no floating)</mdl-textfield-label>\n      <ml-error [validateControl]=\"textfield2\" validator=\"required\">Required field</ml-error>\n    </mdl-textfield>\n  </p>  \n\n  <p>\n    <strong>Textfield expandable:</strong>\n    <mdl-textfield-expand [formControl]=\"textfield3\" icon=\"search\"></mdl-textfield-expand>\n  </p>\n  \n  <strong>Textfield Area:</strong>\n  <p>\n    <mdl-textfield-area rows=\"3\" maxrows=\"6\" [formControl]=\"textfieldArea\">\n      <mdl-textfield-label>Text Area</mdl-textfield-label>\n      <ml-error [validateControl]=\"textfieldArea\" validator=\"required\">Required</ml-error>\n      <ml-error [validateControl]=\"textfieldArea\" validator=\"minLength\">Min length 2</ml-error>\n    </mdl-textfield-area>\n  </p>\n  \n  <p> \n    <ml-button-submit [disabled]=\"controlsReactiveForm.invalid\" \n      value=\"Submit to console\" aspect=\"raised\"></ml-button-submit>\n  </p>                      \n                      \n</form>\n\n<p><debug-form [name]=\"controlsReactiveForm\"></debug-form></p>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PageTextfield);
    return PageTextfield;
}());
exports.PageTextfield = PageTextfield;
//# sourceMappingURL=page-textfield.js.map