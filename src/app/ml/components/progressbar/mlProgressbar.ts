//todo: hay que revisar como se pueden añadir estilos al componnente. por ejemplo definir el añcho de la barra globalmente
//todo: cambiar la instanciacion de los objetos Material en el constructor en vez de en el ciclo ngOnInit()
//todo: probar a sacar factor comun en una factoria a los constructores para evitar repetir tanto codigo
//todo: cambiar todas las declaraciones declare var material*: any -> declare var material*: Object

import {Component, ElementRef, Input, Renderer, ViewEncapsulation} from "@angular/core";
import MdlProgress from "./mlPprogressLib"
import * as ml from "../../lib/ml_lib";

@Component({
selector: 'ml-progressbar',
styleUrls: ['./mlProgressbar.css'],
// moduleId: module.id.toString(),
encapsulation: ViewEncapsulation.None,
host: {class: 'mdl-progress'},
template: ''
})
export class MlProgressbar {

  @Input('progress') progressValue: string = '0';
  @Input('buffer') bufferValue: string; // BUFFER must be greater than PROGRESS to be visible
  @Input() indeterminate: string;

  mdlProgress: any;

  constructor(
    private host: ElementRef,
    private ren: Renderer){
    this.mdlProgress = new MdlProgress(this.host.nativeElement);
  }

  setProgress(value: string){
    this.progressValue = value;
    this.mdlProgress.setProgress(value);
  }

  setBuffer(value: string){
    // this.progressValue = value;
    this.bufferValue = value;
    this.mdlProgress.setBuffer(value);
  }

  ngOnInit() {
    if (this.progressValue)
      this.setProgress(this.progressValue);

    if (this.bufferValue)
      this.setBuffer(this.bufferValue);

    if (this.indeterminate === '')
      ml.setClass(this.host, 'mdl-progress__indeterminate', this.ren);
  }

}