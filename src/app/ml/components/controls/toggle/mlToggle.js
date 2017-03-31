//todo: no crear el contenedor ripple (span) cuando no se usa la directiva ripple
//todo: toggles no funionan bien en edge
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
var mlToggleLib_1 = require('./mlToggleLib');
var MlToggle = (function () {
    function MlToggle() {
        this.onTouch = function () { };
        this.onChange = function (_) { };
    }
    MlToggle.prototype.ngOnInit = function () {
        this.mdlToggle = new mlToggleLib_1.default(this.label.nativeElement);
        if (this.disabled && (this.disabled.toLowerCase() === 'true'))
            this.mdlToggle.disable();
    };
    Object.defineProperty(MlToggle.prototype, "model", {
        get: function () { return this._model; },
        set: function (value) {
            this._model = value;
            this.onChange(value);
        },
        enumerable: true,
        configurable: true
    });
    MlToggle.prototype.writeValue = function (value) { this.model = value; };
    MlToggle.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    MlToggle.prototype.registerOnTouched = function (fn) { this.onTouch = fn; };
    MlToggle.prototype.isChecked = function () { return this.model == true; };
    __decorate([
        core_1.ViewChild('label'), 
        __metadata('design:type', core_1.ElementRef)
    ], MlToggle.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlToggle.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlToggle.prototype, "disabled", void 0);
    MlToggle = __decorate([
        core_1.Component({
            selector: 'ml-toggle',
            moduleId: module.id,
            styleUrls: ['./mlToggle.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [{ provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return MlToggle; }), multi: true }],
            template: "\n\n<label #label [attr.for]=\"id+'mdl'\" class=\"mdl-icon-toggle\" [ngClass]=\"{'is-checked': isChecked()}\">\n  <input type=\"checkbox\"  class=\"mdl-icon-toggle__input\" \n         [attr.id]=\"id+'mdl'\"\n         [(ngModel)]=\"model\" \n         [disabled]=\"disabled\">\n  <span class=\"mdl-icon-toggle__label\"><ng-content></ng-content></span>\n  <span class=\"mdl-icon-toggle__ripple-container\">\n    <span class=\"mdl-ripple\"></span>\n  </span>\n</label>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], MlToggle);
    return MlToggle;
}());
exports.MlToggle = MlToggle;
