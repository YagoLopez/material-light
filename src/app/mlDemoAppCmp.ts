import {Component, ViewChild} from "@angular/core";
import {MlLayout} from "./ml/components/layout/mlLayout";
import {Router, NavigationStart} from "@angular/router";

@Component({
selector: 'ml-demo-app',
template:`

<style>
  a[nav-item] {padding: 10px !important}
  :host /deep/ ml-menu-item > li > a 
    {color: rgba(0,0,0, 0.87); text-decoration: none; font-weight: normal; display: block}
  :host /deep/ ml-menu-item.share-item-header > li
    {cursor: default; background-color: transparent !important; color: cornflowerblue; font-weight: 500}
  .drawer-top-img
    {margin: auto; display: block; width: 100%; height: 150px; background: url('assets/img/bg1.jpg') 0 0 / cover;}
  .drawer-title {color: white; text-align: center}
  .drawer-img {width: 25%; text-align: center; margin: 30px auto auto; display: block}
  .ico-fullscreen {padding-right: 10px; padding-left: 10px}
  .active-route {background: darkgrey; color: white !important}
  /* for future theming feature */
  /* :host /deep/ .my-theme {background: cornflowerblue; color: darkblue} */
</style>

<ml-layout> 

  <!-- Header ------------------------------------------------------------------------------------------------------ -->

  <ml-header waterfall>
    <ml-header-row>
      <ml-title>Material Light Demo</ml-title>
      <ml-spacer></ml-spacer>
      <ml-nav large-screen-only>
        <a nav-item href="">Link 1</a>
        <a nav-item href="">Link 2</a>
        <a nav-item href="">Link 3</a>
        <a nav-item href="">Link 4</a>
      </ml-nav>
      <yago-fullscreen class="ico-fullscreen" title="Full Screen"></yago-fullscreen>
      <ml-menu icon="share" position="top-right">
        <ml-menu-item with-divider class="share-item-header">Share...</ml-menu-item>
        <ml-menu-item><a [href]="shareTwitter" target="_blank">Twitter</a></ml-menu-item>
        <ml-menu-item><a [href]="shareFB" target="_blank">Facebook</a></ml-menu-item>
        <ml-menu-item><a [href]="shareGPlus" target="_blank">Google+</a></ml-menu-item>
        <ml-menu-item><a [href]="shareLinkedIn" target="_blank">LinkedIn</a></ml-menu-item>
        <ml-menu-item><a [href]="shareEmail" target="_blank">Email</a></ml-menu-item>
      </ml-menu>
    </ml-header-row>
    <ml-header-tabs>
      <a header-tab href="#tab1" active ripple>Tab 1</a>
      <a header-tab href="#tab2" ripple>Tab 2</a>
      <a header-tab href="#tab3" ripple>Tab 3</a>
      <a header-tab href="#tab4" ripple>Tab 4</a>
      <a header-tab href="#tab5" ripple>Tab 5</a>
      <a header-tab href="#tab6" ripple>Tab 6</a>
    </ml-header-tabs>
  </ml-header>
  
  <!-- Drawer ------------------------------------------------------------------------------------------------------ -->
  
  <ml-drawer fixed>
    <div class="drawer-top-img">
      <img src="assets/img/logo.png" class="drawer-img">
      <div class="drawer-title">Material Light</div>
    </div>
    <ml-nav>
      <a nav-item routerLink="button" routerLinkActive="active-route">Button</a>
      <a nav-item routerLink="layout" routerLinkActive="active-route">Layout</a>
      <a nav-item routerLink="card" routerLinkActive="active-route">Card</a>
      <a nav-item routerLink="selectfield" routerLinkActive="active-route">SelectField</a>
      <a nav-item routerLink="textfield" routerLinkActive="active-route">TextField</a>
      <a nav-item routerLink="checkbox" routerLinkActive="active-route">Checkbox</a>
      <a nav-item routerLink="radio" routerLinkActive="active-route">RadioButton</a>
      <a nav-item routerLink="switch" routerLinkActive="active-route">SwitchButton</a>
      <a nav-item routerLink="toggle" routerLinkActive="active-route">IconToggle</a>
      <a nav-item routerLink="badge" routerLinkActive="active-route">Badge</a>
      <a nav-item routerLink="grid" routerLinkActive="active-route">Grid</a>
      <a nav-item routerLink="tabs" routerLinkActive="active-route">Tabs</a>
      <a nav-item routerLink="chip" routerLinkActive="active-route">Chip</a>
      <a nav-item routerLink="list" routerLinkActive="active-route">List</a>
      <a nav-item routerLink="menu" routerLinkActive="active-route">Menu</a>
      <a nav-item routerLink="progressbar" routerLinkActive="active-route">ProgressBar</a>
      <a nav-item routerLink="spinner" routerLinkActive="active-route">Spinner</a>
      <a nav-item routerLink="snackbar" routerLinkActive="active-route">SnackBar</a>
      <a nav-item routerLink="tooltip" routerLinkActive="active-route">Tooltip</a>
      <a nav-item routerLink="slider" routerLinkActive="active-route">Slider</a>
      <a nav-item routerLink="dialog" routerLinkActive="active-route">Dialog</a>
      <a nav-item routerLink="table" routerLinkActive="active-route">Table</a>
    </ml-nav>
  </ml-drawer>
  
  <!-- Content ----------------------------------------------------------------------------------------------------- -->
  
  <ml-content>
    <ml-content-loader spinner (onLoading)="onLoading($event)"></ml-content-loader>
    <ml-header-tab-content id="tab1" active><router-outlet></router-outlet></ml-header-tab-content>
    <ml-header-tab-content id="tab2"><ml-title>Empty tab 2. Back to tab 1</ml-title></ml-header-tab-content>
    <ml-header-tab-content id="tab3"><ml-title>Empty tab 3. Back to tab 1</ml-title></ml-header-tab-content>
    <ml-header-tab-content id="tab4"><ml-title>Empty tab 4. Back to tab 1</ml-title></ml-header-tab-content>
    <ml-header-tab-content id="tab5"><ml-title>Empty tab 5. Back to tab 1</ml-title></ml-header-tab-content>
    <ml-header-tab-content id="tab6"><ml-title>Empty tab 6. Back to tab 1</ml-title></ml-header-tab-content>
  </ml-content>
    
  <!-- /Content ---------------------------------------------------------------------------------------------------- -->

</ml-layout>

`//template
}) export class MlDemoApp {

  @ViewChild(MlLayout) mlLayout: MlLayout;
  isLoading = false;
  constructor(private router: Router){}

  ngOnInit(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.mlLayout.mdlLayout.activateTab('tab1');
      }
    })
  }

  onLoading($event: boolean){
    this.isLoading = $event;
  }

  appName = `MATERIAL LIGHT: Free, fast and easy to use Angular UI components`;
  msgShare = `Link of interest shared from ${this.appName}: `;
  urlApp = 'https://github.com/YagoLopez/material-light';
  shareTwitter = `http://twitter.com/share?url=${this.urlApp}&text=${this.msgShare}`;
  shareFB = `http://www.facebook.com/sharer/sharer.php?u=${this.urlApp}`;
  shareGPlus= `https://plus.google.com/share?url=${this.urlApp}`;
  shareLinkedIn= `http://www.linkedin.com/shareArticle?
    mini=true&url=${this.urlApp}&title=${this.msgShare}&source=${this.appName}`;
  shareEmail = `mailto:?subject=Shared link&body=${this.msgShare} ${this.urlApp}`;
}
