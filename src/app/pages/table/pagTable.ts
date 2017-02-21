import {Component} from '@angular/core';

@Component({
template: `

<h5>Table</h5>

<table ml-table selectable shadow="2">

  <!-- Table head ------------------------------------------------------------------------------------------------ -->
  
  <thead>
    <tr>
      <th text-cell>Material</th>
      <th>Quantity</th>
      <th>Unit price</th>
    </tr>
  </thead>

  <!-- Table body ------------------------------------------------------------------------------------------------ -->

  <tbody>
    <tr>
      <td text-cell>Acrylic (Transparent)</td>
      <td>25</td>
      <td>$2.90</td>
    </tr>
    <tr>
      <td text-cell>Plywood (Birch)</td>
      <td>50</td>
      <td>$1.25</td>
    </tr>
    <tr>
      <td text-cell>Laminate (Gold on Blue)</td>
      <td>10</td>
      <td>$2.35</td>
    </tr>      
  </tbody>
  
  <!-- End table body -------------------------------------------------------------------------------------------- -->
  
</table>

`//template
})
export class PagTable {}

