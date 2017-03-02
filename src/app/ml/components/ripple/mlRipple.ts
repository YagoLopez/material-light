//todo: comprobar si se aplica bien esta directiva a los botones del dialogo
//todo: convertir ml de namespace a mudule. de esta forma se pueden cargar las funciones auxiliares una a una

import {Directive, ElementRef, Renderer} from "@angular/core";
import MdlRipple from "./mlRippleLib";
import * as ml from "../../lib/ml_lib";

@Directive({
selector: '[ripple]',
})
export class MlRipple{

  rippleClassName = 'mdl-js-ripple-effect';

  constructor(private host: ElementRef, private ren: Renderer) {}

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
  ngOnInit(){
    // ml.setClass(this.host, 'mdl-js-ripple-effect', this.ren);

    // debugger;
    let elementWithRipple: any;

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
    setTimeout(()=> {
      //todo: aqui se podria buscar el elemento donde aplicar el efecto ripple.
      new MdlRipple(elementWithRipple);
    }, 0)
  }

}