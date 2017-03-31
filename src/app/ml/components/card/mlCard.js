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
var MlCard = (function () {
    function MlCard(host, ren) {
        this.host = host;
        this.ren = ren;
    }
    MlCard.prototype.ngOnInit = function () {
        this.cardTitle.nativeElement.style.background = "url('" + this.img + "')";
        this.cardTitle.nativeElement.style.color = "#fff";
        this.cardTitle.nativeElement.style.backgroundSize = "cover";
        if (this.shadow) {
            this.shadow = "mdl-shadow--" + this.shadow + "dp";
            ml.setClass(this.host, this.shadow, this.ren);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlCard.prototype, "shadow", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlCard.prototype, "img", void 0);
    __decorate([
        core_1.ViewChild('cardTitle'), 
        __metadata('design:type', core_1.ElementRef)
    ], MlCard.prototype, "cardTitle", void 0);
    MlCard = __decorate([
        core_1.Component({
            selector: 'ml-card',
            moduleId: module.id,
            styleUrls: ['./mlCard.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            host: { class: 'mdl-card' },
            template: "\n\n<div #cardTitle class=\"mdl-card__title mdl-card--expand\">\n  <h2 class=\"mdl-card__title-text\">\n    <ng-content select=\"ml-card-title\"></ng-content>\n  </h2>\n</div>\n<div class=\"mdl-card__supporting-text\">\n  <ng-content select=\"ml-card-text\"></ng-content>\n</div>\n<div class=\"mdl-card__actions mdl-card--border\">\n  <ng-content select=\"ml-card-actions\"></ng-content>\n</div>\n<div class=\"mdl-card__menu\">\n  <ng-content select=\"ml-card-menu\"></ng-content>\n</div>\n\n" //template
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MlCard);
    return MlCard;
}());
exports.MlCard = MlCard;
var MlCardTitle = (function () {
    function MlCardTitle() {
    }
    MlCardTitle = __decorate([
        core_1.Directive({ selector: 'ml-card-title' }), 
        __metadata('design:paramtypes', [])
    ], MlCardTitle);
    return MlCardTitle;
}());
exports.MlCardTitle = MlCardTitle;
var MlCardSubtitle = (function () {
    function MlCardSubtitle() {
    }
    MlCardSubtitle = __decorate([
        core_1.Directive({ selector: 'ml-card-subtitle' }), 
        __metadata('design:paramtypes', [])
    ], MlCardSubtitle);
    return MlCardSubtitle;
}());
exports.MlCardSubtitle = MlCardSubtitle;
var MlCardMedia = (function () {
    function MlCardMedia() {
    }
    MlCardMedia = __decorate([
        core_1.Directive({ selector: 'ml-card-media' }), 
        __metadata('design:paramtypes', [])
    ], MlCardMedia);
    return MlCardMedia;
}());
exports.MlCardMedia = MlCardMedia;
var MlCardText = (function () {
    function MlCardText() {
    }
    MlCardText = __decorate([
        core_1.Directive({ selector: 'ml-card-text' }), 
        __metadata('design:paramtypes', [])
    ], MlCardText);
    return MlCardText;
}());
exports.MlCardText = MlCardText;
var MlCardActions = (function () {
    function MlCardActions() {
    }
    MlCardActions = __decorate([
        core_1.Directive({ selector: 'ml-card-actions' }), 
        __metadata('design:paramtypes', [])
    ], MlCardActions);
    return MlCardActions;
}());
exports.MlCardActions = MlCardActions;
var MlCardMenu = (function () {
    function MlCardMenu() {
    }
    MlCardMenu = __decorate([
        core_1.Directive({ selector: 'ml-card-menu' }), 
        __metadata('design:paramtypes', [])
    ], MlCardMenu);
    return MlCardMenu;
}());
exports.MlCardMenu = MlCardMenu;
