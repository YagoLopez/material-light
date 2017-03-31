import {Component, ElementRef, Input, Renderer, ViewEncapsulation, ViewChild} from "@angular/core";
import MdlButton from "./mdButtonLib";
import * as ml from "../../../lib/ml_lib";

//todo: <input type="image"> not tested
const ML_BUTTON_SUBMIT_TYPES = ['submit', 'reset', 'button', 'color', 'file', 'image'];
const ML_BUTTON_ASPECTS = ['raised', 'colored', 'accent'];

@Component({
selector: 'ml-button-submit',
moduleId: module.id,
styleUrls: ['./mlButton.css'],
template:`

<div class="mdl-button" style="padding: 3px">
<input #input [attr.type]="type" [attr.value]="text" [disabled]="disabled" class="mdl-button" style="pointer-events: auto" />
<!--<span class="mdl-button__ripple-container" style="z-index: -10;">-->
<span class="mdl-button__ripple-container" style="pointer-events: none"><span class="mdl-ripple"></span></span>
</div>

`//template
})
export class MlButtonSubmit{

  @ViewChild('input') input: ElementRef;
  @Input() type: string = 'submit';
  @Input() aspect: string; // Possible values: [rised, colored, accent] (in lowercase)
  @Input() text: string;
  @Input() disabled: string;

  constructor(private ren: Renderer){}

  ngOnInit(){
    if( !ml.isAttributeValid(this.type.toLowerCase(), ML_BUTTON_SUBMIT_TYPES) ){
      console.warn(`<ml-button-submit> Wrong attribute: type="${this.type}"`);
    }
    if( !ml.isAttributeValid(this.aspect.toLowerCase(), ML_BUTTON_ASPECTS) ){
      console.warn(`<ml-button-submit> Wrong attribute: aspect="${this.aspect}"`);
    }
    ml.isSubstring('raised', this.aspect) && ml.setClass(this.input, 'mdl-button--raised', this.ren);
    ml.isSubstring('colored', this.aspect) && ml.setClass(this.input, 'mdl-button--colored', this.ren);
    ml.isSubstring('accent', this.aspect) && ml.setClass(this.input, 'mdl-button--accent', this.ren);
    new MdlButton(this.input.nativeElement);
  }
}
