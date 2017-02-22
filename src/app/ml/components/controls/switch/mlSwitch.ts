//todo: en vez de renderer usar @HostBinding(class.classname) para poner clases en el host de una directiva

import {Component, ViewChild, ElementRef, Input, ViewEncapsulation, forwardRef} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import MdlSwitch from "./mlSwitchLib";

@Component({
selector: 'ml-switch',
styleUrls: ['./mlSwitch.css'],
// moduleId: module.id.toString(),
encapsulation: ViewEncapsulation.None,
providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MlSwitch), multi: true}],
template: `

<label #label [attr.for]="id+'mdl'" class="mdl-switch" [ngClass]="{'is-checked': isChecked()}">
  <input type="checkbox" class="mdl-switch__input" 
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
  _model: any;

  ngOnInit() {
    this.mdlSwitch = new MdlSwitch(this.label.nativeElement);
    if(this.disabled && (this.disabled.toLowerCase() === 'true')){
      this.mdlSwitch.disable();
    }
  };
  
  get model() {
    return this._model;
  }

  set model(value: any) {
    this._model = value;
    this.onChange(value);
  }

  writeValue(value: any): void {
    this.model = value;
  }

  isChecked(){
    return this.model == true;
  }
  
  private onTouch = () => {};
  private onChange = (_: any) => {};

  registerOnChange(fn: any): void { this.onChange = fn }
  registerOnTouched(fn: any): void { this.onTouch = fn }
  
  on(){
    this.mdlSwitch.on();
  }

  off(){
    this.mdlSwitch.off();
  }

}