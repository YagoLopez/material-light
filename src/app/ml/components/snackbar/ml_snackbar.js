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
var mdl_snackbar_1 = require("./mdl_snackbar");
var MlSnackBar = (function () {
    function MlSnackBar(hostElm) {
        this.hostElm = hostElm;
    }
    MlSnackBar.prototype.show = function () { this.mdlSnackbar.showSnackbar(this.config); };
    MlSnackBar.prototype.close = function () { this.mdlSnackbar.cleanup_(); };
    MlSnackBar.prototype.ngAfterViewInit = function () { this.mdlSnackbar = new mdl_snackbar_1.default(this.hostElm.nativeElement); };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MlSnackBar.prototype, "config", void 0);
    MlSnackBar = __decorate([
        core_1.Component({
            selector: 'ml-snackbar',
            styleUrls: ['./ml_snackbar.css'],
            moduleId: module.id.toString(),
            encapsulation: core_1.ViewEncapsulation.None,
            host: { class: 'mdl-snackbar' },
            template: "\n\n<div class=\"mdl-snackbar__text\"></div>\n<button type=\"button\" class=\"mdl-snackbar__action\" (click)=\"close()\"></button>\n\n" //template
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MlSnackBar);
    return MlSnackBar;
}());
exports.MlSnackBar = MlSnackBar;
//# sourceMappingURL=ml_snackbar.js.map