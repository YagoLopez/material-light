import {Component} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";

@Component({

selector: 'page-toggle',
template: `

<h5>Icon Toggle</h5>
<h6>Only for reactive forms:</h6>

<form [formGroup]="formToggleReactive">
  <ml-toggle id="toggle4" formControlName="option4">
    <ml-icon>email</ml-icon>
  </ml-toggle>Option 4 (Enabled by default)<br>
  
  <ml-toggle id="toggle5" formControlName="option5">
    <ml-icon>email</ml-icon>  
  </ml-toggle>Option 5 (Undefined by default)<br>
  
  <ml-toggle id="toggle6" formControlName="option6" disabled="true">
    <ml-icon>email</ml-icon>
  </ml-toggle>Option 6 (Disabled by default)
</form>

<debug-form [name]="formToggleReactive"></debug-form>

`//template
})
export class PagToggle {

  // Models for reactive form (formToggleReactive)
  formToggleReactive: FormGroup = new FormGroup({
    option4: new FormControl(true),
    option5: new FormControl(),
    option6: new FormControl({value: true,  disabled: true})
  })

}