//todo: en vez de renderer usar @HostBinding(class.classname) para poner clases en el host de una directiva

import {Component, ViewChild, ElementRef, Input, ViewEncapsulation, forwardRef} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import MdlSwitch from "./mdl_switch";

@Component({
selector: 'ml-switch',
styleUrls: ['./ml_switch.css'],
moduleId: module.id.toString(),
encapsulation: ViewEncapsulation.None,
providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MlSwitch), multi: true}],
template: `

<label [attr.for]="id+'mdl'" class="mdl-switch" [ngClass]="{'is-checked': isChecked()}" #label>
  <input type="checkbox"  class="mdl-switch__input" 
         [attr.id]="id+'mdl'"
         [(ngModel)]="model" 
         [disabled]="disabled">
  <span class="mdl-switch__label"><ng-content></ng-content></span>
</label>

`//template
})
export class MlSwitch implements ControlValueAccessor {

  @ViewChild('label') label: ElementRef;
  @Input() id: string;
  @Input() disabled: string;
  
  mdlSwitch: MdlSwitch;

  // _model = undefined or null => unchecked
  // _model = true => checked
  // _model = false => unckeched
  // _model = (any value) => checked
  private _model: any;

  ngOnInit() {
    this.mdlSwitch = new MdlSwitch(this.label.nativeElement);
    if(this.disabled && (this.disabled.toLowerCase() === 'true')){
      this.mdlSwitch.disable();
    }
  }

  private onTouch = () => {};
  private onChange = (_: any) => {};

  get model() {
    return this._model;
  }

  set model(value: any) {
    this._model = value;
    this.onChange(value);
  }

  writeValue(value: any): void {
    this._model = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  isChecked(){
    return this._model == true;
  }
}