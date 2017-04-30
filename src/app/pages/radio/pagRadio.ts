import {Component} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";

@Component({
template:`

<h5>Radio Button</h5>
<h6>(Only for reactive forms)</h6>

<form [formGroup]="formRadio" (ngSubmit)="onSubmit()">
  <p><ml-radio id="radio3" formControlName="option" value="option3">Option 3</ml-radio></p>
  <p><ml-radio id="radio4" formControlName="option" value="option4" ripple>Option 4 (With ripple)</ml-radio></p>
  <p><ml-radio id="radio5" formControlName="option" value="option5" disabled>Option 5 (Disabled)</ml-radio></p>
  <p><ml-button-input type="submit" [disabled]="formRadio.invalid" aspect="raised" ripple>
    Submit to console</ml-button-input></p>
</form>

<debug-form [name]="formRadio"></debug-form>
<view-source uri="radio/pagRadio.ts"></view-source>

`//template
}) export class PagRadio {

  formRadio: FormGroup;
  option = new FormControl('option3');

  ngOnInit(){
    this.formRadio = new FormGroup({option: this.option})
  }
  onSubmit(){
    console.log(this.formRadio.value);
  }
}
