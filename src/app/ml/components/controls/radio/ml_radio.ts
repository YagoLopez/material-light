import {Component, ElementRef, ViewChild, Input, forwardRef, ViewEncapsulation} from "@angular/core";
import MdlRadio from "./mdl_radio";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
selector: 'ml-radio',
moduleId: module.id.toString(),
styleUrls: ['./ml_radio.css'],
encapsulation: ViewEncapsulation.None,
providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MlRadio), multi: true}],
template:`

<label [attr.for]="id+'mdl'" class="mdl-radio" [ngClass]="{'is-checked': isChecked()}" #label>
  <input type="radio" class="mdl-radio__button" 
          [attr.id]="id+'mdl'" 
          [name]="name" 
          [value]="value" 
          [(ngModel)]="model">
  <span class="mdl-radio__label"><ng-content></ng-content></span>
</label>

`//template
})
export class MlRadio implements ControlValueAccessor {

  @ViewChild('label') label: ElementRef;
  @Input() id: string;
  @Input() name: string;
  @Input() value: string;
  @Input() disabled: string;

  private mdlRadio: MdlRadio;
  private _model: any;

  isChecked(): boolean{
    return this.mdlRadio.btnElement_.checked;
  }

  ngOnInit(){
    this.mdlRadio = new MdlRadio(this.label.nativeElement);
    if (this.disabled && (this.disabled.toLowerCase() === 'true'))
      this.mdlRadio.disable();
  }

  private onTouched = () => {};
  private onChanged = (_: any) => {};

  get model() {
    return this._model;
  }
  
  set model(v: any) {
    if (v !== this._model){
      this._model = v;
    }
    this.onChanged(v);
  }

  writeValue(value: any): void {
    this._model = value;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}