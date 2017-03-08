//todo: revisar el controlador
//todo: hacer componente MlRouterProgressbar

import {Component, Output, EventEmitter} from '@angular/core';
import {Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError} from "@angular/router";

@Component({
selector: 'ml-loader-router',
template: `
<style>
.router-loader-text{
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 37%;
  bottom: 0;
  text-align: center;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 14px;}
.router-loader {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 44%;
  text-align: center;}
</style>
<div class="router-loader">
<ml-spinner *ngIf="loading" class="router-loader" single-color></ml-spinner>
</div>
`//template
})
export class MlLoaderRouter {

  loading = true;
  constructor(private router: Router) {}
  @Output() isLoading: EventEmitter<boolean> = new EventEmitter();

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
        this.loading = false;
        this.isLoading.emit(this.loading);
        console.error('MlLoaderRouter: navigation error');
     }
    });
  }
}