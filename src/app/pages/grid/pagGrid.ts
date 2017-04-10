import {Component} from '@angular/core';

@Component({
template:`

<style>
.bg-blue{background: lightblue}  
.bg-grey{background: gainsboro}  
.bg-orange{background: orange}  
.bg-darkgrey{background: darkgrey}
strong{color: #3f51b5}
</style>

<h5>Grid</h5>
<hr>
<h6>The grid system adapts automatically the position of the blocks to the screen size</h6>

<strong>• Grid 1</strong>
<ml-grid>
  <ml-grid-cell width="1" class="bg-grey">1 col</ml-grid-cell>
  <ml-grid-cell width="1" class="bg-grey">1 col</ml-grid-cell>
  <ml-grid-cell width="1" class="bg-grey">1 col</ml-grid-cell>
  <ml-grid-cell width="1" class="bg-grey">1 col</ml-grid-cell>
  <ml-grid-cell width="1" class="bg-grey">1 col</ml-grid-cell>
  <ml-grid-cell width="1" class="bg-grey">1 col</ml-grid-cell>
</ml-grid>

<strong>• Grid 2</strong> (no space between cells)
<ml-grid no-space style="padding: 14px">
  <ml-grid-cell width="1" class="bg-grey">1 col</ml-grid-cell>
  <ml-grid-cell width="1" class="bg-blue">1 col</ml-grid-cell>
  <ml-grid-cell width="1" class="bg-grey">1 col</ml-grid-cell>
  <ml-grid-cell width="1" class="bg-blue">1 col</ml-grid-cell>
  <ml-grid-cell width="1" class="bg-grey">1 col</ml-grid-cell>
  <ml-grid-cell width="1" class="bg-blue">1 col</ml-grid-cell>
</ml-grid>

<strong>• Grid 3</strong>
<ml-grid>
  <ml-grid-cell width="2" class="bg-blue">2 col</ml-grid-cell>
  <ml-grid-cell width="2" class="bg-blue">2 col</ml-grid-cell>
</ml-grid>

<strong>• Grid 4</strong>
<ml-grid>
  <ml-grid-cell width="12" class="bg-darkgrey">Full width</ml-grid-cell>
  <ml-grid-cell width="12" class="bg-darkgrey">Full width</ml-grid-cell>
</ml-grid>

<hr>

<h6>One grid with mixed cells</h6>
<ml-grid>
  <ml-grid-cell width="1" class="bg-grey">1 col</ml-grid-cell>
  <ml-grid-cell width="1" class="bg-grey">1 col</ml-grid-cell>
  <ml-grid-cell width="1" class="bg-grey">1 col</ml-grid-cell>
  <ml-grid-cell width="1" class="bg-grey">1 col</ml-grid-cell>
  <ml-grid-cell width="2" class="bg-blue">2 col</ml-grid-cell>
  <ml-grid-cell width="2" class="bg-blue">2 col</ml-grid-cell>
  <ml-grid-cell width="3" class="bg-orange">3 col</ml-grid-cell>
  <ml-grid-cell width="3" class="bg-orange">3 col</ml-grid-cell>
</ml-grid>

<hr>
<view-source uri="grid/pagGrid.ts"></view-source>
        
`//template
})
export class PagGrid {}
