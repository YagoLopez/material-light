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
var PagRadio = (function () {
    function PagRadio() {
        this.options = new forms_1.FormControl('option3');
    }
    PagRadio.prototype.ngOnInit = function () {
        this.formRadio = new forms_1.FormGroup({ options: this.options });
    };
    PagRadio.prototype.onSubmit = function () {
        console.log(this.formRadio.value);
    };
    PagRadio = __decorate([
        core_1.Component({
            template: "\n\n<h5>Radio Button</h5>\n<h6>(Only for reactive forms)</h6>\n\n<form [formGroup]=\"formRadio\" (ngSubmit)=\"onSubmit()\">\n  <p><ml-radio id=\"radio3\" formControlName=\"options\" value=\"option3\">Option 3</ml-radio></p>\n  <p><ml-radio id=\"radio4\" formControlName=\"options\" value=\"option4\" ripple>Option 4 (With ripple)</ml-radio></p>\n  <p><ml-radio id=\"radio5\" formControlName=\"options\" value=\"option5\" disabled>Option 5 (Disabled)</ml-radio></p>\n  <p><ml-button-submit aspect=\"raised\" text=\"Submit to console\" ripple></ml-button-submit></p>\n</form>\n\n<debug-form [name]=\"formRadio\"></debug-form>\n<view-source uri=\"radio/pagRadio.ts\"></view-source>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PagRadio);
    return PagRadio;
}());
exports.PagRadio = PagRadio;
//# sourceMappingURL=pagRadio.js.map