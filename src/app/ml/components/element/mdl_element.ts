// All Material Light components are based on MdlLib elements that inherit from MdlElement 
import {ElementRef} from "@angular/core";

export default class MdlElement{
  init: Function;
  element_: ElementRef | any;
  Constant_: Object | any;
  CssClasses_: Object | any;
  updateClasses_: Function;
  constructor(el: ElementRef){
    this.element_ = el;
    this.init();
  }
}
