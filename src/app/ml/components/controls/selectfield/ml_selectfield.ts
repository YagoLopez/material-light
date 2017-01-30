//todo: hacer el icono fijo
//todo: arreglar id de input, por ejemplo ahora esta asi: id="sample1"

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
  .select-field{padding-left: 33px !important; cursor: pointer;}
  .select-label{padding-left: 33px !important; cursor: pointer;}
</style>

<div class="mdl-textfield getmdl-select">
  <input #inputField class="mdl-textfield__input select-field" type="text" id="sample1"
         (click)="onClickSelect($event)" readonly>
  <label #labelField class="mdl-textfield__label select-label" 
         for="sample1">Choose one option...</label>
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
  @Input() position: string; //todo: eliminar
  @Input() ripple: string;
  @Input() id: string; //todo: mejorar

  mdlTextfield: MdlTextfield;
  mdlMenu: MdlMenu;

  private className = {
    BOTTOM_LEFT: 'mdl-menu--bottom-left',
    BOTTOM_RIGHT: 'mdl-menu--bottom-right',
    TOP_LEFT: 'mdl-menu--top-left',
    TOP_RIGHT: 'mdl-menu--top-right',
  };

  constructor(private ren: Renderer){}

  itemSelected($event){
    this.labelField.nativeElement.textContent = '';
    this.inputField.nativeElement.value = $event.target.textContent;
    this.formControl.setValue($event.target.textContent);
    this.formControl.markAsTouched(true);
  }

  onClickSelect($event){
    this.mdlMenu.show();
    // this.formControl.markAsTouched(true);
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
    if (this.position){
      const positionClass = this.getMenuPosition(this.position);
      ml.setClass(this.menuList, positionClass, this.ren);
    }
    this.mdlMenu = new MdlMenu(this.menuList.nativeElement);
    this.mdlTextfield = new MdlTextfield(this.inputField.nativeElement);
  }

  /**
   * Get menu position from input attribute POSITION.
   * 
   * @param position {string} Input Menu position relative to screen corners.
   * @returns {string} Class name defining position
   *
   * Allowed values: [top-left, top-right, bottom-left, bottom, right] (in lower case)
   */
  private getMenuPosition(position: string): string{
    // todo: class names are wrong?
    let mdlClassName: string = "";
    if(position === 'top-left'){
      mdlClassName = this.className.BOTTOM_LEFT;
    }
    if(position === 'top-right'){
      mdlClassName = this.className.BOTTOM_RIGHT;
    }
    if(position === 'bottom-left'){
      mdlClassName = this.className.TOP_LEFT;
    }
    if(position === 'bottom-right'){
      mdlClassName = this.className.TOP_RIGHT;
    }
    return mdlClassName;
  }

  writeValue(value: any): void {
    if(value){
      this.labelField.nativeElement.textContent = '';
      this.inputField.nativeElement.value = value;
    }
    console.log('writing value:', value);
  }
  registerOnChange(fn: any): void { /* this.onChange = fn */ }
  registerOnTouched(fn: any): void { /* this.onTouch = fn */ }
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
