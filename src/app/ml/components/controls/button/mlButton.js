//todo: comprobar validez atributos aspect
//todo: control de excepciones en angular 2
//todo: usar enums
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
var mdButtonLib_1 = require("./mdButtonLib");
var ml = require("../../../lib/ml_lib");
// Input attribute values are case-sensitive
// aspect="colored" => background blue, font-color white
// aspect="accent" => background magenta, font-color white
var ML_BUTTON_ASPECTS = ['raised, colored, accent'];
var ML_BUTTON_VARIANTS = ['fab', 'minifab', 'icon'];
var MlButton = (function () {
    function MlButton(host, ren) {
        this.host = host;
        this.ren = ren;
    }
    MlButton.prototype.ngOnInit = function () {
        // Input "aspect" --------------------------------------------------------------------------------------------------
        if (this.variant && !ml.isAttributeValid(this.variant, ML_BUTTON_VARIANTS)) {
            console.warn("<ml-button> Wrong attribute: variant=\"" + this.variant + "\"");
        }
        ml.isSubstring('raised', this.aspect) && ml.setClass(this.host, 'mdl-button--raised', this.ren);
        ml.isSubstring('colored', this.aspect) && ml.setClass(this.host, 'mdl-button--colored', this.ren);
        ml.isSubstring('accent', this.aspect) && ml.setClass(this.host, 'mdl-button--accent', this.ren);
        // Input "variant" --------------------------------------------------------------------------------------------------
        if (ml.isSubstring('minifab', this.variant)) {
            ml.setClass(this.host, 'mdl-button--fab', this.ren);
            ml.setClass(this.host, 'mdl-button--mini-fab', this.ren);
        }
        ml.isSubstring('fab', this.variant) && ml.setClass(this.host, 'mdl-button--fab', this.ren);
        ml.isSubstring('icon', this.variant) && ml.setClass(this.host, 'mdl-button--icon', this.ren);
        // End -------------------------------------------------------------------------------------------------------------
        new mdButtonLib_1.default(this.host.nativeElement);
    };
    MlButton.prototype.disable = function () { this.host.nativeElement.setAttribute('disabled', true); };
    MlButton.prototype.enable = function () { this.host.nativeElement.removeAttribute('disabled'); };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlButton.prototype, "aspect", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlButton.prototype, "variant", void 0);
    MlButton = __decorate([
        core_1.Component({
            selector: 'ml-button',
            moduleId: module.id,
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['./mlButton.css'],
            host: { class: 'mdl-button' },
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MlButton);
    return MlButton;
}());
exports.MlButton = MlButton;
