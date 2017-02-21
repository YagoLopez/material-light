//todo: comprobar si se aplica bien esta directiva a los botones del dialogo
//todo: convertir ml de namespace a mudule. de esta forma se pueden cargar las funciones auxiliares una a una

import {Directive, ElementRef, Renderer} from "@angular/core";
import MdlRipple from "./mdl_ripple";
import * as ml from "../../lib/ml_lib";

@Directive({ selector: '[ripple]' })
export class MlRipple{

  constructor(private host: ElementRef, private ren: Renderer) {}

  ngOnInit(){
    ml.setClass(this.host, 'mdl-js-ripple-effect', this.ren);

    // Ripple effect must be applied without blocking the main thread. Other way, it will throw exception
    setTimeout(()=> {
      //todo: aqui se podria buscar el elemento donde aplicar el efecto ripple. Hay casos donde no basta con
      // aplicarlo a this.host.nativeElement
      new MdlRipple(this.host.nativeElement);
    }, 0)
  }

}