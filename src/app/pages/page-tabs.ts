import {Component} from '@angular/core';

@Component({
template: `

<style>
  ul{
    margin: 0;
  }
  .lightblue{
    background: lightcyan;
  }
  .lightgreen{
    background: lightgreen;
  }
  .yellow{
    background: yellow;
  }
</style>

<h5>Tabs</h5>

<ml-tabs ripple>

  <!-- Tabs bar. --------------------------------------------------------------------------------------------------- -->

  <ml-tabs-bar>
      <a tab href="#starks-panel" active ripple>Starks</a>
      <a tab href="#lannisters-panel" ripple>Lannisters</a>
      <a tab href="#targaryens-panel" ripple>Targaryens</a>
  </ml-tabs-bar>

  <!-- Tabs panels . Ids must be unique in all templates ---------_------------------------------------------------ -->

  <ml-tab-panel id="starks-panel" class="lightblue" active>
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


`//template
})
export class PageTabs {}