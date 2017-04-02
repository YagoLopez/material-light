//todo: comprobar si se aplica bien esta directiva a los botones del dialogo
//todo: convertir ml de namespace a mudule. de esta forma se pueden cargar las funciones auxiliares una a una
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
var mlRippleLib_1 = require("./mlRippleLib");
// Note: in complex elements where is not enough to use the "ripple" attribute, a "<label>" container must be used
var MlRipple = (function () {
    function MlRipple(host, ren) {
        this.host = host;
        this.ren = ren;
    }
    MlRipple.prototype.ngOnInit = function () {
        var elementWithRipple = this.host.nativeElement;
        this.ren.setElementClass(elementWithRipple, 'mdl-js-ripple-effect', true);
        setTimeout(function () {
            new mlRippleLib_1.default(elementWithRipple);
        }, 0);
    };
    MlRipple = __decorate([
        core_1.Directive({ selector: '[ripple]' }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MlRipple);
    return MlRipple;
}());
exports.MlRipple = MlRipple;
