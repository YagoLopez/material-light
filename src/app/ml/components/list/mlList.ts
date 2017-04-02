import {Component, ViewEncapsulation, ElementRef, Renderer, ViewChild, Input} from '@angular/core';
import * as ml from "../../lib/ml_lib";

// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-list',
encapsulation: ViewEncapsulation.None,
styleUrls: ['./mlList.css'],
template: '<ul class="mdl-list" #ulElement><ng-content></ng-content></ul>',
moduleId: module.id})
export class MlList {

  @ViewChild('ulElement') ulElement: ElementRef;

  constructor(private componentElm: ElementRef){}

  ngOnInit(){
    //todo: revisar esto bien
    const componentClasses: string = this.componentElm.nativeElement.className;
    this.ulElement.nativeElement.className += ' ' + componentClasses;
  }
}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-item',
template: '<li class="mdl-list__item" #liElement><ng-content></ng-content></li>',})
export class MlItem {

  @ViewChild('liElement') liElement: ElementRef;
  @Input() lines: string = '';

  constructor(private ren: Renderer){}

  ngOnInit(){
    if (this.lines === '2'){
      ml.setClass(this.liElement, 'mdl-list__item--two-line', this.ren);
    }
    if (this.lines === '3'){
      ml.setClass(this.liElement, 'mdl-list__item--three-line', this.ren);
    }
  }
}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-item-content',
host: {class: 'mdl-list__item-primary-content'},
template:'<span class="mdl-list__item-primary-content"><ng-content></ng-content></span>'})
export class MlItemContent {}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-item-action',
host: {class: 'mdl-list__item-secondary-action'},
template: '<ng-content></ng-content>'})
export class MlItemAction {}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-item-icon',
template: '<i class="material-icons" #icon><ng-content></ng-content></i>'})
export class MlItemIcon {

  @ViewChild('icon') private icon: ElementRef;
  @Input() type: string;

  constructor(private ren: Renderer){}

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
@Component({selector: 'ml-item-title', template: '<span><ng-content></ng-content></span>'})
export class MlItemTitle {}
// ---------------------------------------------------------------------------------------------------------------------
@Component({selector: 'ml-item-subtitle',
template: '<span class="mdl-list__item-sub-title"><ng-content></ng-content></span>'})
export class MlItemSubtitle {}
// ---------------------------------------------------------------------------------------------------------------------
@Component({selector: 'ml-item-desc',
template: '<span class="mdl-list__item-text-body"><ng-content></ng-content></span>'})
export class MlItemDesc {}
// ---------------------------------------------------------------------------------------------------------------------
