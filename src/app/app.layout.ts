import {Component, ViewChild, ElementRef} from '@angular/core';
import {Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError} from '@angular/router';

@Component({
selector: 'ml-demo-app',
template: `

<style>
  a[nav-item]{padding-top: 10px !important; padding-bottom: 10px !important}
  .bg-grey{background: lightgrey}
  .content-pad{padding: 10px}
  .active-nav{background: darkgrey; color: white !important}
  .page-loader{
    width: 100%;
    height: 500px;
    position: absolute;
    text-align: center;
    margin-top: 76%;  
  }
</style>

<ml-layout drawer="fixed">

  <!-- Header ------------------------------------------------------------------------------------------------------ -->

  <ml-header>
    <ml-header-row>
      <ml-title>Material Light Demo</ml-title>
      <ml-spacer></ml-spacer>
      <ml-nav large-screen-only>
        <a nav-item href="">Link</a>
        <a nav-item href="">Link</a>
        <a nav-item href="">Link</a>
        <a nav-item href="">Link</a>
      </ml-nav>
    </ml-header-row>
    <!--<ml-header-tabs *ngIf="headerTabs">-->
    <ml-header-tabs>
      <a header-tab href="#tab1" ripple active>Tab 1</a>
      <a header-tab href="#tab2" ripple>Tab 2</a>
      <a header-tab href="#tab3" ripple>Tab 3</a>
      <a header-tab href="#tab4" ripple>Tab 4</a>
      <a header-tab href="#tab5" ripple>Tab 5</a>
      <a header-tab href="#tab6" ripple>Tab 6</a>
    </ml-header-tabs>
  </ml-header>

  <!-- Drawer ------------------------------------------------------------------------------------------------------ -->
  
  <ml-drawer>
    <ml-title class="bg-grey">Material Light</ml-title>
    <ml-nav>
      <a nav-item routerLink="button" routerLinkActive="active-nav">Button</a>
      <a nav-item routerLink="selectfield" routerLinkActive="active-nav">SelectField</a>
      <a nav-item routerLink="textfield" routerLinkActive="active-nav">TextControls</a>
      <a nav-item routerLink="checkbox" routerLinkActive="active-nav">Checkbox</a>
      <a nav-item routerLink="radio" routerLinkActive="active-nav">RadioButton</a>
      <a nav-item routerLink="switch" routerLinkActive="active-nav">SwitchButton</a>
      <a nav-item routerLink="toggle" routerLinkActive="active-nav">IconToggle</a>
      <a nav-item routerLink="badge" routerLinkActive="active-nav">Badge</a>
      <a nav-item routerLink="card" routerLinkActive="active-nav">Card</a>
      <a nav-item routerLink="grid" routerLinkActive="active-nav">Grid</a>
      <a nav-item routerLink="tabs" routerLinkActive="active-nav">Tabs</a>
      <a nav-item routerLink="chip" routerLinkActive="active-nav">Chip</a>
      <a nav-item routerLink="list" routerLinkActive="active-nav">List</a>
      <a nav-item routerLink="menu" routerLinkActive="active-nav">Menu</a>
      <a nav-item routerLink="progressbar" routerLinkActive="active-nav">ProgressBar</a>
      <a nav-item routerLink="spinner" routerLinkActive="active-nav">Spinner</a>
      <a nav-item routerLink="snackbar" routerLinkActive="active-nav">SnackBar</a>
      <a nav-item routerLink="tooltip" routerLinkActive="active-nav">Tooltip</a>
      <a nav-item routerLink="slider" routerLinkActive="active-nav">Slider</a>
      <a nav-item routerLink="dialog" routerLinkActive="active-nav">Dialog</a>
      <a nav-item routerLink="table" routerLinkActive="active-nav">Table</a>
      <!--<a nav-item href="#" (click)="toggleHeaderTabs()" routerLinkActive="active-nav">Header Tabs</a>-->
    </ml-nav>
  </ml-drawer>
  
  <!-- Content ----------------------------------------------------------------------------------------------------- -->
  
  <ml-content class="content-pad">
    <ml-loader-router (isLoading)="onLoading($event)"></ml-loader-router>
    <ml-header-tab-content id="tab1" active [hidden]="isLoading">
      <router-outlet></router-outlet>
    </ml-header-tab-content>
    <ml-header-tab-content id="tab2"><ml-title>Empty tab 2. Back to tab 1</ml-title></ml-header-tab-content>
    <ml-header-tab-content id="tab3"><ml-title>Empty tab 3. Back to tab 1</ml-title></ml-header-tab-content>
    <ml-header-tab-content id="tab4"><ml-title>Empty tab 4. Back to tab 1</ml-title></ml-header-tab-content>
    <ml-header-tab-content id="tab5"><ml-title>Empty tab 5. Back to tab 1</ml-title></ml-header-tab-content>
    <ml-header-tab-content id="tab6"><ml-title>Empty tab 6. Back to tab 1</ml-title></ml-header-tab-content>
  </ml-content>
    
  <!-- End --------------------------------------------------------------------------------------------------------- -->

</ml-layout>

`//template

})
export class App {

  isLoading = false;

  onLoading($event){
    // console.log('on start load event', $event);
    this.isLoading = $event;
  }

  // This code is ony to show/hide header tabs

  // private headerTabs = false;
  //
  // getUrlParameter(name: string): null | string {
  //     name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  //     let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  //     let results = regex.exec(location.search);
  //     return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  // };
  //
  // toggleHeaderTabs(){
  //   this.headerTabs = !this.headerTabs;
  //   window.location.href = '?headertabs=' + this.headerTabs;
  // }


  // ngAfterViewInit(){
  //   const temp: string | any = this.getUrlParameter('headertabs');
  //   temp.toLowerCase() === 'true' ? this.headerTabs = true : this.headerTabs = false;
  // }

}