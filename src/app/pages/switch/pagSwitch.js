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
var PagSwitch = (function () {
    function PagSwitch() {
        this.formSwitchReactive = new forms_1.FormGroup({
            option4: new forms_1.FormControl(true),
            option5: new forms_1.FormControl(),
            option6: new forms_1.FormControl({ value: true, disabled: true }) // Disabled on init
        });
    }
    PagSwitch = __decorate([
        core_1.Component({
            template: "\n\n<h5>Switch Button</h5>\n<h6>Only works with reactive forms:</h6>\n\n<form [formGroup]=\"formSwitchReactive\">\n  <ml-switch id=\"switch4\" formControlName=\"option4\">Option 4</ml-switch>\n  <ml-switch id=\"switch5\" formControlName=\"option5\" ripple>Option 5 (With ripple)</ml-switch>\n  <ml-switch id=\"switch6\" formControlName=\"option6\" disabled=\"true\">Option 6 (Disabled)</ml-switch>\n</form>\n\n<br>\n\n<debug-form [name]=\"formSwitchReactive\"></debug-form>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PagSwitch);
    return PagSwitch;
}());
exports.PagSwitch = PagSwitch;
//# sourceMappingURL=pagSwitch.js.map