//todo: convertir las clases de los iconos  mdl-list__item-avatar mdl-list__item-icon en directivas

import {Component, ViewEncapsulation} from '@angular/core';

@Component({
encapsulation: ViewEncapsulation.None,
template: `

<h5>List</h5>

<style>.demo-list {background: ghostwhite}</style>

<ml-list class="demo-list">

  <ml-item>
    <ml-item-content>
      <ml-item-icon type="normal">person</ml-item-icon>
      <a href="#" class="ml-item-link">Item with link</a>
    </ml-item-content>
    <ml-item-action>
      <a href="#"><ml-icon>star</ml-icon></a>
    </ml-item-action>
    
  </ml-item>
  
  <ml-item lines="2">
    <ml-item-content>
      <ml-item-icon type="normal">person</ml-item-icon>
      <ml-item-title>Aaron Paul</ml-item-title>
      <ml-item-subtitle>62 Episodes</ml-item-subtitle>
    </ml-item-content>
    <ml-item-action>
      <a href="#"><ml-icon>star</ml-icon></a>
    </ml-item-action>
  </ml-item>
  
  <ml-item lines="3">
    <ml-item-content>
      <ml-item-icon type="avatar">person</ml-item-icon>
      <ml-item-title>Bryan Cranston</ml-item-title>
      <ml-item-desc>
        Bryan Cranston played the role of Walter in Breaking Bad. He is also known
        for playing Hal in Malcom in the Middle.
      </ml-item-desc>
    </ml-item-content>
    <ml-item-action>
      <a href="#"><ml-icon>star</ml-icon></a>
    </ml-item-action>
  </ml-item>
  
</ml-list>

<view-source uri="list/pagList.ts"></view-source>
        
`//template
})
export class PagList{}
