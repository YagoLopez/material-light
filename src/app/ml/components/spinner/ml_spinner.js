//todo: hay que revisar como se pueden añadir estilos al componnente. por ejemplo definir el añcho de la barra globalmente
//todo: revisar lo de la clase active
//todo: repensar lo de las atributos sin valor especifico de cara al comportamiento de angular en data-binding:
//todo: [attributo]="valor". Si no hay valor puede que haya problemas
//todo: parece que sobra la clase mdl-js-*
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
var mdl_spinner_1 = require("./mdl_spinner");
var ml = require("../../lib/ml_lib");
var MlSpinner = (function () {
    function MlSpinner(host, ren) {
        this.host = host;
        this.ren = ren;
    }
    MlSpinner.prototype.start = function () { this.mdlSpinner.start(); };
    MlSpinner.prototype.stop = function () { this.mdlSpinner.stop(); };
    MlSpinner.prototype.ngOnInit = function () {
        if (this.singleColor === '')
            ml.setClass(this.host, 'mdl-spinner--single-color', this.ren);
        this.mdlSpinner = new mdl_spinner_1.default(this.host.nativeElement);
    };
    __decorate([
        core_1.Input('single-color'), 
        __metadata('design:type', String)
    ], MlSpinner.prototype, "singleColor", void 0);
    __decorate([
        core_1.Input('multicolor'), 
        __metadata('design:type', String)
    ], MlSpinner.prototype, "multicolor", void 0);
    MlSpinner = __decorate([
        core_1.Component({
            selector: 'ml-spinner',
            styleUrls: ['./ml_spinner.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            moduleId: module.id.toString(),
            host: { class: 'mdl-spinner' },
            template: ''
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MlSpinner);
    return MlSpinner;
}());
exports.MlSpinner = MlSpinner;
//# sourceMappingURL=ml_spinner.js.map