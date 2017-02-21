//todo: intentar funsionar ambos tipos de botones: normal y submit
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
var MlButtonSubmit = (function () {
    function MlButtonSubmit(ren) {
        this.ren = ren;
    }
    MlButtonSubmit.prototype.ngOnInit = function () {
        if (ml.isSubstring('raised', this.aspect)) {
            ml.setClass(this.input, 'mdl-button--raised', this.ren);
        }
        if (ml.isSubstring('colored', this.aspect)) {
            ml.setClass(this.input, 'mdl-button--colored', this.ren);
        }
        if (ml.isSubstring('accent', this.aspect)) {
            ml.setClass(this.input, 'mdl-button--accent', this.ren);
        }
        new mdButtonLib_1.default(this.input.nativeElement);
    };
    __decorate([
        core_1.ViewChild('input'), 
        __metadata('design:type', core_1.ElementRef)
    ], MlButtonSubmit.prototype, "input", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlButtonSubmit.prototype, "aspect", void 0);
    __decorate([
        // Possible values: [rised, colored, accent] (in lowercase)
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlButtonSubmit.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlButtonSubmit.prototype, "disabled", void 0);
    MlButtonSubmit = __decorate([
        core_1.Component({
            selector: 'ml-button-submit',
            // moduleId: module.id.toString(),
            styleUrls: ['./mlButton.css'],
            template: '<input type="submit" class="mdl-button" [attr.value]="value" [disabled]="disabled" #input>'
        }), 
        __metadata('design:paramtypes', [core_1.Renderer])
    ], MlButtonSubmit);
    return MlButtonSubmit;
}());
exports.MlButtonSubmit = MlButtonSubmit;
//# sourceMappingURL=mlButtonSubmit.js.map