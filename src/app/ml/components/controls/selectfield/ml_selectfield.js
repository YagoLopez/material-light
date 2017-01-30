//todo: hacer el icono fijo
//todo: arreglar id de input, por ejemplo ahora esta asi: id="sample1"
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
var ml_button_1 = require("../../controls/button/ml_button");
var mdl_menu_1 = require("./mdl_menu");
var mdl_textfield_1 = require("./mdl_textfield");
var ml = require("../../../lib/ml_lib");
// ---------------------------------------------------------------------------------------------------------------------
var MlSelectfield = (function () {
    function MlSelectfield(ren) {
        this.ren = ren;
        this.className = {
            BOTTOM_LEFT: 'mdl-menu--bottom-left',
            BOTTOM_RIGHT: 'mdl-menu--bottom-right',
            TOP_LEFT: 'mdl-menu--top-left',
            TOP_RIGHT: 'mdl-menu--top-right',
        };
    }
    MlSelectfield.prototype.itemSelected = function ($event) {
        this.labelField.nativeElement.textContent = '';
        this.inputField.nativeElement.value = $event.target.textContent;
        this.formControl.setValue($event.target.textContent);
        this.formControl.markAsTouched(true);
    };
    MlSelectfield.prototype.onClickSelect = function ($event) {
        this.mdlMenu.show();
        // this.formControl.markAsTouched(true);
    };
    MlSelectfield.prototype.ngOnInit = function () {
        if (!this.id) {
            this.id = ml.randomStr();
        }
        if (this.ripple === '') {
            ml.setClass(this.mdlButton.host, 'mdl-js-ripple-effect', this.ren);
            ml.setClass(this.menuList, 'mdl-js-ripple-effect', this.ren);
        }
    };
    MlSelectfield.prototype.ngAfterViewInit = function () {
        if (this.position) {
            var positionClass = this.getMenuPosition(this.position);
            ml.setClass(this.menuList, positionClass, this.ren);
        }
        this.mdlMenu = new mdl_menu_1.default(this.menuList.nativeElement);
        this.mdlTextfield = new mdl_textfield_1.default(this.inputField.nativeElement);
    };
    /**
     * Get menu position from input attribute POSITION.
     *
     * @param position {string} Input Menu position relative to screen corners.
     * @returns {string} Class name defining position
     *
     * Allowed values: [top-left, top-right, bottom-left, bottom, right] (in lower case)
     */
    MlSelectfield.prototype.getMenuPosition = function (position) {
        // todo: class names are wrong?
        var mdlClassName = "";
        if (position === 'top-left') {
            mdlClassName = this.className.BOTTOM_LEFT;
        }
        if (position === 'top-right') {
            mdlClassName = this.className.BOTTOM_RIGHT;
        }
        if (position === 'bottom-left') {
            mdlClassName = this.className.TOP_LEFT;
        }
        if (position === 'bottom-right') {
            mdlClassName = this.className.TOP_RIGHT;
        }
        return mdlClassName;
    };
    MlSelectfield.prototype.writeValue = function (value) {
        if (value) {
            this.labelField.nativeElement.textContent = '';
            this.inputField.nativeElement.value = value;
        }
        console.log('writing value:', value);
    };
    MlSelectfield.prototype.registerOnChange = function (fn) { };
    MlSelectfield.prototype.registerOnTouched = function (fn) { };
    __decorate([
        core_1.ViewChild('menuList'), 
        __metadata('design:type', core_1.ElementRef)
    ], MlSelectfield.prototype, "menuList", void 0);
    __decorate([
        core_1.ViewChild('mdlButton'), 
        __metadata('design:type', ml_button_1.MlButton)
    ], MlSelectfield.prototype, "mdlButton", void 0);
    __decorate([
        core_1.ViewChild('inputField'), 
        __metadata('design:type', core_1.ElementRef)
    ], MlSelectfield.prototype, "inputField", void 0);
    __decorate([
        core_1.ViewChild('labelField'), 
        __metadata('design:type', core_1.ElementRef)
    ], MlSelectfield.prototype, "labelField", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormControl)
    ], MlSelectfield.prototype, "formControl", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlSelectfield.prototype, "position", void 0);
    __decorate([
        //todo: eliminar
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlSelectfield.prototype, "ripple", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlSelectfield.prototype, "id", void 0);
    MlSelectfield = __decorate([
        core_1.Component({
            selector: 'ml-selectfield',
            styleUrls: ['./ml_menu.css', './ml_textfield.css', './getmdl-select.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            moduleId: module.id.toString(),
            providers: [{ provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return MlSelectfield; }), multi: true }],
            template: "\n\n<style>\n  .select-field{padding-left: 33px !important; cursor: pointer;}\n  .select-label{padding-left: 33px !important; cursor: pointer;}\n</style>\n\n<div class=\"mdl-textfield getmdl-select\">\n  <input #inputField class=\"mdl-textfield__input select-field\" type=\"text\" id=\"sample1\"\n         (click)=\"onClickSelect($event)\" readonly>\n  <label #labelField class=\"mdl-textfield__label select-label\" \n         for=\"sample1\">Choose one option...</label>\n  <ml-button [attr.id]=\"id\" type=\"icon\" #mdlButton><ml-icon>keyboard_arrow_down</ml-icon></ml-button>\n  <ul class=\"mdl-menu\" [attr.for]=\"id\" #menuList (click)=\"itemSelected($event)\">\n    <ng-content select=\"ml-sf-item\"></ng-content>\n  </ul>         \n</div>\n\n" //template
        }), 
        __metadata('design:paramtypes', [core_1.Renderer])
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
        if (this.divider === '') {
            ml.setClass(this.selectfieldItem, 'mdl-menu__item--full-bleed-divider', this.ren);
        }
        if (this.disabled === '') {
            ml.setAttribute(this.selectfieldItem, 'disabled', '', this.ren);
        }
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
            template: '<li class="mdl-menu__item" #selectfieldItem><ng-content></ng-content></li>'
        }), 
        __metadata('design:paramtypes', [core_1.Renderer])
    ], MlSelectfieldItem);
    return MlSelectfieldItem;
}());
exports.MlSelectfieldItem = MlSelectfieldItem;
//# sourceMappingURL=ml_selectfield.js.map