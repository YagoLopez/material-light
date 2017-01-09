//todo: control de excepciones en angular 2
//todo: revisar con linting e inspections al maximo, hay cosas que se pueden quitar y mejorar
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
var mdl_button_1 = require("./mdl_button");
var ml = require("../../../lib/ml_lib");
// NOTE: For incompatible attributes check: https://getmdl.io/components/index.html#buttons-section
var MlButton = (function () {
    function MlButton(host, ren) {
        this.host = host;
        this.ren = ren;
    }
    MlButton.prototype.ngOnInit = function () {
        // Input "aspect" ---------------------------------------------------------------------------------------------------
        if (ml.isSubstring('raised', this.aspect)) {
            ml.setClass(this.host, 'mdl-button--raised', this.ren);
        }
        if (ml.isSubstring('colored', this.aspect)) {
            ml.setClass(this.host, 'mdl-button--colored', this.ren);
        }
        if (ml.isSubstring('accent', this.aspect)) {
            ml.setClass(this.host, 'mdl-button--accent', this.ren);
        }
        // Input "type" -----------------------------------------------------------------------------------------------------
        if (ml.isSubstring('fab', this.type)) {
            ml.setClass(this.host, 'mdl-button--fab', this.ren);
        }
        if (ml.isSubstring('minifab', this.type)) {
            ml.setClass(this.host, 'mdl-button--fab', this.ren);
            ml.setClass(this.host, 'mdl-button--mini-fab', this.ren);
        }
        if (ml.isSubstring('icon', this.type)) {
            ml.setClass(this.host, 'mdl-button--icon', this.ren);
        }
        // End --------------------------------------------------------------------------------------------------------------
        new mdl_button_1.default(this.host.nativeElement);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlButton.prototype, "aspect", void 0);
    __decorate([
        // Admited values: [rised, colored, accent]* (* in lowercase)
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlButton.prototype, "type", void 0);
    MlButton = __decorate([
        core_1.Component({
            selector: 'ml-button',
            moduleId: module.id.toString(),
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['./ml_button.css'],
            host: { class: 'mdl-button' },
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MlButton);
    return MlButton;
}());
exports.MlButton = MlButton;
//# sourceMappingURL=ml_button.js.map