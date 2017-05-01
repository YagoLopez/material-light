import {Component, ElementRef, Input, Renderer, ViewChild, ChangeDetectionStrategy, forwardRef,
  HostBinding} from "@angular/core";
import {NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl} from "@angular/forms";
import MdlButton from "./mdlButtonClass";
import * as ml from "../../../lib/ml_lib";

// note: <input type="file"> not well supported by Angular reactive forms
const ML_BUTTON_INPUT_TYPES = ['submit', 'reset', 'button', 'color'];
const ML_BUTTON_INPUT_ASPECTS = ['raised', 'colored', 'accent'];
const ML_BUTTON_INPUT_VARIANTS = ['fab', 'minifab', 'icon'];

@Component({
selector: 'ml-button-input',
moduleId: module.id,
styleUrls: ['./mlButton.css'],
changeDetection: ChangeDetectionStrategy.OnPush,
providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MlButtonInput), multi: true}],
template:`

<!--
<label #label class="mdl-button"><ng-content></ng-content>
<input [type]="type" [(ngModel)]="model" style="pointer-events: auto; display: none" 
(change)="onChangeEvent()" (click)="onClick()">
<span class="mdl-button__ripple-container" style="pointer-events: none"><span class="mdl-ripple"></span></span>
</label>
<div *ngIf="showError" class="mdl-textfield__error"><ng-content select="ml-error"></ng-content></div>
-->
<label #label class="mdl-button"><ng-content></ng-content>
<input [type]="type" [(ngModel)]="model" style="display: none" 
(change)="onChangeEvent()" (click)="onClick()">
<span class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span>
</label>
<div *ngIf="showError" class="mdl-textfield__error"><ng-content select="ml-error"></ng-content></div>

`//template
}) export class MlButtonInput implements ControlValueAccessor{

  @ViewChild('label') label: ElementRef;
  @Input() type: string = 'submit'; // default type
  @Input() aspect: string;
  @Input() variant: string;
  @Input() disabled: string;
  @Input('model') _model: any;
  @Input() formControl: FormControl;
  @HostBinding('attr.disabled') get getDisabled() {
    !this.disabled ? this.enable() : this.disable();
    return null;
  }
  showError: boolean = false;
  constructor(private ren: Renderer){}

  ngOnInit(){
    // @Input "type" ----------------------------------------------------------------------------------------------------
    if( !ml.isAttributeValid(this.type.toLowerCase(), ML_BUTTON_INPUT_TYPES) ){
      console.warn(`<ml-button-input> Invalid attribute: type="${this.type}"`);
    }
    // @Input "aspect" --------------------------------------------------------------------------------------------------
    ml.isSubstring('raised', this.aspect) && ml.setClass(this.label, 'mdl-button--raised', this.ren);
    ml.isSubstring('colored', this.aspect) && ml.setClass(this.label, 'mdl-button--colored', this.ren);
    ml.isSubstring('accent', this.aspect) && ml.setClass(this.label, 'mdl-button--accent', this.ren);

    // @Input "variant" -------------------------------------------------------------------------------------------------
    if( this.variant && !ml.isAttributeValid(this.variant, ML_BUTTON_INPUT_VARIANTS) ){
      console.warn(`<ml-button> Wrong attribute: variant="${this.variant}"`);
    }
    if (ml.isSubstring('minifab', this.variant)){
      ml.setClass(this.label, 'mdl-button--fab', this.ren);
      ml.setClass(this.label, 'mdl-button--mini-fab', this.ren);
    }
    ml.isSubstring('fab', this.variant) && ml.setClass(this.label, 'mdl-button--fab', this.ren);
    ml.isSubstring('icon', this.variant) && ml.setClass(this.label, 'mdl-button--icon', this.ren);

    new MdlButton(this.label.nativeElement);
  }
  checkValidity(){
    this.showError = !!(this.formControl && this.formControl.invalid);
  }
  onChangeEvent(){
    this.checkValidity();
  }
  onClick(){
    this.formControl && this.formControl.markAsTouched(true);
    this.checkValidity();
  }
  writeValue(v){
    this._model = v;
  }
  set model(v: any){
    this._model = v;
    this.onChange(v);
  }
  get model(){
    if(this._model){
      return this._model;
    }
  }
  private onTouch = () => {};
  private onChange = (_: any) => {};
  registerOnChange(fn: any): void { this.onChange = fn }
  registerOnTouched(fn: any): void { this.onTouch = fn }
  disable(){ this.label.nativeElement.setAttribute('disabled', true) }
  enable(){ this.label.nativeElement.removeAttribute('disabled') }
}
