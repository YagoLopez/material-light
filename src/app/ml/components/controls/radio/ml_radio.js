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
var mdl_radio_1 = require("./mdl_radio");
var forms_1 = require("@angular/forms");
var MlRadio = (function () {
    function MlRadio() {
        this.onTouched = function () { };
        this.onChanged = function (_) { };
    }
    MlRadio.prototype.isChecked = function () {
        return this.mdlRadio.btnElement_.checked;
    };
    MlRadio.prototype.ngOnInit = function () {
        this.mdlRadio = new mdl_radio_1.default(this.label.nativeElement);
        if (this.disabled && (this.disabled.toLowerCase() === 'true'))
            this.mdlRadio.disable();
    };
    Object.defineProperty(MlRadio.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (v) {
            if (v !== this._model) {
                this._model = v;
            }
            this.onChanged(v);
        },
        enumerable: true,
        configurable: true
    });
    MlRadio.prototype.writeValue = function (value) {
        this._model = value;
    };
    MlRadio.prototype.registerOnChange = function (fn) {
        this.onChanged = fn;
    };
    MlRadio.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    __decorate([
        core_1.ViewChild('label'), 
        __metadata('design:type', core_1.ElementRef)
    ], MlRadio.prototype, "label", void 0);
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
    MlRadio = __decorate([
        core_1.Component({
            selector: 'ml-radio',
            moduleId: module.id.toString(),
            styleUrls: ['./ml_radio.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [{ provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return MlRadio; }), multi: true }],
            template: "\n\n<label [attr.for]=\"id+'mdl'\" class=\"mdl-radio\" [ngClass]=\"{'is-checked': isChecked()}\" #label>\n  <input type=\"radio\" class=\"mdl-radio__button\" \n          [attr.id]=\"id+'mdl'\" \n          [name]=\"name\" \n          [value]=\"value\" \n          [(ngModel)]=\"model\">\n  <span class=\"mdl-radio__label\"><ng-content></ng-content></span>\n</label>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], MlRadio);
    return MlRadio;
}());
exports.MlRadio = MlRadio;
//# sourceMappingURL=ml_radio.js.map