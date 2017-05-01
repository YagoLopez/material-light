import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
template:`
<style>
  .pad-top {padding-top: 0}
  .pad-top-10 {padding-top: 10px}
  .date-field {padding-top: 10px; padding-bottom: 10px}
  .color-picker {float: right; margin-left: 5px; width: 20px; height: 20px}
  .color-picker-container {position: absolute; padding-top: 10px; padding-left: 52px}
  :host /deep/ ml-button-input > label {width: 200px}
  ml-button-input {display: block; padding-bottom: 25px}
</style>

<h5>More Input Controls</h5>

<form [formGroup]="textfieldForm2" (ngSubmit)="onSubmit()" autocomplete="off">

  <!-- Password ---------------------------------------------------------------------------------------------------- -->

  <div><strong>Password textfield: </strong>(Validated)</div>
  <ml-textfield type="password" id="password" [formControl]="password" floating-label>
    <ml-textfield-label>Enter password</ml-textfield-label>
    <ml-error [validateControl]="password" validator="required">Required field</ml-error>
    <ml-error [validateControl]="password" validator="minLength">Minimum length: {{ passLength }}</ml-error>
  </ml-textfield>
  
  <!-- Date -------------------------------------------------------------------------------------------------------- -->
  
  <div class="date-field"><strong>Date textfield: </strong>(Validated)</div>
  <ml-textfield type="date" [formControl]="date" class="pad-top">
    <ml-error [validateControl]="date" validator="required">Required field</ml-error>
  </ml-textfield>
  
  <!-- Color -------------------------------------------------------------------------------------------------------- -->
  
  <div class="date-field"><strong>Color2 textfield: </strong>(Validated)</div>
  <ml-textfield type="color" [formControl]="color2" class="pad-top">
    <ml-textfield-label>color</ml-textfield-label>
    <ml-error [validateControl]="color2" validator="required">Required field</ml-error>
  </ml-textfield>
  
  <!-- Input color button ------------------------------------------------------------------------------------------ -->
  
  <p class="pad-top-10"><strong>Input Color Button: </strong>(Validated)</p>
  <div class="color-picker-container">
    color: <div [style.background]="this.color.value" class="color-picker"></div>
  </div>
  <ml-button-input [formControl]="color" type="color" aspect="colored" variant="minifab" ripple>
    <ml-icon>palette</ml-icon>
    <ml-error [validateControl]="color" validator="required">Required data</ml-error>
  </ml-button-input>
  
  <!-- Submit and reset input buttons ------------------------------------------------------------------------------ -->
  
  <ml-button-input type="submit" [disabled]="textfieldForm2.invalid" aspect="raised" ripple>
    Submit to console</ml-button-input>
  <ml-button-input type="reset" aspect="raised" ripple>
    Reset form</ml-button-input>
                            
  <!-- /Submit and reset input buttons ----------------------------------------------------------------------------- -->
                      
</form>

<debug-form [name]="textfieldForm2"></debug-form>
<view-source uri="textfield2/pagTextfield2.ts"></view-source>

`//template
}) export class PagTextfield2 {

  passLength = 4;
  password = new FormControl('', [Validators.required, Validators.minLength(this.passLength)]);
  date = new FormControl('', [Validators.required]);
  color = new FormControl('', [Validators.required]);
  color2 = new FormControl('', [Validators.required]);

  textfieldForm2 = new FormGroup({
    password: this.password,
    date: this.date,
    color: this.color,
    color2: this.color2
  });

  onSubmit(){
    console.log('on submit form', this.textfieldForm2.value);
  }
}
