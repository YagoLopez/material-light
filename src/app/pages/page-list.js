//todo: convertir las clases de los iconos  mdl-list__item-avatar mdl-list__item-icon en directivas
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PageList = (function () {
    function PageList() {
    }
    PageList = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.None,
            template: "\n\n<h5>List</h5>\n\n<style>\n.demo-list {\n  /*width: 600px;*/\n  background: ghostwhite;\n}\n</style>\n\n<mdl-list class=\"demo-list\">\n\n  <mdl-item>\n    <mdl-item-content>\n      <mdl-item-icon type=\"normal\">person</mdl-item-icon>\n      Bryan Cranston\n    </mdl-item-content>\n    <mdl-item-action>\n      <a href=\"#\"><ml-icon>star</ml-icon></a>\n    </mdl-item-action>\n  </mdl-item>\n  \n  <mdl-item lines=\"2\">\n    <mdl-item-content>\n      <mdl-item-icon type=\"normal\">person</mdl-item-icon>\n      <mdl-item-title>Aaron Paul</mdl-item-title>\n      <mdl-item-subtitle>62 Episodes</mdl-item-subtitle>\n    </mdl-item-content>\n    <mdl-item-action>\n      <a href=\"#\"><ml-icon>star</ml-icon></a>\n    </mdl-item-action>\n  </mdl-item>\n  \n  <mdl-item lines=\"3\">\n    <mdl-item-content>\n      <mdl-item-icon type=\"avatar\">person</mdl-item-icon>\n      <mdl-item-title>Bryan Cranston</mdl-item-title>\n      <mdl-item-desc>\n        Bryan Cranston played the role of Walter in Breaking Bad. He is also known\n        for playing Hal in Malcom in the Middle.\n      </mdl-item-desc>\n    </mdl-item-content>\n    <mdl-item-action>\n      <a href=\"#\"><ml-icon>star</ml-icon></a>\n    </mdl-item-action>\n  </mdl-item>\n  \n  \n</mdl-list>\n        \n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PageList);
    return PageList;
}());
exports.PageList = PageList;
//# sourceMappingURL=page-list.js.map