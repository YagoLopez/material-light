import {Component} from '@angular/core';

@Component({
selector: 'ml-demo-app',
template:`

<style>
  a[nav-item]{padding-top: 10px !important; padding-bottom: 10px !important}
  @media (min-width: 700px){
    ml-content{
      padding-top: 50px;
      padding-bottom: 50px;
      background-color: ghostwhite;
    }
    ml-content-tabheader{
      background-color: white;
      margin: auto;
      width: 60%;
      padding: 25px 50px 50px;
      border: 1px solid lightgrey;
      box-shadow: 1px 1px 5px lightgrey;
    }
  }
  @media(max-width: 700px){
    ml-content{padding: 10px;}
  }
  .bg-grey{background: lightgrey}
  .active-nav{background: darkgrey; color: white !important}
  .drawer-txt{color: white; text-align: center}
  .drawer-top-container{
    margin: auto; display: block; width: 100%;height: 150px; background: url('assets/img/bg1.jpg') 0 0 / cover;}
  .drawer-img{width: 25%; text-align: center; margin: 30px auto auto; display: block;}
  .page-loader{width: 100%; height: 500px; position: absolute; text-align: center; margin-top: 76%;}
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

    <div class="drawer-top-container">
      <img src="assets/img/logo.png" class="drawer-img">
      <div class="drawer-txt">Material Light</div>
    </div>
    
    <ml-nav>
      <a nav-item routerLink="button" routerLinkActive="active-nav">Button</a>
      <a nav-item routerLink="selectfield" routerLinkActive="active-nav">SelectField</a>
      <a nav-item routerLink="textfield" routerLinkActive="active-nav">TextField</a>
      <a nav-item routerLink="textfield2" routerLinkActive="active-nav">TextField2</a>
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
      <a nav-item routerLink="layout" routerLinkActive="active-nav">Layout</a>
    </ml-nav>
  </ml-drawer>
  
  <!-- Content ----------------------------------------------------------------------------------------------------- -->
  
  <ml-content>
    <ml-page-loader (isLoading)="onLoading($event)"></ml-page-loader>
    <ml-content-tabheader id="tab1" active [hidden]="isLoading">
      <router-outlet></router-outlet>
    </ml-content-tabheader>
    <ml-content-tabheader id="tab2"><ml-title>Empty tab 2. Back to tab 1</ml-title></ml-content-tabheader>
    <ml-content-tabheader id="tab3"><ml-title>Empty tab 3. Back to tab 1</ml-title></ml-content-tabheader>
    <ml-content-tabheader id="tab4"><ml-title>Empty tab 4. Back to tab 1</ml-title></ml-content-tabheader>
    <ml-content-tabheader id="tab5"><ml-title>Empty tab 5. Back to tab 1</ml-title></ml-content-tabheader>
    <ml-content-tabheader id="tab6"><ml-title>Empty tab 6. Back to tab 1</ml-title></ml-content-tabheader>
  </ml-content>
    
  <!-- /Content ---------------------------------------------------------------------------------------------------- -->

</ml-layout>

`//template
})

export class App {
  isLoading = false;

  onLoading($event){
    this.isLoading = $event;
  }
}
