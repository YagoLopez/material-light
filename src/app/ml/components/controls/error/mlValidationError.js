//todo: eliminar @Input() validateControl, pasando el control padre
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
var MlValidationError = (function () {
    function MlValidationError() {
    }
    MlValidationError.prototype.showError = function () {
        if (this.validateControl) {
            return (this.validateControl.hasError(this.validator) && this.validateControl.touched);
        }
    };
    MlValidationError.prototype.ngOnInit = function () {
        // cause of hack: validateControl.errors.minLength != validateControl.errors['minLength'] for example
        this.validator = this.validator.toLowerCase();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MlValidationError.prototype, "validateControl", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlValidationError.prototype, "validator", void 0);
    MlValidationError = __decorate([
        core_1.Component({
            selector: 'ml-error',
            template: '<div *ngIf="showError()" style="display: block"><ng-content></ng-content></div>'
        }), 
        __metadata('design:paramtypes', [])
    ], MlValidationError);
    return MlValidationError;
}());
exports.MlValidationError = MlValidationError;
