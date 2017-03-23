
import {Component} from '@angular/core';

@Component({
template: `

<h5>Slider</h5>

<div style="width:300px">

  <h6>Slider enabled:</h6>
  <p><input ml-slider min="0" max="10" value="5" #slider1></p>
  <p>Change slider programatically</p>
  <p><ml-button ripple aspect="raised" (click)="slider1.change(0)" ripple>Value 0</ml-button></p>
  <p><ml-button ripple aspect="raised" (click)="slider1.change(10)" ripple>Value 10</ml-button></p>

  <h6>Slider disabled:</h6>
  <p><input ml-slider min="0" max="10" value="5" disabled></p>

</div>

<view-source uri="slider/pagSlider.ts"></view-source>
        
`//template
})
export class PagSlider {}
