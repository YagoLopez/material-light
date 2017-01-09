//todo: hay que revisar como se pueden añadir estilos al componnente. por ejemplo definir el añcho de la barra globalmente
//todo: cambiar la instanciacion de los objetos Material en el constructor en vez de en el ciclo ngOnInit()
//todo: probar a sacar factor comun en una factoria a los constructores para evitar repetir tanto codigo
//todo: cambiar todas las declaraciones declare var material*: any -> declare var material*: Object
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
var mdl_progress_1 = require("./mdl_progress");
var ml = require("../../lib/ml_lib");
var MlProgressBar = (function () {
    function MlProgressBar(host, ren) {
        this.host = host;
        this.ren = ren;
        this.progressValue = '0';
        this.mdlProgress = new mdl_progress_1.default(this.host.nativeElement);
    }
    MlProgressBar.prototype.setProgress = function (value) {
        this.progressValue = value;
        this.mdlProgress.setProgress(value);
    };
    MlProgressBar.prototype.setBuffer = function (value) {
        this.progressValue = value;
        this.mdlProgress.setBuffer(value);
    };
    MlProgressBar.prototype.ngOnInit = function () {
        if (this.progressValue)
            this.setProgress(this.progressValue);
        if (this.bufferValue)
            this.setBuffer(this.bufferValue);
        if (this.indeterminate === '')
            ml.setClass(this.host, 'mdl-progress__indeterminate', this.ren);
    };
    __decorate([
        core_1.Input('progress'), 
        __metadata('design:type', String)
    ], MlProgressBar.prototype, "progressValue", void 0);
    __decorate([
        core_1.Input('buffer'), 
        __metadata('design:type', String)
    ], MlProgressBar.prototype, "bufferValue", void 0);
    __decorate([
        // BUFFER must be greater than PROGRESS to be visible
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlProgressBar.prototype, "indeterminate", void 0);
    MlProgressBar = __decorate([
        core_1.Component({
            selector: 'ml-progressbar',
            styleUrls: ['./ml_progressbar.css'],
            moduleId: module.id.toString(),
            encapsulation: core_1.ViewEncapsulation.None,
            host: { class: 'mdl-progress' },
            template: ''
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MlProgressBar);
    return MlProgressBar;
}());
exports.MlProgressBar = MlProgressBar;
//# sourceMappingURL=ml_progressbar.js.map