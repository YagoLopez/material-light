// [attr.id]= "id+'mdl'" => adds sufix 'mdl' to avoid collision width <ml-checkbox id> attribute
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
// Options groups checkboxes not supported?
//todo: una forma de arreglar lo de no cargar varias veces 'ml_ripple.css' es poniendo los estilos mdl-ripple en
//el fichero general 'material.css' pero puede haber problemas con la encapsulacion
//todo: otra forma: si el attributo de entrada RIPPLE esta definido, cargar la hoja de estilos 'ml_ripple.css'
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var mlCheckboxLib_1 = require('./mlCheckboxLib');
var MlCheckbox = (function () {
    function MlCheckbox() {
        this.onTouch = function () { };
        this.onChange = function (_) { };
    }
    MlCheckbox.prototype.ngOnInit = function () {
        this.mdlCheckbox = new mlCheckboxLib_1.default(this.label.nativeElement);
        if (this.disabled && (this.disabled.toLowerCase() == 'true'))
            this.mdlCheckbox.disable();
    };
    Object.defineProperty(MlCheckbox.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            this._model = value;
            this.onChange(value);
        },
        enumerable: true,
        configurable: true
    });
    MlCheckbox.prototype.writeValue = function (value) { this.model = value; };
    MlCheckbox.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    MlCheckbox.prototype.registerOnTouched = function (fn) { this.onTouch = fn; };
    MlCheckbox.prototype.isChecked = function () { return this._model == true; };
    __decorate([
        core_1.ViewChild('label'), 
        __metadata('design:type', core_1.ElementRef)
    ], MlCheckbox.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlCheckbox.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlCheckbox.prototype, "disabled", void 0);
    MlCheckbox = __decorate([
        core_1.Component({
            selector: 'ml-checkbox',
            moduleId: module.id,
            styleUrls: ['./mlCheckbox.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [{ provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return MlCheckbox; }), multi: true }],
            template: "\n\n<label #label [attr.for]=\"id+'mdl'\" class=\"mdl-checkbox\" [ngClass]=\"{'is-checked': isChecked()}\">\n  <input type=\"checkbox\" [attr.id]=\"id+'mdl'\" class=\"mdl-checkbox__input\" [(ngModel)]=\"model\" [disabled]=\"disabled\">\n  <span class=\"mdl-checkbox__label\"><ng-content></ng-content></span>\n  <span class=\"mdl-checkbox__ripple-container mdl-ripple--center\">\n    <span class=\"mdl-ripple is-animating\"></span>\n  </span>\n</label>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], MlCheckbox);
    return MlCheckbox;
}());
exports.MlCheckbox = MlCheckbox;
