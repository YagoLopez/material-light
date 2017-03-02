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
var MlRipple = (function () {
    function MlRipple(host, ren) {
        this.host = host;
        this.ren = ren;
        this.rippleClassName = 'mdl-js-ripple-effect';
    }
    /*
      ngOnInit(){
        ml.setClass(this.host, 'mdl-js-ripple-effect', this.ren);
    
        // Ripple effect must be applied after the element creation.
        // Using setTimeout() the html element where the ripple effect is applied is created by the main thread
        // and the ripple efect is created in a secondary thread
        setTimeout(()=> {
          //todo: aqui se podria buscar el elemento donde aplicar el efecto ripple.
          new MdlRipple(this.host.nativeElement);
        }, 0)
      }
    */
    MlRipple.prototype.ngOnInit = function () {
        // ml.setClass(this.host, 'mdl-js-ripple-effect', this.ren);
        // debugger;
        var elementWithRipple;
        // if (this.host.nativeElement.firstElementChild){
        //   // The element where ripple effect will be applied will be host's first element child
        //   console.log('first child existe', this.host.nativeElement.firstElementChild);
        //   elementWithRipple = this.host.nativeElement.firstElementChild;
        // } else {
        //   // There is no child elements. The element where ripple effect will be applied will be host
        //   console.log('first child no existe', this.host.nativeElement);
        //   elementWithRipple = this.host.nativeElement;
        // }
        elementWithRipple = this.host.nativeElement;
        this.ren.setElementClass(elementWithRipple, 'mdl-js-ripple-effect', true);
        // Ripple effect must be applied after the element creation.
        // Using setTimeout() the html element where the ripple effect is applied is created by the main thread
        // and the ripple efect is created in a secondary thread
        setTimeout(function () {
            //todo: aqui se podria buscar el elemento donde aplicar el efecto ripple.
            new mlRippleLib_1.default(elementWithRipple);
        }, 0);
    };
    MlRipple = __decorate([
        core_1.Directive({
            selector: '[ripple]',
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MlRipple);
    return MlRipple;
}());
exports.MlRipple = MlRipple;
//# sourceMappingURL=mlRipple.js.map