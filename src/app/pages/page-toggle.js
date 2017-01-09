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
var PageToggle = (function () {
    function PageToggle() {
        // Models for template form (formToggleTemplate)
        this.model_1 = true;
        this.model_3 = true;
        // Models for reactive form (formToggleReactive)
        this.formToggleReactive = new forms_1.FormGroup({
            option4: new forms_1.FormControl(true),
            option5: new forms_1.FormControl(),
            option6: new forms_1.FormControl({ value: true, disabled: true })
        });
    }
    PageToggle = __decorate([
        core_1.Component({
            selector: 'page-toggle',
            template: "\n\n<h5>Icon Toggle</h5>\n\n<h6>Template form:</h6>\n<form #formToggleTemplate=\"ngForm\">\n\n  <ml-toggle id=\"toggle1\" name=\"option1\" [ngModel]=\"model_1\">\n    <ml-icon>email</ml-icon>\n  </ml-toggle>Option 1 (Enabled)<br>\n  \n  <ml-toggle id=\"toggle2\" name=\"option2\" [ngModel]=\"model_2\">\n    <ml-icon>email</ml-icon>\n  </ml-toggle>Option 2 (Undefined)<br>\n  \n  <ml-toggle id=\"toggle3\" name=\"option3\" [ngModel]=\"model_3\" disabled=\"true\">\n    <ml-icon>email</ml-icon>\n  </ml-toggle>Option 3 (Disabled)<br>\n\n</form>\n\n<debug-form [name]=\"formToggleTemplate\"></debug-form>\n\n<hr>\n\n<h6>Reactive form:</h6>\n<form [formGroup]=\"formToggleReactive\">\n\n  <ml-toggle id=\"toggle4\" formControlName=\"option4\">\n    <ml-icon>email</ml-icon>\n  </ml-toggle>Option 4 (Enabled)<br>\n  \n  <ml-toggle id=\"toggle5\" formControlName=\"option5\">\n    <ml-icon>email</ml-icon>  \n  </ml-toggle>Option 5 (Undefined)<br>\n  \n  <ml-toggle id=\"toggle6\" formControlName=\"option6\" disabled=\"true\">\n    <ml-icon>email</ml-icon>\n  </ml-toggle>Option 6 (Disabled)\n\n</form>\n\n<debug-form [name]=\"formToggleReactive\"></debug-form>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PageToggle);
    return PageToggle;
}());
exports.PageToggle = PageToggle;
//# sourceMappingURL=page-toggle.js.map