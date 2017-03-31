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
var mlTextfieldLib_1 = require("./mlTextfieldLib");
var ml = require("../../../lib/ml_lib");
var MlTextfieldArea = (function () {
    function MlTextfieldArea(host, ren) {
        this.host = host;
        this.ren = ren;
        this.onTouch = function () { };
        this.onChange = function (_) { };
    }
    MlTextfieldArea.prototype.checkValidity = function () {
        if (this.formControl && this.formControl.invalid) {
            ml.setClass(this.host, 'is-invalid', this.ren);
            this.showError = true;
        }
        else {
            this.host.nativeElement.classList.remove('is-invalid');
            this.showError = false;
        }
    };
    MlTextfieldArea.prototype.onFocus = function () {
        this.formControl.markAsTouched(true);
        this.checkValidity();
    };
    MlTextfieldArea.prototype.onKeyup = function () {
        this.formControl.markAsTouched(true);
        this.checkValidity();
    };
    MlTextfieldArea.prototype.ngOnInit = function () {
        if (!this.id) {
            this.id = ml.randomStr();
        }
        ml.setClass(this.host, 'mdl-textfield', this.ren);
        if (this.floatingLabel === '') {
            ml.setClass(this.host, 'mdl-textfield--floating-label', this.ren);
        }
        if (this.disabled === 'true') {
            this.mdlTextfiel.disable();
        }
        this.mdlTextfiel = new mlTextfieldLib_1.default(this.host.nativeElement);
    };
    Object.defineProperty(MlTextfieldArea.prototype, "model", {
        get: function () { return this._model; },
        set: function (value) {
            this._model = value;
            this.onChange(value);
        },
        enumerable: true,
        configurable: true
    });
    MlTextfieldArea.prototype.writeValue = function (value) {
        this._model = value;
        if (value)
            this.mdlTextfiel.change(value);
    };
    MlTextfieldArea.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    MlTextfieldArea.prototype.registerOnTouched = function (fn) { this.onTouch = fn; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MlTextfieldArea.prototype, "errors", void 0);
    __decorate([
        //todo: igual se puede restringir a object
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlTextfieldArea.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlTextfieldArea.prototype, "name", void 0);
    __decorate([
        core_1.Input('floating-label'), 
        __metadata('design:type', String)
    ], MlTextfieldArea.prototype, "floatingLabel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlTextfieldArea.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormControl)
    ], MlTextfieldArea.prototype, "formControl", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlTextfieldArea.prototype, "rows", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlTextfieldArea.prototype, "maxrows", void 0);
    MlTextfieldArea = __decorate([
        core_1.Component({
            selector: 'ml-textfield-area',
            moduleId: module.id,
            styleUrls: ['./mlTextfield.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [{ provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return MlTextfieldArea; }), multi: true }],
            template: "\n\n<textarea type=\"text\" class=\"mdl-textfield__input\" [attr.rows]=\"rows\" [attr.maxrows]=\"maxrows\" [attr.id]=\"id\" \n[name]=\"name\" [(ngModel)]=\"model\" (focus)=\"onFocus()\" (keyup)=\"onKeyup()\"></textarea>\n\n<!--<label class=\"mdl-textfield__label\" [attr.for]=\"id\"><ng-content select=\"mdl-textfield-label\"></ng-content></label>-->\n<label class=\"mdl-textfield__label\" [attr.for]=\"id\"><ng-content select=\"ml-textfield-label\"></ng-content></label>\n\n<div *ngIf=\"showError\" class=\"mdl-textfield__error\"><ng-content select=\"ml-error\"></ng-content></div>\n\n" //template
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MlTextfieldArea);
    return MlTextfieldArea;
}());
exports.MlTextfieldArea = MlTextfieldArea;
