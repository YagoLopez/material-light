/**
 * @ClassDesc Most of the Material Light MlComponents use Ml*Lib.ts elements that inherit from the base MdlElement
 * @Class {MdlElement}
 * @params {HTMLElement} el HTML Element used as base to create the ML component
 */
export default class MdlElement{
  init: Function;
  element_: HTMLElement;
  Constant_: Object | any;
  CssClasses_: Object | any;
  updateClasses_: Function;
  constructor(el: HTMLElement){
    this.element_ = el;
    this.init();
  }
}
