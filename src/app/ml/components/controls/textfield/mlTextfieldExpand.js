//todo: intentar que funcione sin usar un formulario (en template driven forms)
//todo: revisar las classes de error en IE
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
var MlTextfieldExpand = (function () {
    function MlTextfieldExpand(host, ren) {
        this.host = host;
        this.ren = ren;
        this.onTouch = function () { };
        this.onChange = function (_) { };
    }
    MlTextfieldExpand.prototype.checkValidity = function () {
        if (this.formControl && this.formControl.invalid) {
            ml.setClass(this.host, 'is-invalid', this.ren);
            this.showError = true;
        }
        else {
            this.host.nativeElement.classList.remove('is-invalid');
            this.showError = false;
        }
    };
    MlTextfieldExpand.prototype.onFocus = function () {
        this.formControl.markAsTouched(true);
        this.checkValidity();
    };
    MlTextfieldExpand.prototype.onKeyup = function () {
        this.formControl.markAsTouched(true);
        this.checkValidity();
    };
    Object.defineProperty(MlTextfieldExpand.prototype, "model", {
        get: function () { return this._model; },
        set: function (value) {
            this._model = value;
            this.onChange(value);
        },
        enumerable: true,
        configurable: true
    });
    MlTextfieldExpand.prototype.ngOnInit = function () {
        if (!this.id) {
            this.id = ml.randomStr();
        }
        ml.setClass(this.host, 'mdl-textfield', this.ren);
        ml.setClass(this.host, 'mdl-textfield--expandable', this.ren);
        if (this.disabled === 'true') {
            this.mlTextfield.disable();
        }
        this.mlTextfield = new mlTextfieldLib_1.default(this.host.nativeElement);
    };
    MlTextfieldExpand.prototype.writeValue = function (value) {
        this._model = value;
        value && this.mlTextfield.change(value);
    };
    MlTextfieldExpand.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    MlTextfieldExpand.prototype.registerOnTouched = function (fn) { this.onTouch = fn; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MlTextfieldExpand.prototype, "errors", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlTextfieldExpand.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlTextfieldExpand.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlTextfieldExpand.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormControl)
    ], MlTextfieldExpand.prototype, "formControl", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlTextfieldExpand.prototype, "icon", void 0);
    MlTextfieldExpand = __decorate([
        core_1.Component({
            selector: 'ml-textfield-expand',
            moduleId: module.id,
            styleUrls: ['./mlTextfield.css', '../button/mlButton.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [{ provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return MlTextfieldExpand; }), multi: true }],
            template: "\n\n<label class=\"mdl-button mdl-button--icon\" [attr.for]=\"id\"><ml-icon>{{icon}}</ml-icon></label>\n<div class=\"mdl-textfield__expandable-holder\">\n  <input type=\"text\" class=\"mdl-textfield__input\" [attr.id]=\"id\" [name]=\"name\" [(ngModel)]=\"model\" \n    (focus)=\"onFocus()\" (keyup)=\"onKeyup()\">\n  <label class=\"mdl-textfield__label\" [attr.for]=\"id\"></label>\n</div>\n<div *ngIf=\"showError\" class=\"mdl-textfield-expand-error\"><ng-content select=\"ml-error\"></ng-content></div>\n\n" //template
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MlTextfieldExpand);
    return MlTextfieldExpand;
}());
exports.MlTextfieldExpand = MlTextfieldExpand;
