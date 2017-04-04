//todo: intentar implementar ml-textfield como el componente mdl-slider
//todo: he visto que en algun ejemplo usan ngControl en template-driven forms. investigarlo
//todo: revisar algunos inputs, pueden sobrar al no usar model-driven forms (ej: name)
//todo: que solo haya que usar una vez el input de form-control [control] -> pasarselo al componente hijo que muestra
//los errores.
//todo: para posteriores versiones tratar de evitar el js de los ficheros Lib.js
//es posible que se puedan sustituir por logica de templates de component
//todo: intentar simplificar tomando como referencia MlSelectfield, aunque igual no funcionan template forms
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
// <ml-textfield type> attribute must be restricted to the following values:
var MlTextfieldTypes = ['text', 'password', 'date', 'datetime-local', 'month', 'time', 'week', 'url', 'tel', 'color'];
var MlTextfield = (function () {
    function MlTextfield(host, ren) {
        this.host = host;
        this.ren = ren;
        this.type = 'text';
        this.onTouch = function () { };
        this.onChange = function (_) { };
    }
    MlTextfield.prototype.checkValidity = function () {
        if (this.formControl && this.formControl.invalid) {
            ml.setClass(this.host, 'is-invalid', this.ren);
            this.showError = true;
        }
        else {
            this.host.nativeElement.classList.remove('is-invalid');
            this.showError = false;
        }
    };
    MlTextfield.prototype.onFocus = function () {
        this.formControl.markAsTouched(true);
        this.checkValidity();
    };
    MlTextfield.prototype.onKeyup = function () {
        this.formControl.markAsTouched(true);
        this.checkValidity();
    };
    MlTextfield.prototype.ngOnInit = function () {
        if (!ml.isAttributeValid(this.type.toLowerCase(), MlTextfieldTypes)) {
            console.warn("<ml-textfield> Wrong attribute: type=\"" + this.type + "\"");
        }
        !this.id && (this.id = ml.randomStr());
        ml.isDefined(this.floatingLabel) && ml.setClass(this.host, 'mdl-textfield--floating-label', this.ren);
        if (this.disabled === 'true') {
            this.mdlTextfield.disable();
        }
        this.mdlTextfield = new mlTextfieldLib_1.default(this.host.nativeElement);
    };
    Object.defineProperty(MlTextfield.prototype, "model", {
        get: function () { return this._model; },
        set: function (value) {
            this._model = value;
            this.onChange(value);
        },
        enumerable: true,
        configurable: true
    });
    MlTextfield.prototype.writeValue = function (value) {
        this._model = value;
        if (value)
            this.mdlTextfield.change(value);
    };
    MlTextfield.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    MlTextfield.prototype.registerOnTouched = function (fn) { this.onTouch = fn; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlTextfield.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MlTextfield.prototype, "errors", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlTextfield.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlTextfield.prototype, "name", void 0);
    __decorate([
        core_1.Input('floating-label'), 
        __metadata('design:type', String)
    ], MlTextfield.prototype, "floatingLabel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlTextfield.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormControl)
    ], MlTextfield.prototype, "formControl", void 0);
    MlTextfield = __decorate([
        core_1.Component({
            selector: 'ml-textfield',
            moduleId: module.id,
            host: { class: 'mdl-textfield' },
            styleUrls: ['./mlTextfield.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [{ provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return MlTextfield; }), multi: true }],
            template: "\n\n<input [attr.type]=\"type\" class=\"mdl-textfield__input\" [attr.id]=\"id\" [name]=\"name\" [(ngModel)]=\"model\" \n(focus)=\"onFocus()\" (keyup)=\"onKeyup()\">\n<label class=\"mdl-textfield__label\" [attr.for]=\"id\"><ng-content select=\"ml-textfield-label\"></ng-content></label>\n<div *ngIf=\"showError\" class=\"mdl-textfield__error\"><ng-content select=\"ml-error\"></ng-content></div>\n\n" //template
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MlTextfield);
    return MlTextfield;
}());
exports.MlTextfield = MlTextfield;
