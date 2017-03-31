//todo: hay que revisar como se pueden añadir estilos al componnente. por ejemplo definir el añcho de la barra globalmente
//todo: repensar lo de los atributos sin valor especifico de cara al comportamiento de angular en data-binding:
//todo: [attributo]="valor". Si no hay valor puede que haya problemas

import {Component, ElementRef, Input, Renderer, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";
import MdlSpinner from "./mlSpinnerLib";
import * as ml from "../../lib/ml_lib";

@Component({
selector: 'ml-spinner',
styleUrls: ['./mlSpinner.css'],
encapsulation: ViewEncapsulation.None,
changeDetection: ChangeDetectionStrategy.OnPush,
host: {class: 'mdl-spinner is-active'},
template:``,
moduleId: module.id
})
export class MlSpinner {

  @Input('single-color') singleColor: string;
  @Input('multicolor') multicolor: string;
  @Input('inactive') inactive: string;
  mdlSpinner: MdlSpinner;

  constructor(private host: ElementRef, private ren: Renderer){}
  start(){ this.mdlSpinner.start() }
  stop(){ this.mdlSpinner.stop() }

  ngOnInit() {
    this.mdlSpinner = new MdlSpinner(this.host.nativeElement);
    ml.isDefined(this.singleColor) && ml.setClass(this.host, 'mdl-spinner--single-color', this.ren);
    ml.isDefined(this.inactive) && this.mdlSpinner.stop();
  }
}
