//todo: arreglar id de input, ahora esta asi: id="sample1"
//todo: ripple effect
//todo: probar template forms
//todo: deberia haber attr name en input

import {Component, ElementRef, ViewChild, Input, Renderer, ViewEncapsulation, forwardRef} from "@angular/core";
import {NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl} from "@angular/forms";
import {MlButton} from "../../controls/button/ml_button";
import MdlMenu from "./mdl_menu";
import MdlTextfield from "./mdl_textfield";
import * as ml from "../../../lib/ml_lib";
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-selectfield',
styleUrls: ['./ml_menu.css', './ml_textfield.css', './getmdl-select.css'],
encapsulation: ViewEncapsulation.None,
moduleId: module.id.toString(),
providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MlSelectfield), multi: true}],
template:`

<style>
  .input-field{padding-left: 33px !important; cursor: pointer;}
  .input-label{padding-left: 33px !important; cursor: pointer;}
</style>

<div class="mdl-textfield getmdl-select">
  <input #inputField class="mdl-textfield__input input-field" type="text" id="sample1"
         (click)="onClickSelect($event)" readonly>
  <label #labelField class="mdl-textfield__label input-label"for="sample1">Choose one option...</label>
  <ml-button [attr.id]="id" type="icon" #mdlButton><ml-icon>keyboard_arrow_down</ml-icon></ml-button>
  <ul class="mdl-menu" [attr.for]="id" #menuList (click)="itemSelected($event)">
    <ng-content select="ml-sf-item"></ng-content>
  </ul>         
</div>

`//template
})
export class MlSelectfield implements ControlValueAccessor{

  @ViewChild('menuList') menuList: ElementRef;
  @ViewChild('mdlButton') mdlButton: MlButton;
  @ViewChild('inputField') inputField: ElementRef;
  @ViewChild('labelField') labelField: ElementRef;
  @Input() formControl: FormControl;
  // @Input() position: string; //todo: eliminar
  @Input() ripple: string;
  @Input() id: string; //todo: mejorar

  mdlTextfield: MdlTextfield;
  mdlMenu: MdlMenu;

  constructor(private ren: Renderer){}

  itemSelected($event){
    this.labelField.nativeElement.textContent = '';
    this.inputField.nativeElement.value = $event.target.textContent;
    this.formControl.setValue($event.target.textContent);
    this.formControl.markAsTouched(true);
  }
  onClickSelect($event){
    this.mdlMenu.show();
  }
  ngOnInit(){
    if (!this.id){
      this.id = ml.randomStr();
    }
    if (this.ripple === ''){
      ml.setClass(this.mdlButton.host, 'mdl-js-ripple-effect', this.ren);
      ml.setClass(this.menuList, 'mdl-js-ripple-effect', this.ren);
      // ml.setClass(this.inputField, 'mdl-js-ripple-effect', this.ren);
    }
  }
  ngAfterViewInit(){
    this.mdlMenu = new MdlMenu(this.menuList.nativeElement);
    this.mdlTextfield = new MdlTextfield(this.inputField.nativeElement);
  }
  writeValue(value: any): void {
    if(value){
      this.labelField.nativeElement.textContent = '';
      this.inputField.nativeElement.value = value;
    }
  }
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-sf-item',
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
