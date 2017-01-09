import {ElementRef} from "@angular/core";
import MdlElement from "../../element/mdl_element";

export default class MdlButton extends MdlElement{
  blurHandler_: Function;
  disable: Function;
  enable: Function;
  constructor(el: ElementRef){
    super(el);
  }
}
MdlButton.prototype.CssClasses_ = {
    RIPPLE_EFFECT: 'mdl-js-ripple-effect',
    RIPPLE_CONTAINER: 'mdl-button__ripple-container',
    RIPPLE: 'mdl-ripple'
};
/**
   * Handle blur of element.
   * @param {Event} event The event that fired.
   */
MdlButton.prototype.blurHandler_ = function (event: any) {
    if (event) {
        this.element_.blur();
    }
};
MdlButton.prototype.disable = function () {
    this.element_.disabled = true;
};
MdlButton.prototype.enable = function () {
    this.element_.disabled = false;
};
MdlButton.prototype.init = function () {
    if (this.element_) {
        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
            var rippleContainer = document.createElement('span');
            rippleContainer.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
            this.rippleElement_ = document.createElement('span');
            this.rippleElement_.classList.add(this.CssClasses_.RIPPLE);
            rippleContainer.appendChild(this.rippleElement_);
            this.boundRippleBlurHandler = this.blurHandler_.bind(this);
            this.rippleElement_.addEventListener('mouseup', this.boundRippleBlurHandler);
            this.element_.appendChild(rippleContainer);
        }
        this.boundButtonBlurHandler = this.blurHandler_.bind(this);
        this.element_.addEventListener('mouseup', this.boundButtonBlurHandler);
        this.element_.addEventListener('mouseleave', this.boundButtonBlurHandler);
    }
};
