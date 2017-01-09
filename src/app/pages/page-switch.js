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
var forms_1 = require("@angular/forms");
var PageSwitch = (function () {
    function PageSwitch() {
        // Model for template form (formSwitchTemplate)
        this.model_1 = true;
        // Model for reactive form (formSwitchReactive)
        this.formSwitchReactive = new forms_1.FormGroup({
            option4: new forms_1.FormControl(true),
            option5: new forms_1.FormControl(),
            option6: new forms_1.FormControl({ value: true, disabled: true })
        });
    }
    PageSwitch = __decorate([
        core_1.Component({
            template: "\n\n<h5>Switch Button</h5>\n<h6>Template form:</h6>\n\n\n<form #formSwitchTemplate=\"ngForm\">\n\n  <ml-switch id=\"switch1\" name=\"option1\" [ngModel]=\"model_1\">Option 1 (Enabled)</ml-switch>\n  <ml-switch id=\"switch2\" name=\"option2\" [ngModel]=\"model_2\">Option 2 (Undefined)</ml-switch>\n  <ml-switch id=\"switch3\" name=\"option3\" disabled=\"true\">Option 3 (Disabled)</ml-switch>\n\n</form>\n\n<debug-form [name]=\"formSwitchTemplate\"></debug-form>\n\n<hr>\n\n<h6>Reactive form:</h6>\n\n<form [formGroup]=\"formSwitchReactive\">\n\n  <ml-switch id=\"switch4\" formControlName=\"option4\">Option 4 (Enabled)</ml-switch>\n  <ml-switch id=\"switch5\" formControlName=\"option5\">Option 5 (Undefined)</ml-switch>\n  <ml-switch id=\"switch6\" formControlName=\"option6\" disabled=\"true\">Option 6 (Disabled)</ml-switch>\n\n</form>\n\n<debug-form [name]=\"formSwitchReactive\"></debug-form>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PageSwitch);
    return PageSwitch;
}());
exports.PageSwitch = PageSwitch;
//# sourceMappingURL=C:/Users/Yago/WebstormProjects/material-light-demo-webpack/src/app/pages/page-switch.js.map