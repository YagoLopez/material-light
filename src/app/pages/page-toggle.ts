import {Component} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";

@Component({

selector: 'page-toggle',
template: `

<h5>Icon Toggle</h5>

<h6>Template form:</h6>
<form #formToggleTemplate="ngForm">

  <ml-toggle id="toggle1" name="option1" [ngModel]="model_1">
    <ml-icon>email</ml-icon>
  </ml-toggle>Option 1 (Enabled)<br>
  
  <ml-toggle id="toggle2" name="option2" [ngModel]="model_2">
    <ml-icon>email</ml-icon>
  </ml-toggle>Option 2 (Undefined)<br>
  
  <ml-toggle id="toggle3" name="option3" [ngModel]="model_3" disabled="true">
    <ml-icon>email</ml-icon>
  </ml-toggle>Option 3 (Disabled)<br>

</form>

<debug-form [name]="formToggleTemplate"></debug-form>

<hr>

<h6>Reactive form:</h6>
<form [formGroup]="formToggleReactive">

  <ml-toggle id="toggle4" formControlName="option4">
    <ml-icon>email</ml-icon>
  </ml-toggle>Option 4 (Enabled)<br>
  
  <ml-toggle id="toggle5" formControlName="option5">
    <ml-icon>email</ml-icon>  
  </ml-toggle>Option 5 (Undefined)<br>
  
  <ml-toggle id="toggle6" formControlName="option6" disabled="true">
    <ml-icon>email</ml-icon>
  </ml-toggle>Option 6 (Disabled)

</form>

<debug-form [name]="formToggleReactive"></debug-form>

`//template
})
export class PageToggle {

  // Models for template form (formToggleTemplate)
  model_1 = true;
  model_3 = true;

  // Models for reactive form (formToggleReactive)
  formToggleReactive: FormGroup = new FormGroup({
    option4: new FormControl(true),
    option5: new FormControl(),
    option6: new FormControl({value: true,  disabled: true})
  })

}