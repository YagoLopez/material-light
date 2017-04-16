import {Component} from '@angular/core';

@Component({
template:`

<h5>Button</h5>

<p><ml-button ripple>Flat Button + Ripple Effect</ml-button></p>

<p><ml-button aspect="colored">Flat Button Colored</ml-button></p>

<p><ml-button aspect="raised" ripple>Raised Button + Ripple</ml-button></p>

<p><ml-button aspect="raised, colored" ripple>Raised Colored + Ripple</ml-button></p>

<p><ml-button aspect="raised, accent">Rised Accent</ml-button></p>

<p><ml-button aspect="raised" disabled>Disabled Button</ml-button></p>

<p>Fab button: <ml-button variant="fab"><ml-icon>add</ml-icon></ml-button></p>

<p>Fab colored: <ml-button variant="fab" aspect="colored"><ml-icon>add</ml-icon></ml-button></p>

<p>Mini-fab button: <ml-button variant="minifab"><ml-icon>add</ml-icon></ml-button></p>

<p>Icon button: <ml-button variant="icon"><ml-icon>email</ml-icon></ml-button></p>

<div style="text-align: center;">
<a href="https://material.io/icons/" target="_blank">Material Icons 1</a> - 
<a href="http://google.github.io/web-starter-kit/latest/styleguide/icons/demo.html" target="_blank">Material Icons 2</a>
</div>

<view-source uri="button/pagButton.ts"></view-source>

`//template
})
export class PagButton {}
