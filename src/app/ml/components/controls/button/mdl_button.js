"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var mdl_element_1 = require("../../element/mdl_element");
var MdlButton = (function (_super) {
    __extends(MdlButton, _super);
    function MdlButton(el) {
        _super.call(this, el);
    }
    return MdlButton;
}(mdl_element_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MdlButton;
MdlButton.prototype.CssClasses_ = {
    RIPPLE_EFFECT: 'mdl-js-ripple-effect',
    RIPPLE_CONTAINER: 'mdl-button__ripple-container',
    RIPPLE: 'mdl-ripple'
};
/**
   * Handle blur of element.
   * @param {Event} event The event that fired.
   */
MdlButton.prototype.blurHandler_ = function (event) {
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
//# sourceMappingURL=C:/Users/Yago/WebstormProjects/material-light/src/app/ml/components/controls/button/mdl_button.js.map