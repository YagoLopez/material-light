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
var PageRadio = (function () {
    function PageRadio() {
        // model for template driven form (form1)
        this.model_1 = 'option1';
        this.form2 = new forms_1.FormGroup({
            optionsGroup2: new forms_1.FormControl('option3')
        });
    }
    PageRadio = __decorate([
        core_1.Component({
            template: "\n\n<h5>Radio</h5>\n\n<h6>Template forms:</h6>\n<form #form1=\"ngForm\">\n  <ml-radio id=\"radio1\" name=\"optionsGroup1\" [ngModel]=\"model_1\" value=\"option1\">Option 1</ml-radio>\n  <ml-radio id=\"radio2\" name=\"optionsGroup1\" [ngModel]=\"model_1\" value=\"option2\">Option 2</ml-radio>\n</form>\n<br>\n<debug-form [name]=\"form1\"></debug-form>\n\n<hr>\n\n<h6>Reactive forms:</h6>\n<form [formGroup]=\"form2\">\n  <ml-radio id=\"radio3\" formControlName=\"optionsGroup2\" value=\"option3\">Option 3</ml-radio>\n  <ml-radio id=\"radio4\" formControlName=\"optionsGroup2\" value=\"option4\">Option 4</ml-radio>\n</form>\n<br>\n<debug-form [name]=\"form2\"></debug-form>\n\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PageRadio);
    return PageRadio;
}());
exports.PageRadio = PageRadio;
//# sourceMappingURL=page-radio.js.map