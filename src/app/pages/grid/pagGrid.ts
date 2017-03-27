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
<h6>Grid system adapts automatically position of block to screen size</h6>

<strong>• Grid 1</strong>
<ml-grid>
  <ml-grid-cell width="1" class="bg-grey">1 col</ml-grid-cell>
  <ml-grid-cell width="1" class="bg-grey">1 col</ml-grid-cell>
  <ml-grid-cell width="1" class="bg-grey">1 col</ml-grid-cell>
  <ml-grid-cell width="1" class="bg-grey">1 col</ml-grid-cell>
  <ml-grid-cell width="1" class="bg-grey">1 col</ml-grid-cell>
  <ml-grid-cell width="1" class="bg-grey">1 col</ml-grid-cell>
</ml-grid>

<strong>• Grid 2</strong>
<ml-grid>
  <ml-grid-cell width="2" class="bg-blue">2 col</ml-grid-cell>
  <ml-grid-cell width="2" class="bg-blue">2 col</ml-grid-cell>
</ml-grid>

<strong>• Grid 3</strong>
<ml-grid>
  <ml-grid-cell width="12" class="bg-darkgrey">Full width</ml-grid-cell>
  <ml-grid-cell width="12" class="bg-darkgrey">Full width</ml-grid-cell>
</ml-grid>

<hr>
<h6>One grid with mixed widths</h6>

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
