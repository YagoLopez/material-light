//todo: convertir las clases de los iconos  mdl-list__item-avatar mdl-list__item-icon en directivas

import {Component, ViewEncapsulation} from '@angular/core';

@Component({
encapsulation: ViewEncapsulation.None,
template: `

<h5>List</h5>

<style>
.demo-list {
  /*width: 600px;*/
  background: ghostwhite;
}
</style>

<mdl-list class="demo-list">

  <mdl-item>
    <mdl-item-content>
      <mdl-item-icon type="normal">person</mdl-item-icon>
      Bryan Cranston
    </mdl-item-content>
    <mdl-item-action>
      <a href="#"><ml-icon>star</ml-icon></a>
    </mdl-item-action>
  </mdl-item>
  
  <mdl-item lines="2">
    <mdl-item-content>
      <mdl-item-icon type="normal">person</mdl-item-icon>
      <mdl-item-title>Aaron Paul</mdl-item-title>
      <mdl-item-subtitle>62 Episodes</mdl-item-subtitle>
    </mdl-item-content>
    <mdl-item-action>
      <a href="#"><ml-icon>star</ml-icon></a>
    </mdl-item-action>
  </mdl-item>
  
  <mdl-item lines="3">
    <mdl-item-content>
      <mdl-item-icon type="avatar">person</mdl-item-icon>
      <mdl-item-title>Bryan Cranston</mdl-item-title>
      <mdl-item-desc>
        Bryan Cranston played the role of Walter in Breaking Bad. He is also known
        for playing Hal in Malcom in the Middle.
      </mdl-item-desc>
    </mdl-item-content>
    <mdl-item-action>
      <a href="#"><ml-icon>star</ml-icon></a>
    </mdl-item-action>
  </mdl-item>
  
  
</mdl-list>
        
`//template
})
export class PageList{}