import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
template: `

<h5>Checkbox</h5>
<div>Option groups not supported. (Angular 2 restriction)</div>

<h6>Template form:</h6>

<form #form1="ngForm">
  <ml-checkbox id="checkbox1" name="option1" [ngModel]="model_1">Option 1</ml-checkbox>
  <ml-checkbox id="checkbox2" name="option2" [ngModel]="model_2">Option 2</ml-checkbox>
</form>

<debug-form [name]="form1"></debug-form>

<hr>

<h6>Reactive form:</h6>

<form [formGroup]="form2">
  <ml-checkbox id="checkbox3" formControlName="option3">Option 3</ml-checkbox>
  <ml-checkbox id="checkbox4" formControlName="option4">Option 4</ml-checkbox>
</form>

<debug-form [name]="form2"></debug-form>

<hr>

`//template
})
export class PageCheckbox {

  // models for template form (form1)
  model_1 = true;
  model_2 = false;

  // reactive form (form2)
  form2 = new FormGroup({
    option3: new FormControl(true),
    option4: new FormControl(false)
  })

}