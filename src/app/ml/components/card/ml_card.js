//todo: arreglar subtitulo
//todo: hacer una forma facil de poner imagen de fondo con titulo en letras blancas
//todo: añadir la clase 'expand' para imagenes
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
var ml = require("../../lib/ml_lib");
// ---------------------------------------------------------------------------------------------------------------------
var MlCard = (function () {
    function MlCard(host, ren) {
        this.host = host;
        this.ren = ren;
    }
    MlCard.prototype.ngOnInit = function () {
        if (this.shadow) {
            this.shadow = "mdl-shadow--" + this.shadow + "dp";
            ml.setClass(this.host, this.shadow, this.ren);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlCard.prototype, "shadow", void 0);
    MlCard = __decorate([
        core_1.Component({
            selector: 'ml-card',
            styleUrls: ['./ml_card.css'],
            moduleId: module.id.toString(),
            encapsulation: core_1.ViewEncapsulation.None,
            host: { class: 'mdl-card' },
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MlCard);
    return MlCard;
}());
exports.MlCard = MlCard;
// ---------------------------------------------------------------------------------------------------------------------
var MlCardTitle = (function () {
    function MlCardTitle() {
    }
    MlCardTitle = __decorate([
        core_1.Component({
            selector: 'ml-card-title',
            host: { class: 'mdl-card__title' },
            template: '<div class="mdl-card__title-text"><ng-content></ng-content></div>'
        }), 
        __metadata('design:paramtypes', [])
    ], MlCardTitle);
    return MlCardTitle;
}());
exports.MlCardTitle = MlCardTitle;
// ---------------------------------------------------------------------------------------------------------------------
var MlCardSubtitle = (function () {
    function MlCardSubtitle() {
    }
    MlCardSubtitle = __decorate([
        core_1.Component({
            selector: 'ml-card-subtitle',
            host: { class: 'mdl-card__subtitle-text' },
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [])
    ], MlCardSubtitle);
    return MlCardSubtitle;
}());
exports.MlCardSubtitle = MlCardSubtitle;
// ---------------------------------------------------------------------------------------------------------------------
var MlCardMedia = (function () {
    function MlCardMedia() {
    }
    MlCardMedia = __decorate([
        core_1.Component({
            selector: 'ml-card-media',
            host: { class: 'mdl-card__media' },
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [])
    ], MlCardMedia);
    return MlCardMedia;
}());
exports.MlCardMedia = MlCardMedia;
// ---------------------------------------------------------------------------------------------------------------------
var MlCardText = (function () {
    function MlCardText() {
    }
    MlCardText = __decorate([
        core_1.Component({
            selector: 'ml-card-text',
            host: { class: 'mdl-card__supporting-text' },
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [])
    ], MlCardText);
    return MlCardText;
}());
exports.MlCardText = MlCardText;
// ---------------------------------------------------------------------------------------------------------------------
var MlCardActions = (function () {
    function MlCardActions() {
    }
    MlCardActions = __decorate([
        core_1.Component({
            selector: 'ml-card-actions',
            host: { class: 'mdl-card__actions' },
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [])
    ], MlCardActions);
    return MlCardActions;
}());
exports.MlCardActions = MlCardActions;
// ---------------------------------------------------------------------------------------------------------------------
// export const MlCard = [
//   MlCardContainer,
//   MlCardTitle,
//   MlCardSubtitle,
//   MlCardMedia,
//   MlCardText,
//   MlCardActions
// ];
//# sourceMappingURL=ml_card.js.map