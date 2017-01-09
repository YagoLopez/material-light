import {ElementRef} from "@angular/core";

export default class MdlElement{
  element_: ElementRef | any;
  init: Function;
  Constant_: Object | any;
  CssClasses_: Object | any;
  updateClasses_: Function;
  constructor(el: ElementRef){
    this.element_ = el;
    this.init();
  }
}