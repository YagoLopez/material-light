import {Component} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";

@Component({
template: `

<h5>Switch Button</h5>
<h6>Only works with reactive forms:</h6>

<form [formGroup]="formSwitchReactive">
  <ml-switch id="switch4" formControlName="option4">Option 4</ml-switch>
  <ml-switch id="switch5" formControlName="option5" ripple>Option 5 (With ripple)</ml-switch>
  <ml-switch id="switch6" formControlName="option6" disabled="true">Option 6 (Disabled)</ml-switch>
</form>

<br>

<debug-form [name]="formSwitchReactive"></debug-form>
<view-source uri="switch/pagSwitch.ts"></view-source>

`//template
})
export class PagSwitch {

  formSwitchReactive: FormGroup = new FormGroup({
    option4: new FormControl(true), // Initialized to true
    option5: new FormControl(),     // Undefined on init
    option6: new FormControl({value: true,  disabled: true}) // Disabled on init
  })

}
