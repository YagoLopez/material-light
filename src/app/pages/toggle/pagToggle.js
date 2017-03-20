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
var PagToggle = (function () {
    function PagToggle() {
        this.formToggle = new forms_1.FormGroup({
            option4: new forms_1.FormControl(true),
            option5: new forms_1.FormControl(),
            option6: new forms_1.FormControl({ value: true, disabled: true })
        });
    }
    PagToggle = __decorate([
        core_1.Component({
            selector: 'page-toggle',
            template: "\n\n<h5>Icon Toggle</h5>\n<h6>Only for reactive forms:</h6>\n\n<form [formGroup]=\"formToggle\">\n  <ml-toggle id=\"toggle4\" formControlName=\"option4\" ripple>\n    <ml-icon>verified_user</ml-icon>\n  </ml-toggle>Option 4 (Enabled by default + ripple)<br>\n  \n  <ml-toggle id=\"toggle5\" formControlName=\"option5\" ripple>\n    <ml-icon>extension</ml-icon>  \n  </ml-toggle>Option 5 (Undefined by default + ripple)<br>\n  \n  <ml-toggle id=\"toggle6\" formControlName=\"option6\" disabled=\"true\">\n    <ml-icon>print</ml-icon>\n  </ml-toggle>Option 6 (Disabled by default)\n</form>\n\n<debug-form [name]=\"formToggle\"></debug-form>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PagToggle);
    return PagToggle;
}());
exports.PagToggle = PagToggle;
//# sourceMappingURL=pagToggle.js.map