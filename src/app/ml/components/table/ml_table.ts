//todo: ripple effect doesnt work on checkboxes
//todo: quizas se pueda evitar la repeticion de codigo usando herencia (sobre todo con los constructores repetidos)

import {Component, Renderer, ElementRef, ViewEncapsulation, Directive, Input} from '@angular/core';
import * as ml from '../../lib/ml_lib'

// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'table.[ml-table]',
styleUrls: ['./ml_table.css'],
encapsulation: ViewEncapsulation.None,
moduleId: module.id.toString(),
host: {class: 'mdl-data-table'},
template: '<ng-content></ng-content>'
})
export class MlTableContainer {

  @Input() shadow: string;
  @Input() selectable: string;
  @Input() order: string;

  constructor(
    private host: ElementRef,
    private ren: Renderer
  ) {}

  private shadowClassName(shadowValue: string): string {
    return 'mdl-shadow--'+ shadowValue +'dp';
  }

  ngOnInit() {
    ml.setClass(this.host, this.shadowClassName(this.shadow), this.ren);

    if (this.selectable === "")
      ml.setClass(this.host, 'mdl-data-table--selectable', this.ren);

    if (this.order === "asc")
      ml.setClass(this.host, 'mdl-data-table__header--sorted-ascending', this.ren);

    if (this.order === "desc")
      ml.setClass(this.host, 'mdl-data-table__header--sorted-descending', this.ren);

    // new MaterialDataTable(this.host.nativeElement);
  }
}
// ---------------------------------------------------------------------------------------------------------------------
@Directive({
selector: '[alphanumeric]',
host: {class: 'mdl-data-table__cell--non-numeric'}
})
export class MlTableAlphanumericCell {}
// ---------------------------------------------------------------------------------------------------------------------

export const MlTable = [MlTableContainer, MlTableAlphanumericCell];