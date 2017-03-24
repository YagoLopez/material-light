import {Component, Renderer, ElementRef, Input, ViewEncapsulation} from '@angular/core';
import * as ml from "../../lib/ml_lib";

@Component({
selector: 'ml-grid',
// moduleId: module.id.toString(),
styleUrls: ['./mlGrid.css'],
host: {class: 'mdl-grid'},
encapsulation: ViewEncapsulation.None,
template:`

<ng-content></ng-content>

`//template
})
export class MlGrid {

  @Input('no-space') noSpace: string;
  constructor (private host: ElementRef, private ren: Renderer){}

  ngOnInit(){
    if (this.noSpace === '') {
      ml.setClass(this.host, 'mdl-grid--no-spacing', this.ren);
    }  
  }
}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-grid-cell',
host: {class: 'mdl-cell'},
template: '<ng-content></ng-content>'
})
export class MlGridCell{

  // A cell can have several widths depending on the device
  // For example, @Input.width = 1 => the cell will have one column width.
  // width = 12 (maximum) => full screen width

  // More CSS classes can be added directly to the cell: https://getmdl.io/components/index.html#layout-section/grid

  @Input() width: string;
  @Input('phone-width') phoneWith: string;
  @Input('tablet-width') tabletWidth: string;
  @Input('desktop-width') desktopWidth: string;
  
  constructor (private host: ElementRef, private ren: Renderer){}
  
  ngOnInit(){
    let widthClass = 'mdl-cell--'+this.width+'-col';
    let phoneWidthClass = 'mdl-cell--'+this.phoneWith+'-col-phone';
    let tabletWidthClass = 'mdl-cell--'+this.tabletWidth+'-col-tablet';
    let desktopWidthClass = 'mdl-cell--'+this.desktopWidth+'-col-desktop';
    let host = this.host;

    if(this.width) {
      ml.setClass(host, widthClass, this.ren);
    }  
    if(this.phoneWith) {
      ml.setClass(host, phoneWidthClass, this.ren);
    }
    if(this.tabletWidth) {
      ml.setClass(host, tabletWidthClass, this.ren);
    }
    if(this.desktopWidth) {
      ml.setClass(host, desktopWidthClass, this.ren);
    }
  }
}
