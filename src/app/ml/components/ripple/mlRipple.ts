//todo: comprobar si se aplica bien esta directiva a los botones del dialogo
//todo: convertir ml de namespace a module. de esta forma se pueden cargar las funciones auxiliares una a una
import {Directive, ElementRef, Renderer} from "@angular/core";
import MdlRipple from "./mdlRippleClass";

// Internal note: in complex elements where is not enough to use one "ripple" attribute,
// a "<label>" container is used
@Directive({selector: '[ripple]'})
export class MlRipple{

  constructor(private host: ElementRef, private ren: Renderer) {}

  ngOnInit(){
    const elementWithRipple = this.host.nativeElement;
    this.ren.setElementClass(elementWithRipple, 'mdl-js-ripple-effect', true);
    setTimeout(()=> {
      new MdlRipple(elementWithRipple);
    }, 0)
  }
}
