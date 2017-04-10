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
var MlDialog = (function () {
    function MlDialog() {
    }
    MlDialog.prototype.open = function () { this.mdlDialog.nativeElement.showModal(); };
    MlDialog.prototype.close = function () { this.mdlDialog.nativeElement.close(); };
    MlDialog.prototype.ngOnInit = function () {
        if (typeof HTMLDialogElement !== 'function') {
            window.alert('HTML5 Dialog component not supported by browser');
        }
    };
    __decorate([
        core_1.ViewChild('mdlDialog'), 
        __metadata('design:type', core_1.ElementRef)
    ], MlDialog.prototype, "mdlDialog", void 0);
    MlDialog = __decorate([
        core_1.Component({
            selector: 'ml-dialog',
            moduleId: module.id,
            styleUrls: ['./mlDialog.css'],
            template: "\n  \n<dialog #mdlDialog class=\"mdl-dialog\">\n  <h6 class=\"mdl-dialog__title\">\n    <ng-content select=\"ml-dialog-title\"></ng-content>\n  </h6>\n  <div class=\"mdl-dialog__content\">\n    <ng-content select=\"ml-dialog-content\"></ng-content>\n  </div>\n  <div class=\"mdl-dialog__actions\">\n    <ng-content select=\"ml-dialog-actions\"></ng-content>\n  </div>\n</dialog>    \n  \n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], MlDialog);
    return MlDialog;
}());
exports.MlDialog = MlDialog;
var MlDialogTitle = (function () {
    function MlDialogTitle() {
    }
    MlDialogTitle = __decorate([
        core_1.Directive({ selector: 'ml-dialog-title' }), 
        __metadata('design:paramtypes', [])
    ], MlDialogTitle);
    return MlDialogTitle;
}());
exports.MlDialogTitle = MlDialogTitle;
var MlDialogContent = (function () {
    function MlDialogContent() {
    }
    MlDialogContent = __decorate([
        core_1.Directive({ selector: 'ml-dialog-content' }), 
        __metadata('design:paramtypes', [])
    ], MlDialogContent);
    return MlDialogContent;
}());
exports.MlDialogContent = MlDialogContent;
var MlDialogActions = (function () {
    function MlDialogActions() {
    }
    MlDialogActions = __decorate([
        core_1.Directive({ selector: 'ml-dialog-actions' }), 
        __metadata('design:paramtypes', [])
    ], MlDialogActions);
    return MlDialogActions;
}());
exports.MlDialogActions = MlDialogActions;
