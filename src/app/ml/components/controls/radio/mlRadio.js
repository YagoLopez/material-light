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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ml = require("../../../lib/ml_lib");
// ---------------------------------------------------------------------------------------------------------------------
var MlRadio = (function () {
    function MlRadio() {
        this.id = this.id || ml.randomStr();
        this.onTouched = function () { };
        this.onChanged = function (_) { };
    }
    MlRadio.prototype.ngOnInit = function () {
        if (ml.isDefined(this.disabled)) {
            this.input.nativeElement.disabled = 'true';
            this.label.nativeElement.classList.add('is-disabled');
        }
    };
    MlRadio.prototype.onClick = function ($event) { this.onChanged($event.target.value); };
    MlRadio.prototype.isChecked = function () { return this.input.nativeElement.checked; };
    MlRadio.prototype.setChecked = function (status) { this.input.nativeElement.checked = status; };
    MlRadio.prototype.setDisabled = function () {
        this.input.nativeElement.disabled = 'true';
        this.label.nativeElement.classList.add('is-disabled');
    };
    MlRadio.prototype.setEnabled = function () {
        this.input.nativeElement.disabled = '';
        this.label.nativeElement.classList.remove('is-disabled');
    };
    MlRadio.prototype.writeValue = function (value) {
        if (value === this.value) {
            this.value = value;
            this.checked = true;
            this.input.nativeElement.checked = true;
        }
    };
    MlRadio.prototype.registerOnChange = function (fn) { this.onChanged = fn; };
    MlRadio.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    __decorate([
        core_1.ViewChild('label'), 
        __metadata('design:type', core_1.ElementRef)
    ], MlRadio.prototype, "label", void 0);
    __decorate([
        core_1.ViewChild('input'), 
        __metadata('design:type', core_1.ElementRef)
    ], MlRadio.prototype, "input", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlRadio.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlRadio.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlRadio.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlRadio.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlRadio.prototype, "formControlName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MlRadio.prototype, "checked", void 0);
    MlRadio = __decorate([
        core_1.Component({
            selector: 'ml-radio',
            moduleId: module.id,
            styleUrls: ['./mlRadio.css'],
            providers: [{ provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return MlRadio; }), multi: true }],
            template: "\n\n<label #label [attr.for]=\"id+'mdl'\" class=\"mdl-radio is-upgraded\" [ngClass]=\"{'is-checked': isChecked()}\" [attr.ripple]>\n  <input #input type=\"radio\" class=\"mdl-radio__button\"\n    [attr.id]=\"id+'mdl'\" \n    [attr.disabled] \n    [name]=\"formControlName\"\n    [value]=\"value\"\n    [checked]=\"checked\"\n    (click)=\"onClick($event)\">\n  <span class=\"mdl-radio__label\"><ng-content></ng-content></span>\n  <span class=\"mdl-radio__outer-circle\"></span> \n  <span class=\"mdl-radio__inner-circle\"></span>\n  <span class=\"mdl-radio__ripple-container mdl-ripple--center\">\n    <span class=\"mdl-ripple\"></span>\n  </span>  \n</label>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], MlRadio);
    return MlRadio;
}());
exports.MlRadio = MlRadio;
