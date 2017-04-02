//todo: crear programaticamente el contenedor de ripple en otros componentes
//      en lugar de crear el contenedor en la platilla. Parece mas eficiente.
//todo: en vez de renderer usar @HostBinding(class.classname) para poner clases en el host de una directiva
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
var mlSwitchLib_1 = require("./mlSwitchLib");
var MlSwitch = (function () {
    function MlSwitch(host, ren) {
        this.host = host;
        this.ren = ren;
        this.onTouch = function () { };
        this.onChange = function (_) { };
    }
    MlSwitch.prototype.ngOnInit = function () {
        this.mdlSwitch = new mlSwitchLib_1.default(this.label.nativeElement);
        if (this.disabled && (this.disabled.toLowerCase() === 'true')) {
            this.mdlSwitch.disable();
        }
    };
    ;
    Object.defineProperty(MlSwitch.prototype, "model", {
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
    MlSwitch.prototype.writeValue = function (value) {
        this.model = value;
    };
    MlSwitch.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    MlSwitch.prototype.registerOnTouched = function (fn) { this.onTouch = fn; };
    MlSwitch.prototype.isChecked = function () { return this.model == true; };
    MlSwitch.prototype.on = function () { this.mdlSwitch.on(); };
    MlSwitch.prototype.off = function () { this.mdlSwitch.off(); };
    __decorate([
        core_1.ViewChild('label'), 
        __metadata('design:type', core_1.ElementRef)
    ], MlSwitch.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlSwitch.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlSwitch.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlSwitch.prototype, "ripple", void 0);
    MlSwitch = __decorate([
        core_1.Component({
            selector: 'ml-switch',
            moduleId: module.id,
            styleUrls: ['./mlSwitch.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [{ provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return MlSwitch; }), multi: true }],
            template: "\n\n<label #label [attr.for]=\"id+'mdl'\" class=\"mdl-switch\" [ngClass]=\"{'is-checked': isChecked()}\">\n  <input type=\"checkbox\" class=\"mdl-switch__input\" \n    [attr.id]=\"id+'mdl'\"\n    [(ngModel)]=\"model\" \n    [disabled]=\"disabled\">\n  <span class=\"mdl-switch__label\"><ng-content></ng-content></span>\n  <span class=\"mdl-switch__ripple-container mdl-ripple--center\"><span class=\"mdl-ripple\"></span></span>\n</label>\n\n" //template
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MlSwitch);
    return MlSwitch;
}());
exports.MlSwitch = MlSwitch;
