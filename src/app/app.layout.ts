import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
selector: 'ml-demo-app',
changeDetection: ChangeDetectionStrategy.OnPush,
template: `

<style>
  a[nav-item]{padding-top: 10px !important; padding-bottom: 10px !important}
  .bg-grey{background: lightgrey}
  .content-pad{padding: 10px}
</style>

<ml-layout>

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
    <ml-header-tabs *ngIf="headerTabs">
      <a tab-bar href="#tab1" active>Tab 1</a>
      <a tab-bar href="#tab2">Tab 2</a>
      <a tab-bar href="#tab3">Tab 3</a>
      <a tab-bar href="#tab4">Tab 4</a>
      <a tab-bar href="#tab5">Tab 5</a>
      <a tab-bar href="#tab6">Tab 6</a>
    </ml-header-tabs>
  </ml-header>

  <!-- Drawer ------------------------------------------------------------------------------------------------------ -->
  
  <ml-drawer>
    <ml-title class="bg-grey">Material Light</ml-title>
    <ml-nav>
      <a nav-item routerLink="button">Button</a>
      <a nav-item routerLink="badge">Badge</a>
      <a nav-item routerLink="card">Card</a>
      <a nav-item routerLink="grid">Grid</a>
      <a nav-item routerLink="tabs">Tabs</a>
      <a nav-item routerLink="chip">Chip</a>
      <a nav-item routerLink="list">List</a>
      <a nav-item routerLink="menu">Menu</a>
      <a nav-item routerLink="progressbar">ProgressBar</a>
      <a nav-item routerLink="spinner">Spinner</a>
      <a nav-item routerLink="snackbar">SnackBar</a>
      <a nav-item routerLink="tooltip">Tooltip</a>
      <a nav-item routerLink="checkbox">Checkbox</a>
      <a nav-item routerLink="radio">RadioButton</a>
      <a nav-item routerLink="switch">SwitchButton</a>
      <a nav-item routerLink="toggle">IconToggle</a>
      <a nav-item routerLink="textfield">TextControls</a>
      <a nav-item routerLink="selectfield">SelectField</a>
      <a nav-item routerLink="slider">Slider</a>
      <a nav-item routerLink="dialog">Dialog</a>
      <a nav-item routerLink="table">Table</a>
      <a nav-item href="#" (click)="toggleHeaderTabs()">Header Tabs</a>
    </ml-nav>
  </ml-drawer>
  
  <!-- Content ----------------------------------------------------------------------------------------------------- -->
  
  <ml-content class="content-pad"> 
    <ml-tab-content id="tab1" active><router-outlet></router-outlet></ml-tab-content>
    <ml-tab-content id="tab2"><ml-title>Empty tab 2. Back to tab 1</ml-title></ml-tab-content>
    <ml-tab-content id="tab3"><ml-title>Empty tab 3. Back to tab 1</ml-title></ml-tab-content>
    <ml-tab-content id="tab4"><ml-title>Empty tab 4. Back to tab 1</ml-title></ml-tab-content>
    <ml-tab-content id="tab5"><ml-title>Empty tab 5. Back to tab 1</ml-title></ml-tab-content>
    <ml-tab-content id="tab6"><ml-title>Empty tab 6. Back to tab 1</ml-title></ml-tab-content>
  </ml-content>
    
  <!-- End --------------------------------------------------------------------------------------------------------- -->

</ml-layout>

`//template

})
export class App {

  // This code is ony to show/hide header tabs

  private headerTabs: boolean = false;

  getUrlParameter(name: string): null | string {
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
      var results = regex.exec(location.search);
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  toggleHeaderTabs(){
    this.headerTabs = !this.headerTabs;
    window.location.href = '?headertabs=' + this.headerTabs;
  }

  ngOnInit(){
    const temp: string | any = this.getUrlParameter('headertabs');
    temp.toLowerCase() === 'true' ? this.headerTabs = true : this.headerTabs = false;
  }
}