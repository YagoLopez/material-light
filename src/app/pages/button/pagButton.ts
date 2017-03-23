import {Component} from '@angular/core';

@Component({
template: `

<h5>Button</h5>

<p><ml-button ripple>Flat Button With Ripple</ml-button></p>

<p><ml-button aspect="colored">Flat Button Colored</ml-button></p>

<p><ml-button aspect="raised" ripple>Raised Button (Ripple)</ml-button></p>

<p><ml-button aspect="raised, colored" ripple>Raised Colored (Ripple)</ml-button></p>

<p><ml-button aspect="raised, accent">Rised Accent</ml-button></p>

<p><ml-button aspect="raised" disabled>Disabled Button</ml-button></p>

<p>Fab button: <ml-button variant="fab"><ml-icon>add</ml-icon></ml-button></p>

<p>Fab colored: <ml-button variant="fab" aspect="colored"><ml-icon>add</ml-icon></ml-button></p>

<p>Mini-fab button: <ml-button variant="minifab"><ml-icon>add</ml-icon></ml-button></p>

<p>Icon button: <ml-button variant="icon"><ml-icon>email</ml-icon></ml-button></p>

<view-source uri="button/pagButton.ts"></view-source>

`//template
})
export class PagButton {}
