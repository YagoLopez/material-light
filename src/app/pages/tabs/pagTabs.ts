import {Component} from '@angular/core';

@Component({
template:`

<style>
  ul{margin: 0;}
  .lightblue{background: lightcyan;}
  .lightgreen{background: lightgreen;}
  .yellow{background: yellow;}
</style>

<h5>Tabs</h5>

<ml-tabs ripple>

  <!-- Tabs bar. --------------------------------------------------------------------------------------------------- -->

  <ml-tabs-bar>
      <a ml-tab href="#starks-panel" ripple ml-active>Starks</a>
      <a ml-tab href="#lannisters-panel" ripple>Lannisters</a>
      <a ml-tab href="#targaryens-panel" ripple>Targaryens</a>
  </ml-tabs-bar>

  <!-- Tabs panels . Ids must be unique into all templates ---------_------------------------------------------------ -->

  <ml-tab-panel ml-active id="starks-panel" class="lightblue">
    <ul>
      <li>Eddard</li>
      <li>Catelyn</li>
      <li>Robb</li>
      <li>Sansa</li>
      <li>Brandon</li>
      <li>Arya</li>
      <li>Rickon</li>
    </ul>
  </ml-tab-panel>
  <ml-tab-panel id="lannisters-panel" class="yellow">
    <ul>
      <li>Tywin</li>
      <li>Cersei</li>
      <li>Jamie</li>
      <li>Tyrion</li>
    </ul>
  </ml-tab-panel>
  <ml-tab-panel id="targaryens-panel" class="lightgreen">
    <ul>
      <li>Viserys</li>
      <li>Daenerys</li>
    </ul>
  </ml-tab-panel>
  
  <!-- End ---------------------------------------------------------------------------------------------------- -->

</ml-tabs>

<view-source uri="tabs/pagTabs.ts"></view-source>

`//template
})
export class PagTabs {}
