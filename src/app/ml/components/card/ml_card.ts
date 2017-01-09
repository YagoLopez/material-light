//todo: arreglar subtitulo
//todo: hacer una forma facil de poner imagen de fondo con titulo en letras blancas
//todo: añadir la clase 'expand' para imagenes

import {Component, ElementRef, Input, Renderer, ViewEncapsulation} from "@angular/core";
import * as ml from "../../lib/ml_lib";
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-card',
styleUrls: ['./ml_card.css'],
moduleId: module.id.toString(),
encapsulation: ViewEncapsulation.None,
host: {class: 'mdl-card'},
template: '<ng-content></ng-content>'
})
export class MlCardContainer{

  @Input() shadow: string;

  constructor(
    private host: ElementRef,
    private ren: Renderer){
  }

  ngOnInit(){
     if (this.shadow){
        this.shadow = `mdl-shadow--${this.shadow}dp`;
        ml.setClass(this.host, this.shadow, this.ren);
     }
  }
}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-card-title',
host: {class: 'mdl-card__title'},
template: '<div class="mdl-card__title-text"><ng-content></ng-content></div>'
})
export class MlCardTitle{}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-card-subtitle',
host: {class: 'mdl-card__subtitle-text'},
template: '<ng-content></ng-content>'
})
export class MlCardSubtitle{}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-card-media',
host: {class: 'mdl-card__media'},
template: '<ng-content></ng-content>'
})
export class MlCardMedia {}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-card-text',
host: {class: 'mdl-card__supporting-text'},
template: '<ng-content></ng-content>'
})
export class MlCardText {}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-card-actions',
host: {class: 'mdl-card__actions'},
template: '<ng-content></ng-content>'
})
export class MlCardActions {}
// ---------------------------------------------------------------------------------------------------------------------

export const MlCard = [
  MlCardContainer,
  MlCardTitle,
  MlCardSubtitle,
  MlCardMedia,
  MlCardText,
  MlCardActions
];

