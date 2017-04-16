"use strict";
/**
 * @ClassDesc Most of the Material Light MlComponents use Ml*Lib.ts elements that inherit from the base MdlElement
 * @Class {MdlElement}
 * @params {HTMLElement} el HTML Element used as base to create the ML component
 */
var MdlElement = (function () {
    function MdlElement(el) {
        this.element_ = el;
        this.init();
    }
    return MdlElement;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MdlElement;
