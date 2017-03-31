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
//todo: <input type="image"> not tested
var ML_BUTTON_SUBMIT_TYPES = ['submit', 'reset', 'button', 'color', 'file', 'image'];
var ML_BUTTON_ASPECTS = ['raised', 'colored', 'accent'];
var MlButtonSubmit = (function () {
    function MlButtonSubmit(ren) {
        this.ren = ren;
        this.type = 'submit';
    }
    MlButtonSubmit.prototype.ngOnInit = function () {
        if (!ml.isAttributeValid(this.type.toLowerCase(), ML_BUTTON_SUBMIT_TYPES)) {
            console.warn("<ml-button-submit> Wrong attribute: type=\"" + this.type + "\"");
        }
        if (!ml.isAttributeValid(this.aspect.toLowerCase(), ML_BUTTON_ASPECTS)) {
            console.warn("<ml-button-submit> Wrong attribute: aspect=\"" + this.aspect + "\"");
        }
        ml.isSubstring('raised', this.aspect) && ml.setClass(this.input, 'mdl-button--raised', this.ren);
        ml.isSubstring('colored', this.aspect) && ml.setClass(this.input, 'mdl-button--colored', this.ren);
        ml.isSubstring('accent', this.aspect) && ml.setClass(this.input, 'mdl-button--accent', this.ren);
        new mdButtonLib_1.default(this.input.nativeElement);
    };
    __decorate([
        core_1.ViewChild('input'), 
        __metadata('design:type', core_1.ElementRef)
    ], MlButtonSubmit.prototype, "input", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlButtonSubmit.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlButtonSubmit.prototype, "aspect", void 0);
    __decorate([
        // Possible values: [rised, colored, accent] (in lowercase)
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlButtonSubmit.prototype, "text", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlButtonSubmit.prototype, "disabled", void 0);
    MlButtonSubmit = __decorate([
        core_1.Component({
            selector: 'ml-button-submit',
            moduleId: module.id,
            styleUrls: ['./mlButton.css'],
            template: "\n\n<div class=\"mdl-button\" style=\"padding: 3px\">\n<input #input [attr.type]=\"type\" [attr.value]=\"text\" [disabled]=\"disabled\" class=\"mdl-button\" style=\"pointer-events: auto\" />\n<!--<span class=\"mdl-button__ripple-container\" style=\"z-index: -10;\">-->\n<span class=\"mdl-button__ripple-container\" style=\"pointer-events: none\"><span class=\"mdl-ripple\"></span></span>\n</div>\n\n" //template
        }), 
        __metadata('design:paramtypes', [core_1.Renderer])
    ], MlButtonSubmit);
    return MlButtonSubmit;
}());
exports.MlButtonSubmit = MlButtonSubmit;
