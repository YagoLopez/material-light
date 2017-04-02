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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var DebugForm = (function () {
    function DebugForm() {
    }
    __decorate([
        core_1.Input('name'), 
        __metadata('design:type', forms_1.FormGroup)
    ], DebugForm.prototype, "formName", void 0);
    DebugForm = __decorate([
        core_1.Component({
            selector: 'debug-form',
            template: "\n<style>\n.code-block{background: aliceblue; font-size: 13px; margin: auto; border: 1px solid lightgray; border-radius: 4px}\n.inner-div{margin-left: 10px;}\n.value{color: cornflowerblue;}\n</style>\n\n<pre class=\"code-block\">\n  <div class=\"inner-div\">\n    <b>FORM DEBUGGER:</b>\n    \u27A0 Form values: <span class=\"value\">{{ formName.value | json }}</span>\n    \u27A0 Form valid : <span class=\"value\">{{ formName.valid }}</span>\n  </div>\n</pre>\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], DebugForm);
    return DebugForm;
}());
exports.DebugForm = DebugForm;
