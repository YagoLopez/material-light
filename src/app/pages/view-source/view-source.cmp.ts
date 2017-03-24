import {Component, Input} from '@angular/core';

@Component({
selector: 'view-source',
template:`
<style>
  .btn-view-src{font-size: small; display: block; color: grey; border: 1px solid grey; 
    text-decoration: none; padding: 8px; border-radius: 2px; box-shadow: 1px 1px 5px lightgrey; margin: 10px}
  .btn-view-src:active{background-color: lightgrey}  
  .btn-view-src-container{padding: 25px; text-align: center; margin: auto; width: 68%}
</style>
<div class="btn-view-src-container">
  <a [href]="urlRaw" class="btn-view-src" target="_blank">View raw source ⇒ ❐</a>
  <a [href]="urlFormated" class="btn-view-src" target="_blank">Formated source ⇒ ❐</a>
</div>
`//template
})
export class ViewSourceCmp{
  @Input() uri: string;
  urlBaseRaw = 'https://raw.githubusercontent.com/YagoLopez/material-light/master/src/app/pages';
  urlBaseFormated = 'https://github.com/YagoLopez/material-light/blob/master/src/app/pages';
  urlRaw: string;
  urlFormated: string;
  ngOnInit(){
    this.urlRaw = `${this.urlBaseRaw}/${this.uri}`;
    this.urlFormated = `${this.urlBaseFormated}/${this.uri}`;
  }
}
