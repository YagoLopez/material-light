//todo: intentar funsionar ambos tipos de botones: normal y submit

import {Component, ElementRef, Input, Renderer, ViewEncapsulation, ViewChild} from "@angular/core";
import MdlButton from "./mdButtonLib";
import * as ml from "../../../lib/ml_lib";

@Component({
selector: 'ml-button-submit',
// moduleId: module.id.toString(),
styleUrls: ['./mlButton.css'],
template: '<input type="submit" class="mdl-button" [attr.value]="value" [disabled]="disabled" #input>'
})
export class MlButtonSubmit{

  @ViewChild('input') input: ElementRef;
  @Input() aspect: string; // Possible values: [rised, colored, accent] (in lowercase)
  @Input() value: string;
  @Input() disabled: string;

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
    new MdlButton(this.input.nativeElement);
  }
}
