//todo: intentar implementar mdl-textfield como el componente mdl-slider

//todo: he visto que en algun ejemplo usan ngControl en template-driven forms. investigarlo
//puede que sirva para que mdl-textfield funcione en template-driven forms

//todo: revisar algunos inputs puede sobrar al no usar model-driven forms (ej: name)

//todo: que solo hay que usar una vez el input de form-control [control] -> pasarselo al componente hijo que muestra
//los errores.

//todo: a lo mejor se puede resolver lo de la repeticion de codigo en componentes sencillos creando un componente
//abstracto y heredando de él

//todo: para posteriores versiones tratar de evitar el js de los ficheros *.lib.js
//es posible que se puedan sustituir por logica de templates de component

import {Component, ViewEncapsulation, ElementRef, Renderer, Input, forwardRef} from "@angular/core";
import {NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl} from "@angular/forms";
import MdlTextfield from "./mdl_textfield";
import * as ml from "../../../lib/ml_lib";

@Component({
selector: 'mdl-textfield',
moduleId: module.id.toString(),
styleUrls: ['./ml_textfield.css'],
encapsulation: ViewEncapsulation.None,
providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MlTextfield), multi: true}],
template: `

<input type="text" class="mdl-textfield__input" 
  [attr.id]="id" 
  [name]="name"
  [(ngModel)]="model" 
  (focus)="onFocus()" 
  (keyup)="onKeyup()">
<label class="mdl-textfield__label" [attr.for]="id">
  <ng-content select="mdl-textfield-label"></ng-content>
</label>

<div *ngIf="showError" class="mdl-textfield__error">
  <ng-content select="ml-error"></ng-content>
</div>

`//template
})
export class MlTextfield implements ControlValueAccessor{

  @Input() errors: any; //todo: igual se puede restringir a object
  @Input() disabled: string;
  @Input() name: string;
  @Input() floating: string;
  @Input() id: string;
  @Input() formControl: FormControl;

  private _model: any;
  private mdlTextfield: MdlTextfield;
  public showError: boolean;
  private onTouch = () => {};
  private onChange = (_: any) => {};

  constructor(
    private host: ElementRef,
    private ren: Renderer){
  }

  checkValidity(){
    if (this.formControl && this.formControl.invalid){
      ml.setClass(this.host, 'is-invalid', this.ren);
      this.showError = true;
    } else {
      this.host.nativeElement.classList.remove('is-invalid');
      this.showError = false;
    }
  }

  onFocus(){
    this.formControl.markAsTouched(true);
    this.checkValidity();
  }
  onKeyup(){
    this.formControl.markAsTouched(true);
    this.checkValidity();
  }

  ngOnInit() {
    if (!this.id)
      this.id = ml.randomStr();
    
    ml.setClass(this.host, 'mdl-textfield', this.ren);

    if (this.floating === '')
      ml.setClass(this.host, 'mdl-textfield--floating-label', this.ren);
      
    if (this.disabled === 'true')
      this.mdlTextfield.disable();
    
    this.mdlTextfield = new MdlTextfield(this.host.nativeElement);
  }
  get model() { return this._model }
  set model(value: any) {
    this._model = value;
    this.onChange(value);
  }
  writeValue(value: any): void {
    this._model = value;
    if (value)
      this.mdlTextfield.change(value);
  }
  registerOnChange(fn: any): void { this.onChange = fn }
  registerOnTouched(fn: any): void { this.onTouch = fn }
}
