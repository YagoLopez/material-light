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
var mlSliderLib_1 = require("./mlSliderLib");
var ml = require("../../../lib/ml_lib");
var MlSlider = (function () {
    function MlSlider(host, ren) {
        this.host = host;
        this.ren = ren;
    }
    MlSlider.prototype.change = function (value) {
        this.mdlSlider.change(value);
    };
    MlSlider.prototype.ngOnInit = function () {
        ml.setAttribute(this.host, 'type', 'range', this.ren);
        this.mdlSlider = new mlSliderLib_1.default(this.host.nativeElement);
    };
    MlSlider = __decorate([
        core_1.Component({
            selector: 'input.[ml-slider]',
            styleUrls: ['./mlSlider.css'],
            host: { class: 'mdl-slider' },
            encapsulation: core_1.ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            template: '',
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MlSlider);
    return MlSlider;
}());
exports.MlSlider = MlSlider;
