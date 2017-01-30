//todo: cambiar nombre de app a ml-app y en ficheros relacionados
import {Component} from '@angular/core';

@Component({
selector: 'ml-demo-app',
// changeDetection: ChangeDetectionStrategy.OnPush,
template: `

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
    <ml-header-tabs>
      <a tab-bar href="#tab1" active>Tab 1</a>
      <a tab-bar href="#tab2">Tab 2</a>
      <a tab-bar href="#tab3">Tab 3</a>
      <a tab-bar href="#tab4">Tab 4</a>
      <a tab-bar href="#tab5">Tab 5</a>
      <a tab-bar href="#tab6">Tab 6</a>
    </ml-header-tabs>
  </ml-header>

  <!-- Drawer ------------------------------------------------------------------------------------------------------ -->
  
<!--
  <style>
    a[nav-item]{
      padding: 0 !important;
    }
  </style>
-->

  <ml-drawer>
    <ml-title>Material Light</ml-title>
    <ml-nav>
      <a nav-item routerLink="/button">Button</a>
      <a nav-item routerLink="/grid">Grid</a>
      <a nav-item routerLink="/tabs">Tabs</a>
      <a nav-item routerLink="/badge">Badge</a>
      <a nav-item routerLink="/card">Card</a>
      <a nav-item routerLink="/chip">Chip</a>
      <a nav-item routerLink="/list">List</a>
      <a nav-item routerLink="/menu">Menu</a>
      <a nav-item routerLink="/progressbar">ProgressBar</a>
      <a nav-item routerLink="/spinner">Spinner</a>
      <a nav-item routerLink="/snackbar">SnackBar</a>
      <a nav-item routerLink="/tooltip">Tooltip</a>
      <a nav-item routerLink="/checkbox">Checkbox</a>
      <a nav-item routerLink="/radio">RadioButton</a>
      <a nav-item routerLink="/switch">SwitchButton</a>
      <a nav-item routerLink="/toggle">IconToggle</a>
      <a nav-item routerLink="/textfield">TextControls</a>
      <a nav-item routerLink="/selectfield">SelectField</a>
      <a nav-item routerLink="/slider">Slider</a>
      <a nav-item routerLink="/dialog">Dialog</a>
      <a nav-item routerLink="/table">Table</a>
    </ml-nav>
  </ml-drawer>
  
  <!-- Content ----------------------------------------------------------------------------------------------------- -->
  
  <ml-content style="padding:10px"> 
    <ml-tab-content id="tab1" active><router-outlet></router-outlet></ml-tab-content>
    <ml-tab-content id="tab2"><ml-title>Tab 2</ml-title></ml-tab-content>
    <ml-tab-content id="tab3"><ml-title>Tab 3</ml-title></ml-tab-content>
    <ml-tab-content id="tab4"><ml-title>Tab 4</ml-title></ml-tab-content>
    <ml-tab-content id="tab5"><ml-title>Tab 5</ml-title></ml-tab-content>
    <ml-tab-content id="tab6"><ml-title>Tab 6</ml-title></ml-tab-content>
  </ml-content>
    
  <!-- End --------------------------------------------------------------------------------------------------------- -->

</ml-layout>

`//template

})
export class App {}