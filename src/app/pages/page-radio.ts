import {Component} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";

@Component({
template: `

<h5>Radio</h5>

<h6>Template forms:</h6>
<form #form1="ngForm">
  <ml-radio id="radio1" name="optionsGroup1" [ngModel]="model_1" value="option1">Option 1</ml-radio>
  <ml-radio id="radio2" name="optionsGroup1" [ngModel]="model_1" value="option2">Option 2</ml-radio>
</form>
<br>
<debug-form [name]="form1"></debug-form>

<hr>

<h6>Reactive forms:</h6>
<form [formGroup]="form2">
  <ml-radio id="radio3" formControlName="optionsGroup2" value="option3">Option 3</ml-radio>
  <ml-radio id="radio4" formControlName="optionsGroup2" value="option4">Option 4</ml-radio>
</form>
<br>
<debug-form [name]="form2"></debug-form>


`//template
})
export class PageRadio {

  // model for template driven form (form1)
  model_1 = 'option1';

  // model for reactive form (form2)
  form2: FormGroup;
  constructor(){
    this.form2 = new FormGroup({
      optionsGroup2: new FormControl('option3')
    })
  }

}