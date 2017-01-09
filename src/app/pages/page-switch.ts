import {Component} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";

@Component({
template: `

<h5>Switch Button</h5>
<h6>Template form:</h6>


<form #formSwitchTemplate="ngForm">

  <ml-switch id="switch1" name="option1" [ngModel]="model_1">Option 1 (Enabled)</ml-switch>
  <ml-switch id="switch2" name="option2" [ngModel]="model_2">Option 2 (Undefined)</ml-switch>
  <ml-switch id="switch3" name="option3" disabled="true">Option 3 (Disabled)</ml-switch>

</form>

<debug-form [name]="formSwitchTemplate"></debug-form>

<hr>

<h6>Reactive form:</h6>

<form [formGroup]="formSwitchReactive">

  <ml-switch id="switch4" formControlName="option4">Option 4 (Enabled)</ml-switch>
  <ml-switch id="switch5" formControlName="option5">Option 5 (Undefined)</ml-switch>
  <ml-switch id="switch6" formControlName="option6" disabled="true">Option 6 (Disabled)</ml-switch>

</form>

<debug-form [name]="formSwitchReactive"></debug-form>

`//template
})
export class PageSwitch {

  // Model for template form (formSwitchTemplate)
  model_1 = true;

  // Model for reactive form (formSwitchReactive)
  formSwitchReactive: FormGroup = new FormGroup({
    option4: new FormControl(true),
    option5: new FormControl(),
    option6: new FormControl({value: true,  disabled: true})
  })

}