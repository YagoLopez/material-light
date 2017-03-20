import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
template: `
<style>
.pad-top{padding-top: 0}
.date-field{padding-top: 10px; padding-bottom: 10px}
</style>

<h5>More text Controls</h5>

<form [formGroup]="textfieldForm2" (ngSubmit)="onSubmit()" autocomplete="off">

  <!-- Password ---------------------------------------------------------------------------------------------------- -->
  ➃ <strong>Password field:</strong>
  <ml-textfield type="password" id="password" [formControl]="password" floating>
    <ml-textfield-label>Enter password</ml-textfield-label>
    <ml-error [validateControl]="password" validator="required">Required field</ml-error>
    <ml-error [validateControl]="password" validator="minLength">Minimum length: {{ passLength }}</ml-error>
  </ml-textfield>
  <br>
 <!-- Date --------------------------------------------------------------------------------------------------------- -->
  <!-- todo: at this moment validation error classes doesnt work totally ok in date field-->
  <div class="date-field">
    ➄ <strong>Date field:</strong>
    <ml-textfield type="date" [formControl]="date" class="pad-top"></ml-textfield>
  </div>
  <!-- /Date ------------------------------------------------------------------------------------------------------- -->
  <p> 
    <ml-button-submit [disabled]="textfieldForm2.invalid" 
      text="Submit to console" aspect="raised" ripple></ml-button-submit>
  </p>                      
                      
</form>

<p><debug-form [name]="textfieldForm2"></debug-form></p>

`//template
})
export class PagTextfield {

  passLength = 4;
  password = new FormControl('', [Validators.required, Validators.minLength(this.passLength)]);
  date = new FormControl();

  textfieldForm2 = new FormGroup({
    password: this.password,
    date: this.date
  });

  onSubmit(){
    console.log('on submit form', this.textfieldForm2.value);
  }
}