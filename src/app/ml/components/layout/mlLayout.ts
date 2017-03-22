//todo: poder poner ml-header en cada pagina (como en ionic)
//todo: poder definir colores, temas, fuentes, etc. Consultar colores en mlLayout.css
//todo: hacer de ml un modulo en vez de un namespace para poder importar funciones individuales
//todo: implementar MlLayout usando slots

import {Component, ElementRef, Renderer, ViewEncapsulation, Input, Directive, ChangeDetectionStrategy} from "@angular/core";
import MdlLayout from "./mlLayoutLib";
import * as ml from "../../lib/ml_lib";
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-layout',
// moduleId: module.id.toString(),
changeDetection: ChangeDetectionStrategy.OnPush,
styleUrls: ['./mlLayout.css', '../ripple/mlRipple.css', '../icon/mlIicon.css'],
host: {class: 'mdl-layout'},
encapsulation: ViewEncapsulation.None,
template: '<ng-content></ng-content>'
})
export class MlLayout {

  // Input vales must be in lowercase
  @Input() drawer: string;
  @Input() tabs: string;
  mdlLayout: MdlLayout;

  constructor(private host: ElementRef, private ren: Renderer){}

  hideDrawer(){
    this.mdlLayout.drawer_.classList.remove('is-visible');
    this.mdlLayout.obfuscator_.classList.remove('is-visible');
  }
  
  ngAfterViewInit() {
    if (this.drawer === 'fixed')
      ml.setClass(this.host, 'mdl-layout--fixed-drawer', this.ren);

    if (this.tabs === 'fixed'){
      ml.setClass(this.host, 'mdl-layout--fixed-header', this.ren);
      ml.setClass(this.host, 'mdl-layout--fixed-tabs', this.ren);
    }
    this.mdlLayout = new MdlLayout(this.host.nativeElement);
  }
}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-header',
host: {class: 'mdl-layout__header'},
template: '<ng-content></ng-content>'
})
export class MlHeader {

  @Input() waterfall: string;
  @Input() transparent: string;
  @Input() seamed: string;

  constructor(private host: ElementRef, private ren: Renderer){}
  
  ngOnInit() {
    if (this.seamed === '')
      ml.setClass(this.host, 'mdl-layout__header--seamed', this.ren);
  
    if (this.transparent === '')
      ml.setClass(this.host, 'mdl-layout__header--transparent', this.ren);
  
    if (this.waterfall === '')
      ml.setClass(this.host, 'mdl-layout__header--waterfall', this.ren);
  
    if (this.waterfall === 'hide-top'){
      ml.setClass(this.host, 'mdl-layout__header--waterfall', this.ren);
      ml.setClass(this.host, 'mdl-layout__header--waterfall-hide-top', this.ren);
    }
    // todo: Header scroll no funciona
    // todo: mdl-layout__content hace que la cabecera se quede fija o no
    // ml.setClass(this.host,'mdl-layout__header--scroll', this.ren);
  }
}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-header-row',
host: {class: 'mdl-layout__header-row'},
template: '<ng-content></ng-content>'})
export class MlHeaderRow {}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-spacer', template:'',
styles: ['.mdl-layout-spacer {-webkit-flex-grow: 1; -ms-flex-positive: 1; flex-grow: 1;}'],
encapsulation: ViewEncapsulation.None,
host: {class: 'mdl-layout-spacer'}})
export class MlSpacer{}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-nav',
host: {class: 'mdl-navigation'},
template: '<ng-content></ng-content>'})
export class MlNav {}
// ---------------------------------------------------------------------------------------------------------------------
@Directive({
selector: '[large-screen-only]',
host: {class: 'mdl-layout--large-screen-only'}})
export class MlLargeScreenOnly{}
// ---------------------------------------------------------------------------------------------------------------------
@Directive({
selector: '[small-screen-only]',
host: {class: 'mdl-layout--small-screen-ongly'}})
export class MlSmallScreenOnly{}
// ---------------------------------------------------------------------------------------------------------------------
@Directive({
selector: '[nav-item]',
host: {class: 'mdl-navigation__link'}})
export class MlNavItem{}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-drawer',
template: '<ng-content></ng-content>'
})
export class MlDrawer {

  constructor(private host: ElementRef, private ren: Renderer){}
  
  ngOnInit() {
   // Hides drawer and obfuscator when clicking item menu on drawer
   this.ren.listen(this.host.nativeElement, 'click', () => {
      this.host.nativeElement.classList.remove('is-visible');
      const obfuscator = document.querySelector('div.mdl-layout__obfuscator.is-visible');
      if(obfuscator){
        obfuscator.classList.remove('is-visible');
      }
   });
   ml.setClass(this.host,'mdl-layout__drawer', this.ren);
  }
}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-content',
host: {class: 'mdl-layout__content'},
template: '<ng-content></ng-content>'})
export class MlContent {}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-header-tabs',
host: {class: 'mdl-layout__tab-bar'},
template: '<ng-content></ng-content>'})
export class MlHeaderTabs {}
// ---------------------------------------------------------------------------------------------------------------------
@Directive({
selector: '[header-tab]',
host: {class: 'mdl-layout__tab'}})
export class MlHeaderTab {
  constructor(private host: ElementRef){}
  ngOnInit(){
    this.host.nativeElement.innerHTML += `
      <span class="mdl-layout__tab-ripple-container">
        <span class="mdl-ripple"></span>
      </span>`;
  }
}
// ---------------------------------------------------------------------------------------------------------------------
@Component({
selector: 'ml-content-tabheader',
host: {class: 'mdl-layout__tab-panel'},
template: '<ng-content></ng-content>'})
export class MlHeaderTabContent {}
// ---------------------------------------------------------------------------------------------------------------------
@Directive({
selector: '[active]',
host: {class: 'is-active'}})
export class MlHeaderTabActive {}
