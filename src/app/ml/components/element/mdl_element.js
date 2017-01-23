"use strict";
// All Material Light elements (Ml elements) inherit form and are based in a base MdlElement 
var MdlElement = (function () {
    function MdlElement(el) {
        this.element_ = el;
        this.init();
    }
    return MdlElement;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MdlElement;
//# sourceMappingURL=mdl_element.js.map