//todo: control de excepciones en angular 2
//todo: revisar con linting e inspections al maximo, hay cosas que se pueden quitar y mejorar

import {Component, ElementRef, Input, Renderer, ViewEncapsulation} from "@angular/core";
import MdlButton from "./mdl_button";
import * as ml from "../../../lib/ml_lib";

// NOTE: For incompatible attributes check: https://getmdl.io/components/index.html#buttons-section

@Component({
selector: 'ml-button',
moduleId: module.id.toString(),
encapsulation: ViewEncapsulation.None,
styleUrls: ['./ml_button.css'],
host: {class: 'mdl-button'},
template:'<ng-content></ng-content>'
})
export class MlButton{

  @Input() aspect: string; // Admited values: [rised, colored, accent]* (* in lowercase)
  @Input() type: string;   // Admited values: [fav, minifab, icon]*

  constructor(
    public host: ElementRef,
    private ren: Renderer){
  }

  ngOnInit(){
   // Input "aspect" ---------------------------------------------------------------------------------------------------

    if (ml.isSubstring('raised', this.aspect)){
      ml.setClass(this.host, 'mdl-button--raised', this.ren);
    }
    if (ml.isSubstring('colored', this.aspect)){
      ml.setClass(this.host, 'mdl-button--colored', this.ren);
    }
    if (ml.isSubstring('accent', this.aspect)){
      ml.setClass(this.host, 'mdl-button--accent', this.ren);
    }
   // Input "type" -----------------------------------------------------------------------------------------------------

    if (ml.isSubstring('fab', this.type)){
      ml.setClass(this.host, 'mdl-button--fab', this.ren);
    }
    if (ml.isSubstring('minifab', this.type)){
      ml.setClass(this.host, 'mdl-button--fab', this.ren);
      ml.setClass(this.host, 'mdl-button--mini-fab', this.ren);
    }
    if (ml.isSubstring('icon', this.type)){
      ml.setClass(this.host, 'mdl-button--icon', this.ren);
    }
   // End --------------------------------------------------------------------------------------------------------------

    new MdlButton(this.host.nativeElement);
  }

}
