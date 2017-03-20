//todo: comprobar validez atributos aspect
//todo: control de excepciones en angular 2
//todo: revisar con linting e inspections al maximo, hay cosas que se pueden quitar y mejorar

import {Component, ElementRef, Input, Renderer, ViewEncapsulation} from "@angular/core";
import MdlButton from "./mdButtonLib";
import * as ml from "../../../lib/ml_lib";

// aspect="colored" => background blue, font-color white
// aspect="accent" => background magenta, font-color white
const ML_BUTTON_ASPECTS = ['raised, colored, accent'];
const ML_BUTTON_VARIANTS = ['fab', 'minifab', 'icon'];

@Component({
selector: 'ml-button',
// moduleId: module.id.toString(),
encapsulation: ViewEncapsulation.None,
styleUrls: ['./mlButton.css'],
host: {class: 'mdl-button'},
template:'<ng-content></ng-content>'
})
export class MlButton{

  @Input() aspect: string;
  @Input() variant: string;
  constructor(public host: ElementRef, private ren: Renderer){}

  ngOnInit(){
    // Button "aspect" --------------------------------------------------------------------------------------------------
    if( this.variant && !ml.isAttributeValid(this.variant.toLowerCase(), ML_BUTTON_VARIANTS) ){
      console.warn(`<ml-button> Wrong attribute: variant="${this.variant}"`);
    }
    if (ml.isSubstring('raised', this.aspect)){
      ml.setClass(this.host, 'mdl-button--raised', this.ren);
    }
    if (ml.isSubstring('colored', this.aspect)){
      ml.setClass(this.host, 'mdl-button--colored', this.ren);
    }
    if (ml.isSubstring('accent', this.aspect)){
      ml.setClass(this.host, 'mdl-button--accent', this.ren);
    }
   // Button "variant" ----------------------------------------------------------------------------------------------------
    if (ml.isSubstring('fab', this.variant)){
      ml.setClass(this.host, 'mdl-button--fab', this.ren);
    }
    if (ml.isSubstring('minifab', this.variant)){
      ml.setClass(this.host, 'mdl-button--fab', this.ren);
      ml.setClass(this.host, 'mdl-button--mini-fab', this.ren);
    }
    if (ml.isSubstring('icon', this.variant)){
      ml.setClass(this.host, 'mdl-button--icon', this.ren);
    }
   // End --------------------------------------------------------------------------------------------------------------

    new MdlButton(this.host.nativeElement);
  }

  disable(){
    this.host.nativeElement.setAttribute('disabled', true);
  }
  enable(){
    this.host.nativeElement.removeAttribute('disabled');
  }
}
