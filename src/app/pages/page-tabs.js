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
var PageTabs = (function () {
    function PageTabs() {
    }
    PageTabs = __decorate([
        core_1.Component({
            template: "\n\n<style>\n  ul{\n    margin: 0;\n  }\n  .lightblue{\n    background: lightcyan;\n  }\n  .lightgreen{\n    background: lightgreen;\n  }\n  .yellow{\n    background: yellow;\n  }\n</style>\n\n<h5>Tabs</h5>\n\n<ml-tabs ripple>\n\n  <!-- Tabs bar. --------------------------------------------------------------------------------------------------- -->\n\n  <ml-tabs-bar>\n      <a tab href=\"#starks-panel\" active ripple>Starks</a>\n      <a tab href=\"#lannisters-panel\" ripple>Lannisters</a>\n      <a tab href=\"#targaryens-panel\" ripple>Targaryens</a>\n  </ml-tabs-bar>\n\n  <!-- Tabs panels . Ids must be unique in all templates ---------_------------------------------------------------ -->\n\n  <ml-tab-panel id=\"starks-panel\" class=\"lightblue\" active>\n    <ul>\n      <li>Eddard</li>\n      <li>Catelyn</li>\n      <li>Robb</li>\n      <li>Sansa</li>\n      <li>Brandon</li>\n      <li>Arya</li>\n      <li>Rickon</li>\n    </ul>\n  </ml-tab-panel>\n  <ml-tab-panel id=\"lannisters-panel\" class=\"yellow\">\n    <ul>\n      <li>Tywin</li>\n      <li>Cersei</li>\n      <li>Jamie</li>\n      <li>Tyrion</li>\n    </ul>\n  </ml-tab-panel>\n  <ml-tab-panel id=\"targaryens-panel\" class=\"lightgreen\">\n    <ul>\n      <li>Viserys</li>\n      <li>Daenerys</li>\n    </ul>\n  </ml-tab-panel>\n  \n  <!-- End ---------------------------------------------------------------------------------------------------- -->\n\n</ml-tabs>\n\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PageTabs);
    return PageTabs;
}());
exports.PageTabs = PageTabs;
//# sourceMappingURL=C:/Users/Yago/WebstormProjects/material-light/src/app/pages/page-tabs.js.map