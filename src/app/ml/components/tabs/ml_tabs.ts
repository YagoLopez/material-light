import {Component, ElementRef, Directive, Renderer, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";
import MdlTabs from "./mdl_tabs";
import * as ml from "../../lib/ml_lib";

// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-tabs',
styleUrls: ['./ml_tabs.css'],
encapsulation: ViewEncapsulation.None,
changeDetection: ChangeDetectionStrategy.OnPush,
moduleId: module.id.toString(),
host: {class: 'mdl-tabs'},
template: '<ng-content></ng-content>'
})
export class MlTabs {

  constructor(
    private host: ElementRef){
  }

  ngAfterViewInit() {
    new MdlTabs(this.host.nativeElement);
  }
}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-tabs-bar',
host: {class: 'mdl-tabs__tab-bar'},
template: '<ng-content></ng-content>'})
export class MlTabsBar{}
// ---------------------------------------------------------------------------------------------------------------------
@Directive({
selector: '[tab]',
host: {class: 'mdl-tabs__tab'}})
export class MlTab {} // Do not confuse with MdlTabHeader
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-tab-panel',
host: {class: 'mdl-tabs__panel'},
template: '<ng-content></ng-content>'})
export class MlTabPanel{}
