import {Component} from '@angular/core';

@Component({
template: `

<h5>Chip</h5>

<p><ml-chip>Chip only text</ml-chip></p>

<p><ml-chip contact-image="assets/img/user.jpg">Chip with contact image</ml-chip></p>

<p><ml-chip contact-letter="A">Chip with contact letter</ml-chip></p>

<p>
  <ml-chip contact-image="assets/img/user.jpg" deletable="true" [delete-action]="deleteFn">
    Image, deletable button and callback Fn
  </ml-chip>
</p>

<p><ml-chip-button (click)="onClickChip()">Chip button, click me!</ml-chip-button></p>

`//template
})
export class PageChip {

  deleteFn(){
    window.alert('Chip delete action executed');
  }

  onClickChip(){
    window.alert('Button Chip Clicked');
  }
}