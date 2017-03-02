//todo: intentar funsionar ambos tipos de botones: normal y submit

import {Component, ElementRef, Input, Renderer, ViewEncapsulation, ViewChild} from "@angular/core";
import MdlButton from "./mdButtonLib";
import * as ml from "../../../lib/ml_lib";

@Component({
selector: 'ml-button-submit',
// moduleId: module.id.toString(),
styleUrls: ['./mlButton.css'],
// template: '<div><input #input type="submit" class="mdl-button mdl-ripple" [attr.value]="value" [disabled]="disabled"></div>'
template: `
<input #input type="submit" class="mdl-button" [attr.value]="value" [disabled]="disabled">

<!--
<span class="mdl-button__ripple-container">
  <span class="mdl-ripple"></span>
</span>
-->

`//template
})
export class MlButtonSubmit{

  @ViewChild('input') input: ElementRef;
  @Input() aspect: string; // Possible values: [rised, colored, accent] (in lowercase)
  @Input() value: string;
  @Input() disabled: string;
  @Input() ripple: string;

  constructor(private ren: Renderer){}

  ngOnInit(){
    if (ml.isSubstring('raised', this.aspect)){
      ml.setClass(this.input, 'mdl-button--raised', this.ren);
    }
    if (ml.isSubstring('colored', this.aspect)){
      ml.setClass(this.input, 'mdl-button--colored', this.ren);
    }
    if (ml.isSubstring('accent', this.aspect)){
      ml.setClass(this.input, 'mdl-button--accent', this.ren);
    }
    if (ml.isDefined(this.ripple)){
      // this.input.nativeElement.setAttribute('ripple', null);
      // ml.setAttribute(this.input, 'ripple', '', this.ren);
      console.log('submit button', this.input);
    }
    new MdlButton(this.input.nativeElement);
  }
}
