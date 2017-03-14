//todo: (general) nombrar todos los componentes terminando en "C" para distinguirlos de otros ficheros

// NOTE: this component ("MlSelectfield") is based on "MlButton", "MdlMenu" and "MdlTextfield"
// For this reason it uses files from these components

import {Component, ElementRef, ViewChild, Input, Renderer, ViewEncapsulation, forwardRef,
 ChangeDetectionStrategy} from "@angular/core";
import {NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl} from "@angular/forms";
import {MlButton} from "../button/mlButton";
import MdlMenu from "../../menu/mlMenuLib";
import MdlTextfield from "../textfield/mlTextfieldLib";
import * as ml from "../../../lib/ml_lib";
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-selectfield',
styleUrls: ['../../menu/mlMenu.css', '../textfield/mlTextfield.css'],
encapsulation: ViewEncapsulation.None,
changeDetection: ChangeDetectionStrategy.OnPush,
// moduleId: module.id.toString(),
providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MlSelectfield), multi: true}],
template:`

<style>
  .input-field{padding-left: 33px !important; cursor: pointer}
  .input-label{padding-left: 33px !important; cursor: pointer}
  .menu-btn{height: 27px !important}
</style>

<div class="mdl-textfield getmdl-select">
  <input #input class="mdl-textfield__input input-field" type="text" (click)="clickInput()" readonly>
  <label #label class="mdl-textfield__label input-label"[attr.for]="idInput">{{ labelText }}</label>
  <ml-button #mdlButton [attr.id]="idBtn" type="icon" class="menu-btn">
    <ml-icon>keyboard_arrow_down</ml-icon>
  </ml-button>
  <ul #menuList class="getmdl-select__fullwidth mdl-menu" [attr.for]="idBtn" (click)="itemSelected($event)">
    <ng-content select="ml-sf-item"></ng-content>
  </ul>         
</div>

`//template
})
export class MlSelectfield implements ControlValueAccessor{

  @ViewChild('menuList') menuList: ElementRef;
  @ViewChild('mdlButton') mdlButton: MlButton;
  @ViewChild('input') input: ElementRef;
  @ViewChild('label') label: ElementRef;
  @Input() formControl: FormControl;
  @Input() ripple: string;
  @Input('label') labelText = 'Choose one option...';
  idBtn: string;
  mdlTextfield: MdlTextfield;
  mdlMenu: MdlMenu;

  constructor( private ren: Renderer, private host: ElementRef ){}

  itemSelected($event){
    this.label.nativeElement.textContent = '';
    this.input.nativeElement.value = $event.target.textContent;
    this.formControl.setValue($event.target.textContent);
    this.formControl.markAsTouched(true);
  }
  clickInput(){
    this.mdlMenu.toggle();
  }
  ngOnInit(){
    this.idBtn = ml.randomStr();
    if (this.ripple === ''){
      ml.setClass(this.mdlButton.host, 'mdl-js-ripple-effect', this.ren);
      ml.setClass(this.menuList, 'mdl-js-ripple-effect', this.ren);
    }
  }
  ngAfterViewInit(){
    this.mdlMenu = new MdlMenu(this.menuList.nativeElement);
    this.mdlTextfield = new MdlTextfield(this.input.nativeElement);
  }
  writeValue(value: any): void {
    if(value){
      this.label.nativeElement.textContent = '';
      this.input.nativeElement.value = value;
    }
  }
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-sf-item',
changeDetection: ChangeDetectionStrategy.OnPush,
template: '<li class="mdl-menu__item" #selectfieldItem><ng-content></ng-content></li>'
})
export class MlSelectfieldItem {

  @ViewChild('selectfieldItem') selectfieldItem: ElementRef;
  @Input() divider: string;
  @Input() disabled: string;

  constructor(private ren: Renderer){}

  ngOnInit() {
    if (this.divider === ''){
      ml.setClass(this.selectfieldItem, 'mdl-menu__item--full-bleed-divider', this.ren);
    }
    if (this.disabled === ''){
      ml.setAttribute(this.selectfieldItem, 'disabled', '', this.ren);
    }
  }
}
