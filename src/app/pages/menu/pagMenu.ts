//todo: falta mostrar las distinas posiciones del menu

import {Component} from "@angular/core";

@Component({
template:`

<style>.icon-menu {vertical-align: middle}</style>

<h5>Menu</h5>

<h6>With ripple effect</h6>
<ml-menu ripple>
  <ml-menu-item ripple>
    <ml-icon class="icon-menu">email</ml-icon> Item with icon
  </ml-menu-item>
  <ml-menu-item ripple divider>Item with divider</ml-menu-item>
  <ml-menu-item ripple disabled>Item disabled</ml-menu-item>
</ml-menu>

<br>

<h6>No ripple effect</h6>
<ml-menu>
  <ml-menu-item>
    <ml-icon class="icon-menu">email</ml-icon> Item with icon
  </ml-menu-item>
  <ml-menu-item divider>Item with divider</ml-menu-item>
  <ml-menu-item disabled>Item disabled</ml-menu-item>
</ml-menu>

<view-source uri="menu/pagMenu.ts"></view-source>

`//template
})
export class PageMenu {}
