//todo: testar textfield con tipo: file, color, etc.
//todo: (general) usar esta nomenclatura para componentes (Ej: MlTextfieldCmp)

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
moduleId: module.id,
styleUrls: ['./mlSelectfield.css', '../../menu/mlMenu.css', '../textfield/mlTextfield.css'],
encapsulation: ViewEncapsulation.None,
changeDetection: ChangeDetectionStrategy.OnPush,
providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MlSelectfield), multi: true}],
template:`

<div class="mdl-textfield dropdown-width getmdl-select">
  <input #input type="text" class="mdl-textfield__input input-field" (click)="clickInput()" readonly>
  <label #label class="mdl-textfield__label input-label">{{ labelText }}</label>
  <ml-button #mdlButton variant="icon" [attr.id]="idBtn" class="menu-btn">
    <ml-icon>keyboard_arrow_down</ml-icon>
  </ml-button>
  <ul #menuList [attr.for]="idBtn" class="getmdl-select__fullwidth mdl-menu" (click)="itemSelected($event)">
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
    ml.isDefined(this.divider) && ml.setClass(this.selectfieldItem, 'mdl-menu__item--full-bleed-divider', this.ren);
    ml.isDefined(this.disabled) && ml.setAttribute(this.selectfieldItem, 'disabled', '', this.ren);
  }
}
