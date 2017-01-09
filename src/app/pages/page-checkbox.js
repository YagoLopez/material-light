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
var PageCheckbox = (function () {
    function PageCheckbox() {
        // models for template form (form1)
        this.model_1 = true;
        this.model_2 = false;
        // reactive form (form2)
        this.form2 = new forms_1.FormGroup({
            option3: new forms_1.FormControl(true),
            option4: new forms_1.FormControl(false)
        });
    }
    PageCheckbox = __decorate([
        core_1.Component({
            template: "\n\n<h5>Checkbox</h5>\n<div>Option groups not supported. (Angular 2 restriction)</div>\n\n<h6>Template form:</h6>\n\n<form #form1=\"ngForm\">\n  <ml-checkbox id=\"checkbox1\" name=\"option1\" [ngModel]=\"model_1\">Option 1</ml-checkbox>\n  <ml-checkbox id=\"checkbox2\" name=\"option2\" [ngModel]=\"model_2\">Option 2</ml-checkbox>\n</form>\n\n<debug-form [name]=\"form1\"></debug-form>\n\n<hr>\n\n<h6>Reactive form:</h6>\n\n<form [formGroup]=\"form2\">\n  <ml-checkbox id=\"checkbox3\" formControlName=\"option3\">Option 3</ml-checkbox>\n  <ml-checkbox id=\"checkbox4\" formControlName=\"option4\">Option 4</ml-checkbox>\n</form>\n\n<debug-form [name]=\"form2\"></debug-form>\n\n<hr>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PageCheckbox);
    return PageCheckbox;
}());
exports.PageCheckbox = PageCheckbox;
//# sourceMappingURL=page-checkbox.js.map