import {ElementRef} from "@angular/core";
import MdlElement from "../../element/mdl_element";

export default class MdlRadio extends MdlElement{
  btnElement_: any;
  onChange_: Function;
  onFocus_: Function;
  onBlur_: Function;
  onMouseup_: Function;
  updateClasses_: Function;
  checkDisabled: Function;
  checkToggleState: Function;
  disable: Function;
  enable: Function;
  check: Function;
  uncheck: Function;
  blur_: Function;
  constructor(element: ElementRef){
    super(element);
  }
}
MdlRadio.prototype.Constant_ = { TINY_TIMEOUT: 0.001 };
MdlRadio.prototype.CssClasses_ = {
  IS_FOCUSED: 'is-focused',
  IS_DISABLED: 'is-disabled',
  IS_CHECKED: 'is-checked',
  IS_UPGRADED: 'is-upgraded',
  JS_RADIO: 'mdl-js-radio',
  RADIO_BTN: 'mdl-radio__button',
  RADIO_OUTER_CIRCLE: 'mdl-radio__outer-circle',
  RADIO_INNER_CIRCLE: 'mdl-radio__inner-circle',
  RIPPLE_EFFECT: 'mdl-js-ripple-effect',
  RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
  RIPPLE_CONTAINER: 'mdl-radio__ripple-container',
  RIPPLE_CENTER: 'mdl-ripple--center',
  RIPPLE: 'mdl-ripple'
};
/**
 * Handle change of state.
 * @param {Event} event The event that fired.
 */
 MdlRadio.prototype.onChange_ = function (event: any) {
 //todo: revisar
 //modificaciones
/*
    // Since other radio buttons don't get change events, we need to look for
    // them to update their classes.
    var radios = document.getElementsByClassName(this.CssClasses_.JS_RADIO);
    for (var i = 0; i < radios.length; i++) {
        var button = radios[i].querySelector('.' + this.CssClasses_.RADIO_BTN);
        // Different name == different group, so no point updating those.
        if (button.getAttribute('name') === this.btnElement_.getAttribute('name')) {
            radios[i].updateClasses_();
            // radios[i]['MdlRadio'].updateClasses_();
        }
    }
*/
//fin modificaciones
};

/**
 * Handle focus.
 * @param {Event} event The event that fired.
 */
MdlRadio.prototype.onFocus_ = function (event: any) {
  this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
};
/**
 * Handle lost focus.
 * @param {Event} event The event that fired.
 */
MdlRadio.prototype.onBlur_ = function (event: any) {
  this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
};
/**
 * Handle mouseup.
 * @param {Event} event The event that fired.
 */
MdlRadio.prototype.onMouseup_ = function (event: any) {
  this.blur_();
};
/**
 * Update classes.
 */
MdlRadio.prototype.updateClasses_ = function () {
  this.checkDisabled();
  this.checkToggleState();
};
/**
 * Add blur.
 */
MdlRadio.prototype.blur_ = function () {
  // TODO: figure out why there's a focus event being fired after our blur,
  // so that we can avoid this hack.
  window.setTimeout(function () {
    this.btnElement_.blur();
  }.bind(this), this.Constant_.TINY_TIMEOUT);
};
/**
 * Check the components disabled state.
 */
MdlRadio.prototype.checkDisabled = function () {
  if (this.btnElement_.disabled) {
    this.element_.classList.add(this.CssClasses_.IS_DISABLED);
  } else {
    this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
  }
};
/**
 * Check the components toggled state.
 */
MdlRadio.prototype.checkToggleState = function () {
  if (this.btnElement_.checked) {
    this.element_.classList.add(this.CssClasses_.IS_CHECKED);
  } else {
    this.element_.classList.remove(this.CssClasses_.IS_CHECKED);
  }
};
/**
 * Disable radio.
 */
MdlRadio.prototype.disable = function () {
  this.btnElement_.disabled = true;
  this.updateClasses_();
};
/**
 * Enable radio.
 */
MdlRadio.prototype.enable = function () {
  this.btnElement_.disabled = false;
  this.updateClasses_();
};
/**
 * Check radio.
 */
MdlRadio.prototype.check = function () {
  this.btnElement_.checked = true;
  this.onChange_(null);
};
/**
 * Uncheck radio.
 */
MdlRadio.prototype.uncheck = function () {
  this.btnElement_.checked = false;
  this.onChange_(null);
};
MdlRadio.prototype.init = function () {
  if (this.element_) {
    this.btnElement_ = this.element_.querySelector('.' + this.CssClasses_.RADIO_BTN);
    this.boundChangeHandler_ = this.onChange_.bind(this);
    this.boundFocusHandler_ = this.onChange_.bind(this);
    this.boundBlurHandler_ = this.onBlur_.bind(this);
    this.boundMouseUpHandler_ = this.onMouseup_.bind(this);
    var outerCircle = document.createElement('span');
    outerCircle.classList.add(this.CssClasses_.RADIO_OUTER_CIRCLE);
    var innerCircle = document.createElement('span');
    innerCircle.classList.add(this.CssClasses_.RADIO_INNER_CIRCLE);
    this.element_.appendChild(outerCircle);
    this.element_.appendChild(innerCircle);
    var rippleContainer: any;
    if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
      this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
      rippleContainer = document.createElement('span');
      rippleContainer.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
      rippleContainer.classList.add(this.CssClasses_.RIPPLE_EFFECT);
      rippleContainer.classList.add(this.CssClasses_.RIPPLE_CENTER);
      rippleContainer.addEventListener('mouseup', this.boundMouseUpHandler_);
      var ripple = document.createElement('span');
      ripple.classList.add(this.CssClasses_.RIPPLE);
      rippleContainer.appendChild(ripple);
      this.element_.appendChild(rippleContainer);
    }
    this.btnElement_.addEventListener('change', this.boundChangeHandler_);
    this.btnElement_.addEventListener('focus', this.boundFocusHandler_);
    this.btnElement_.addEventListener('blur', this.boundBlurHandler_);
    this.element_.addEventListener('mouseup', this.boundMouseUpHandler_);
    this.updateClasses_();
    this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
  }
};
