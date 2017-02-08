// todo: menu items
// todo: revisar si usar o no componentHandler
// todo: revisar encapsulacion.none. los componentes debrian estar encapsulados

import { Component, ElementRef, ViewChild, Input, Renderer, ViewEncapsulation } from "@angular/core";
import {MlButton} from "../controls/button/ml_button";
import MdlMenu from "./mdl_menu";
import * as ml from "../../lib/ml_lib";

@Component({
selector: 'ml-menu',
styleUrls: ['./ml_menu.css'],
encapsulation: ViewEncapsulation.None,
moduleId: module.id.toString(),
template:`

<ml-button [attr.id]="id" type="icon" #mdlButton><ml-icon>{{icon}}</ml-icon></ml-button>

<ul class="mdl-menu" [attr.for]="id" #menuList>
  <ng-content select="ml-menu-item"></ng-content>
</ul>         

`//template
})
export class MlMenu{

  @ViewChild('menuList') menuList: ElementRef;
  @ViewChild('mdlButton') mdlButton: MlButton;
  @Input() icon: string = 'more_vert';
  @Input() position: string;
  @Input() ripple: string;
  @Input() id: string;

  private className = {
    BOTTOM_LEFT: 'mdl-menu--bottom-left',
    BOTTOM_RIGHT: 'mdl-menu--bottom-right',
    TOP_LEFT: 'mdl-menu--top-left',
    TOP_RIGHT: 'mdl-menu--top-right',
  };

  constructor(
    private ren: Renderer){
  }

  ngOnInit(){
    if (!this.id){
      this.id = ml.randomStr();
    }
    if (this.ripple === ''){
      ml.setClass(this.mdlButton.host, 'mdl-js-ripple-effect', this.ren);
      ml.setClass(this.menuList, 'mdl-js-ripple-effect', this.ren);
    }
  }

  ngAfterViewInit(){
    if (this.position){
      const positionClass = this.getMenuPosition(this.position);
      ml.setClass(this.menuList, positionClass, this.ren);
    }
    new MdlMenu(this.menuList.nativeElement);
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
}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-menu-item',
template: '<li class="mdl-menu__item" #menuItem><ng-content></ng-content></li>'
})
export class MlMenuItem {

  @ViewChild('menuItem') menuItem: ElementRef;
  @Input() divider: string;
  @Input() disabled: string;

  constructor(private ren: Renderer){}

  ngOnInit() {
    if (this.divider === ''){
      ml.setClass(this.menuItem, 'mdl-menu__item--full-bleed-divider', this.ren);
    }
    if (this.disabled === ''){
      ml.setAttribute(this.menuItem, 'disabled', '', this.ren);
    }
  }
}
