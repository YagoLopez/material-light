// https://material.io/icons/

// ICON NAMES: http://google.github.io/web-starter-kit/latest/styleguide/icons/demo.html
// NOTE: change middle dash (-) for lower dash (_) in icon name for using ICON NAMES from the above url

//todo: incluir google fonts en local

import {Component, ViewEncapsulation} from "@angular/core";

@Component({
selector: 'ml-icon',
moduleId: module.id.toString(),
encapsulation: ViewEncapsulation.None,
styles: [`
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  word-wrap: normal;
  /*vertical-align: middle;*/
  -moz-font-feature-settings: 'liga';
  font-feature-settings: 'liga';
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;}
`],
template:'<ng-content></ng-content>',
host: {class: 'material-icons'} })
export class MlIcon{}
