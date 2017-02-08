//todo: no funcionan bien en edge
//todo: input id undefined por defecto

import {Component, ElementRef, ViewChild, Input, forwardRef, ViewEncapsulation, Renderer} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl} from "@angular/forms";
// import MdlRadio from "./mdl_radio";
import * as ml from "../../../lib/ml_lib";

// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-radio',
moduleId: module.id.toString(),
styleUrls: ['./ml_radio.css'],
encapsulation: ViewEncapsulation.None,
providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MlRadio), multi: true}],
template:`

<!--
<label #label [attr.for]="id+'mdl'" class="mdl-radio">
  <input type="radio" class="mdl-radio__button"
          [attr.id]="id+'mdl'" 
          [name]="name"
          [value]="value"
          [checked]="checked"
          (change)="radioChanged($event)"
          >
  <span class="mdl-radio__label"><ng-content></ng-content></span>
</label>
-->

<label #label [attr.for]="id+'mdl'" class="mdl-radio" [ngClass]="{'is-checked': isChecked()}">
  <input #input type="radio" class="mdl-radio__button"
          [attr.id]="id+'mdl'" 
          [name]="name"
          [value]="value"
          [checked]="checked"
          (click)="onClick($event)"
          >
  <span class="mdl-radio__label"><ng-content></ng-content></span>
  <span class="mdl-radio__outer-circle"></span> 
  <span class="mdl-radio__inner-circle"></span>
  <!--<span class="mdl-radio__ripple-container mdl-js-ripple-effect mdl-ripple&#45;&#45;center" data-upgraded=",MaterialRipple">-->
    <!--<span class="mdl-ripple"></span>-->
  <!--</span>  -->
</label>

<hr/>
name: {{name}} <br>
value: {{value}}<br>
checked: {{isChecked()}} <br>
<hr/>


`//template
})
export class MlRadio implements ControlValueAccessor {

  @ViewChild('label') label: ElementRef;
  @ViewChild('input') input: ElementRef;
  @Input() id: string;
  @Input() name: string;
  @Input() value: string;
  @Input() disabled: string;
  @Input() checked: boolean;

  // private mdlRadio: MdlRadio;
  // private model: any;

  onClick($event){
    // console.log('radio clicked', $event.target.value);
    this.onChanged($event.target.value);
  }

/*
  radioChanged($event){
    console.log('radio changed', $event.target.value);
    // console.log('this.checked', this.checked);
    this.onChanged($event.target.value);
    // console.log(this.mdlRadio);
  }
*/

  isChecked(): boolean{
    // console.log('is checked', this.mdlRadio.btnElement_.checked);
    // return this.mdlRadio.btnElement_.checked;
    console.log('is checked', this.input.nativeElement.checked);
    return this.input.nativeElement.checked;
  }

  ngOnInit(){

    // this.mdlRadio = new MdlRadio(this.label.nativeElement);

    // console.log('model', this._model);
    // console.log('value', this.value);
    // if (this.disabled && (this.disabled.toLowerCase() === 'true'))
    //   this.mdlRadio.disable();
  }

  private onTouched = () => {};
  private onChanged = (_: any) => {
    // console.log('on changed');
  };

  // get value() {
  //   console.log('get value', this.value);
  //   // return this.value;
  //   // return this._model;
  //   return null;
  // }

  // set model(v: any) {
  //   console.log('set value', v);
  //   // if (v !== this._model){
  //   //   this._model = v;
  //   // }
  //   // this.onChanged(v);
  // }

  writeValue(value: any): void {
    if (value === this.value){
      console.log('write value', value);
      this.value = value;
      this.checked = true;
      // this.checked = !this.checked;
      // this.label.nativeElement.classList.add('is-checked');

    }
  }

  registerOnChange(fn: any): void {
    // console.log('register on change');
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    // console.log('register on touched');
    this.onTouched = fn;
  }

}