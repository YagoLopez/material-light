//todo: hacer componente MlLoaderProgressbar
//todo: habilitar opcion para incluir texto en loader
//todo: sustituir ml-page-loader por gif animado para mas rendimiento
import {Component, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError} from "@angular/router";

@Component({
selector: 'ml-page-loader',
template:`
<style>
.loader-text{position: absolute; margin: auto; left: 0; right: 0; top: 37%; bottom: 0; text-align: center;
  font-family: "Roboto",serif; font-size: 14px}
.loader {position: absolute; margin: auto; left: 0; right: 0; top: 44%; text-align: center}
</style>
<div #divLoader class="loader" *ngIf="loading">
<ml-spinner class="loader" single-color></ml-spinner>
</div>
`//template
})
export class MlPageLoader {
  @ViewChild('divLoader') divLoader: ElementRef;
  @Output() isLoading: EventEmitter<boolean> = new EventEmitter();
  loading = true;
  constructor (private router: Router) {}

  public ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart){
        this.loading = true;
        this.isLoading.emit(this.loading);
      }
      if (event instanceof NavigationEnd){
        this.loading = false;
        this.isLoading.emit(this.loading);
      }
      if (event instanceof NavigationCancel){
        this.loading = false;
        this.isLoading.emit(this.loading);
      }
      if (event instanceof NavigationError){
        this.divLoader.nativeElement.remove();
        console.error('MlPageLoader: navigation error');
     }
    });
  }
}
