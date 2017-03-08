// todo: hacer todos los disabled=true
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
var forms_1 = require('@angular/forms');
var PagCheckbox = (function () {
    function PagCheckbox() {
        this.formCheckbox = new forms_1.FormGroup({
            option3: new forms_1.FormControl(true),
            option4: new forms_1.FormControl(false),
            option5: new forms_1.FormControl(),
            option6: new forms_1.FormControl({ value: true, disabled: true })
        });
    }
    PagCheckbox = __decorate([
        core_1.Component({
            template: "\n\n<h5>Checkbox</h5>\n<h6>(Only for reactive forms)</h6>\n\n<form [formGroup]=\"formCheckbox\">\n  <ml-checkbox id=\"checkbox3\" formControlName=\"option3\">Option 3</ml-checkbox>\n  <ml-checkbox id=\"checkbox4\" formControlName=\"option4\" ripple>Option 4 (With ripple)</ml-checkbox>\n  <ml-checkbox id=\"checkbox5\" formControlName=\"option5\">Option 5 (Undefined by default)</ml-checkbox>\n  <ml-checkbox id=\"checkbox6\" formControlName=\"option6\" disabled=\"true\">Option 6 (Disabled by default)</ml-checkbox>\n</form>\n\n<br>\n\n<debug-form [name]=\"formCheckbox\"></debug-form>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PagCheckbox);
    return PagCheckbox;
}());
exports.PagCheckbox = PagCheckbox;
//# sourceMappingURL=pagCheckbox.js.map