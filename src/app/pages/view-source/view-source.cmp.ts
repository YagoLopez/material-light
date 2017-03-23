import {Component, Input} from '@angular/core';

@Component({
selector: 'view-source',
template:`
<style>
  .btn-view-src{font-size: small; display: block; color: grey; border: 1px solid grey; 
    text-decoration: none; padding: 5px; border-radius: 2px; box-shadow: 2px 2px 5px lightgrey; margin: 10px}
  .btn-view-src:active{background-color: lightgrey}  
  .btn-view-src-container{padding: 25px; text-align: center; margin: auto; width: 68%}
</style>
<div class="btn-view-src-container">
  <a href="javascript:void(0)" (click)="viewRawSource()" class="btn-view-src">View raw source ⇒ ⧉</a>
  <a href="javascript:void(0)" (click)="viewFormatedSource()" class="btn-view-src">Formated source ⇒ ⧉</a>
</div>
`//template
})
export class ViewSourceCmp{
  @Input() uri: string;
  urlBaseRaw = 'https://raw.githubusercontent.com/YagoLopez/material-light/master/src/app/pages';
  urlBaseFormated = 'https://github.com/YagoLopez/material-light/blob/master/src/app/pages';
  features = 'resizable,scrollbars=yes,status=0,toolbar=0,menubar=0';
  viewRawSource(){ window.open(`${this.urlBaseRaw}/${this.uri}`, '_blank', this.features); }
  viewFormatedSource(){ window.open(`${this.urlBaseFormated}/${this.uri}`, '_blank', this.features); }
}
