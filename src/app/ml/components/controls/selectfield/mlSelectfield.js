//todo: testar textfield con tipo: file, color, etc.
//todo: (general) usar esta nomenclatura para componentes (Ej: MlTextfieldCmp)
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
// NOTE: this component ("MlSelectfield") is based on "MlButton", "MdlMenu" and "MdlTextfield"
// For this reason it uses files from these components
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var mlButton_1 = require("../button/mlButton");
var mlMenuLib_1 = require("../../menu/mlMenuLib");
var mlTextfieldLib_1 = require("../textfield/mlTextfieldLib");
var ml = require("../../../lib/ml_lib");
// ---------------------------------------------------------------------------------------------------------------------
var MlSelectfield = (function () {
    function MlSelectfield(ren, host) {
        this.ren = ren;
        this.host = host;
        this.labelText = 'Choose one option...';
    }
    MlSelectfield.prototype.itemSelected = function ($event) {
        this.label.nativeElement.textContent = '';
        this.input.nativeElement.value = $event.target.textContent;
        this.formControl.setValue($event.target.textContent);
        this.formControl.markAsTouched(true);
    };
    MlSelectfield.prototype.clickInput = function () {
        this.mdlMenu.toggle();
    };
    MlSelectfield.prototype.ngOnInit = function () {
        this.idBtn = ml.randomStr();
        if (this.ripple === '') {
            ml.setClass(this.mdlButton.host, 'mdl-js-ripple-effect', this.ren);
            ml.setClass(this.menuList, 'mdl-js-ripple-effect', this.ren);
        }
    };
    MlSelectfield.prototype.ngAfterViewInit = function () {
        this.mdlMenu = new mlMenuLib_1.default(this.menuList.nativeElement);
        this.mdlTextfield = new mlTextfieldLib_1.default(this.input.nativeElement);
    };
    MlSelectfield.prototype.writeValue = function (value) {
        if (value) {
            this.label.nativeElement.textContent = '';
            this.input.nativeElement.value = value;
        }
    };
    MlSelectfield.prototype.registerOnChange = function (fn) { };
    MlSelectfield.prototype.registerOnTouched = function (fn) { };
    __decorate([
        core_1.ViewChild('menuList'), 
        __metadata('design:type', core_1.ElementRef)
    ], MlSelectfield.prototype, "menuList", void 0);
    __decorate([
        core_1.ViewChild('mdlButton'), 
        __metadata('design:type', mlButton_1.MlButton)
    ], MlSelectfield.prototype, "mdlButton", void 0);
    __decorate([
        core_1.ViewChild('input'), 
        __metadata('design:type', core_1.ElementRef)
    ], MlSelectfield.prototype, "input", void 0);
    __decorate([
        core_1.ViewChild('label'), 
        __metadata('design:type', core_1.ElementRef)
    ], MlSelectfield.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormControl)
    ], MlSelectfield.prototype, "formControl", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlSelectfield.prototype, "ripple", void 0);
    __decorate([
        core_1.Input('label'), 
        __metadata('design:type', Object)
    ], MlSelectfield.prototype, "labelText", void 0);
    MlSelectfield = __decorate([
        core_1.Component({
            selector: 'ml-selectfield',
            moduleId: module.id,
            styleUrls: ['./mlSelectfield.css', '../../menu/mlMenu.css', '../textfield/mlTextfield.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [{ provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return MlSelectfield; }), multi: true }],
            template: "\n\n<div class=\"mdl-textfield dropdown-width getmdl-select\">\n  <input #input type=\"text\" class=\"mdl-textfield__input input-field\" (click)=\"clickInput()\" readonly>\n  <label #label class=\"mdl-textfield__label input-label\">{{ labelText }}</label>\n  <ml-button #mdlButton variant=\"icon\" [attr.id]=\"idBtn\" class=\"menu-btn\">\n    <ml-icon>keyboard_arrow_down</ml-icon>\n  </ml-button>\n  <ul #menuList [attr.for]=\"idBtn\" class=\"getmdl-select__fullwidth mdl-menu\" (click)=\"itemSelected($event)\">\n    <ng-content select=\"ml-sf-item\"></ng-content>\n  </ul>         \n</div>\n\n" //template
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], MlSelectfield);
    return MlSelectfield;
}());
exports.MlSelectfield = MlSelectfield;
// ---------------------------------------------------------------------------------------------------------------------
var MlSelectfieldItem = (function () {
    function MlSelectfieldItem(ren) {
        this.ren = ren;
    }
    MlSelectfieldItem.prototype.ngOnInit = function () {
        ml.isDefined(this.divider) && ml.setClass(this.selectfieldItem, 'mdl-menu__item--full-bleed-divider', this.ren);
        ml.isDefined(this.disabled) && ml.setAttribute(this.selectfieldItem, 'disabled', '', this.ren);
    };
    __decorate([
        core_1.ViewChild('selectfieldItem'), 
        __metadata('design:type', core_1.ElementRef)
    ], MlSelectfieldItem.prototype, "selectfieldItem", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlSelectfieldItem.prototype, "divider", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlSelectfieldItem.prototype, "disabled", void 0);
    MlSelectfieldItem = __decorate([
        core_1.Component({
            selector: 'ml-sf-item',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            template: '<li class="mdl-menu__item" #selectfieldItem><ng-content></ng-content></li>'
        }), 
        __metadata('design:paramtypes', [core_1.Renderer])
    ], MlSelectfieldItem);
    return MlSelectfieldItem;
}());
exports.MlSelectfieldItem = MlSelectfieldItem;
