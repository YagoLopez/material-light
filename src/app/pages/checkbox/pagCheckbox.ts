// todo: hacer todos los disabled=true

import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
template: `

<h5>Checkbox</h5>
<h6>(Only for reactive forms)</h6>

<form [formGroup]="formCheckbox">
  <ml-checkbox id="checkbox3" formControlName="option3">Option 3</ml-checkbox>
  <ml-checkbox id="checkbox4" formControlName="option4">Option 4</ml-checkbox>
  <ml-checkbox id="checkbox5" formControlName="option5">Option 5 (Undefined by default)</ml-checkbox>
  <ml-checkbox id="checkbox6" formControlName="option6" disabled="true">Option 6 (Disabled by default)</ml-checkbox>
</form>

<debug-form [name]="formCheckbox"></debug-form>

`//template
})
export class PagCheckbox {

  formCheckbox = new FormGroup({
    option3: new FormControl(true),
    option4: new FormControl(false),
    option5: new FormControl(),
    option6: new FormControl({value: true, disabled: true})
  })
}