//todo: nota. probablemente no haya que usar host en el componente padre para poder encapsular los estilos y no
// tener que usar viewencapsulation.none; sin embargo si puede ser util usar host en componentes hijos

import {Component, ElementRef, Input, Renderer, ViewChild} from '@angular/core';
import MdlTooltip from "./mlTooltipLib";
import * as ml from "../../lib/ml_lib";

@Component({
selector: 'ml-tooltip',
styleUrls: ['./mlTooltip.css'],
template: '<span [attr.for]="for" class="mdl-tooltip" #spanTooltip><ng-content></ng-content></span>',
moduleId: module.id
})
export class MlTooltip {

  @ViewChild('spanTooltip') spanTooltip: ElementRef;
  @Input() for: string;
  @Input() position: string;  // todo: revisar position values: [right, left, top, bottom]
  @Input() large: string;

  constructor(private ren: Renderer){}

  ngAfterViewInit(){
    ml.isDefined(this.large) && ml.setClass(this.spanTooltip, 'mdl-tooltip--large', this.ren);

    if (this.position === 'right')
      ml.setClass(this.spanTooltip, 'mdl-tooltip--right', this.ren);

    if (this.position === 'left')
      ml.setClass(this.spanTooltip, 'mdl-tooltip--left', this.ren);

    if (this.position === 'top')
      ml.setClass(this.spanTooltip, 'mdl-tooltip--top', this.ren);

    if (this.position === 'bottom')
      ml.setClass(this.spanTooltip, 'mdl-tooltip--bottom', this.ren);

    new MdlTooltip(this.spanTooltip.nativeElement);
  }

}
