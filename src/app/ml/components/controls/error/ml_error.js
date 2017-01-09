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
var MlError = (function () {
    function MlError() {
    }
    MlError.prototype.showError = function () {
        if (this.control) {
            return this.control.hasError(this.validator);
        }
    };
    MlError.prototype.ngOnInit = function () {
        this.validator = this.validator.toLowerCase(); // control.errors.minLength != control.errors['minLength'] for example
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MlError.prototype, "control", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlError.prototype, "validator", void 0);
    MlError = __decorate([
        core_1.Component({
            selector: 'ml-error',
            template: '<div *ngIf="showError()"><ng-content></ng-content></div>'
        }), 
        __metadata('design:paramtypes', [])
    ], MlError);
    return MlError;
}());
exports.MlError = MlError;
//# sourceMappingURL=C:/Users/Yago/WebstormProjects/material-light/src/app/ml/components/controls/error/ml_error.js.map