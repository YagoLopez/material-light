//todo: intentar implementar mdl-textfield como el componente mdl-slider
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
//todo: he visto que en algun ejemplo usan ngControl en template-driven forms. investigarlo
//puede que sirva para que mdl-textfield funcione en template-driven forms
//todo: revisar algunos inputs puede sobrar al no usar model-driven forms (ej: name)
//todo: que solo hay que usar una vez el input de form-control [control] -> pasarselo al componente hijo que muestra
//los errores.
//todo: a lo mejor se puede resolver lo de la repeticion de codigo en componentes sencillos creando un componente
//abstracto y heredando de él
//todo: para posteriores versiones tratar de evitar el js de los ficheros *.lib.js
//es posible que se puedan sustituir por logica de templates de component
//todo: intentar simplificar tomando como referencia MlSelectfield, aunque igual no funcionan template forms
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var mdl_textfield_1 = require("./mdl_textfield");
var ml = require("../../../lib/ml_lib");
var MlTextfield = (function () {
    function MlTextfield(host, ren) {
        this.host = host;
        this.ren = ren;
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
        if (!this.id)
            this.id = ml.randomStr();
        ml.setClass(this.host, 'mdl-textfield', this.ren);
        if (this.floating === '')
            ml.setClass(this.host, 'mdl-textfield--floating-label', this.ren);
        if (this.disabled === 'true')
            this.mdlTextfield.disable();
        this.mdlTextfield = new mdl_textfield_1.default(this.host.nativeElement);
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
        __metadata('design:type', Object)
    ], MlTextfield.prototype, "errors", void 0);
    __decorate([
        //todo: igual se puede restringir a object
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlTextfield.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlTextfield.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlTextfield.prototype, "floating", void 0);
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
            selector: 'mdl-textfield',
            moduleId: module.id.toString(),
            styleUrls: ['./ml_textfield.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [{ provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return MlTextfield; }), multi: true }],
            template: "\n\n<input type=\"text\" class=\"mdl-textfield__input\" \n  [attr.id]=\"id\" \n  [name]=\"name\"\n  [(ngModel)]=\"model\" \n  (focus)=\"onFocus()\" \n  (keyup)=\"onKeyup()\">\n<label class=\"mdl-textfield__label\" [attr.for]=\"id\">\n  <ng-content select=\"mdl-textfield-label\"></ng-content>\n</label>\n\n<div *ngIf=\"showError\" class=\"mdl-textfield__error\">\n  <ng-content select=\"ml-error\"></ng-content>\n</div>\n\n" //template
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MlTextfield);
    return MlTextfield;
}());
exports.MlTextfield = MlTextfield;
//# sourceMappingURL=ml_textfield.js.map