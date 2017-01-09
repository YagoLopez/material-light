import {Component, ViewEncapsulation, ElementRef, Renderer, ViewChild, Input, ChangeDetectionStrategy} from '@angular/core';
import * as ml from "../../lib/ml_lib";

// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'mdl-list',
encapsulation: ViewEncapsulation.None,
changeDetection: ChangeDetectionStrategy.OnPush,
moduleId: module.id.toString(),
styleUrls: ['./ml_list.css'],
template: '<ul class="mdl-list" #ulElement><ng-content></ng-content></ul>'
})
export class MdlListContainer {

  @ViewChild('ulElement') ulElement: ElementRef;

  constructor(
    private componentElm: ElementRef
  ){}

  ngOnInit(){
    //todo: revisar esto bien
    let componentClasses: string = this.componentElm.nativeElement.className;
    this.ulElement.nativeElement.className += ' ' + componentClasses;
  }
}
// ---------------------------------------------------------------------------------------------------------------------

@Component({
selector: 'mdl-item',
moduleId: module.id.toString(),
template: '<li class="mdl-list__item" #liElement><ng-content></ng-content></li>'
})
export class MdlItem {

  @ViewChild('liElement') liElement: ElementRef;
  @Input() lines: string = '';

  constructor(
    private ren: Renderer
  ){}

  ngOnInit(){
    if (this.lines === '2')
      ml.setClass(this.liElement, 'mdl-list__item--two-line', this.ren);
    if (this.lines === '3')
      ml.setClass(this.liElement, 'mdl-list__item--three-line', this.ren);
  }
}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'mdl-item-content',
host: {class: 'mdl-list__item-primary-content'},
template: '<span class="mdl-list__item-primary-content"><ng-content></ng-content></span>'
})
export class MdlItemContent {}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'mdl-item-action',
host: {class: 'mdl-list__item-secondary-action'},
template: '<ng-content></ng-content>'
})
export class MdlItemAction {}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'mdl-item-icon',
template: '<i class="material-icons" #icon><ng-content></ng-content></i>'
})
export class MdlItemIcon {

  @ViewChild('icon') private icon: ElementRef;
  @Input() type: string;

  constructor(
    private ren: Renderer
  ){}
  
  ngOnInit(){
    if(this.type === 'avatar'){
      ml.setClass(this.icon, 'mdl-list__item-avatar', this.ren)
    }
    if(this.type === 'normal'){
      ml.setClass(this.icon, 'mdl-list__item-icon', this.ren)
    }
  }
}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'mdl-item-title',
template: '<span><ng-content></ng-content></span>'
})
export class MdlItemTitle {}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'mdl-item-subtitle',
template: '<span class="mdl-list__item-sub-title"><ng-content></ng-content></span>'
})
export class MdlItemSubtitle {}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'mdl-item-desc',
template: '<span class="mdl-list__item-text-body"><ng-content></ng-content></span>'
})
export class MdlItemDesc {}
// ---------------------------------------------------------------------------------------------------------------------
export const MlList: any = [
  MdlListContainer,
  MdlItem,
  MdlItemContent,
  MdlItemAction,
  MdlItemIcon,
  MdlItemTitle,
  MdlItemSubtitle,
  MdlItemDesc
];