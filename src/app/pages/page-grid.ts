import {Component} from '@angular/core';

@Component({
template: `

<style>
.bg-blue{
  background: cornflowerblue;
}  
.bg-grey{
  background: gainsboro;
}  
.bg-yellow{
  background: yellow;
}  
.bg-red{
  background: red;
}
</style>

<ml-title>Grid</ml-title>

<ml-grid>
  <ml-cell width="1" class="bg-grey">1 cols</ml-cell>
  <ml-cell width="1" class="bg-grey">1 cols</ml-cell>
  <br>
  <ml-cell width="12" class="bg-grey">Full width</ml-cell>
  <ml-cell width="12" class="bg-grey">Full width</ml-cell>
</ml-grid>
        
`//template
})
export class PageGrid {}