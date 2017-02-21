import {Component} from '@angular/core';

@Component({
selector: 'page-tooltip',
template: `

<style>
.paragraph{display:inline-block}
</style>

<h5>Tooltip</h5>

<div>
  <div id="tooltip1" class="paragraph">Mouseover/Tap to show tooltip</div>
  <ml-tooltip for="tooltip1">This is a tooltip</ml-tooltip>
</div>
<hr>
<div>
  <div id="tooltip2" class="paragraph">Tooltip multiline</div>
  <ml-tooltip for="tooltip2">
    Tooltip line 1<br>Tooltip line 2
  </ml-tooltip>
</div>
<hr>
<div>
  <div id="tooltip3" class="paragraph">Tooltip large</div>
  <ml-tooltip large for="tooltip3">Tooltip large</ml-tooltip>
</div>
<hr>
<div>
  <div id="tooltip4" class="paragraph">Tooltip with image</div>
  <ml-tooltip for="tooltip4">
    <span>Tooltip width image</span>
    <br><br>
    <img src="assets/img/welcome_card.jpg" style="width:100px; height: 100px">
  </ml-tooltip>
</div>


`//template
})
export class PagTooltip {}