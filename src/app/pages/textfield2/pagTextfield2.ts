import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
template:`
<style>
  .pad-top {padding-top: 0}
  .pad-top-10 {padding-top: 10px}
  .field-header {padding-top: 10px; padding-bottom: 10px}
  .color-field {width: 50px}
  :host /deep/ ml-button-input > label {width: 200px}
  ml-button-input {display: block; padding-bottom: 25px}
</style>

<h5>More Textfield Controls</h5>

<form [formGroup]="textfieldForm2" (ngSubmit)="onSubmit()" autocomplete="off">

  <!-- Password ---------------------------------------------------------------------------------------------------- -->

  <div><strong>Password textfield: </strong>(Validated)</div>
  <ml-textfield type="password" [formControl]="password" floating-label>
    <ml-textfield-label>Enter password</ml-textfield-label>
    <ml-error [validateControl]="password" validator="required">Required field</ml-error>
    <ml-error [validateControl]="password" validator="minLength">Minimum length: {{ passLength }}</ml-error>
  </ml-textfield>
  
  <!-- Date -------------------------------------------------------------------------------------------------------- -->
  
  <div class="field-header"><strong>Date textfield: </strong>(Validated)</div>
  <ml-textfield type="date" [formControl]="date" class="pad-top">
    <ml-error [validateControl]="date" validator="required">Required field</ml-error>
  </ml-textfield>
  
  <!-- Week -------------------------------------------------------------------------------------------------------- -->
  
  <div class="field-header"><strong>Week textfield: </strong>(Validated)</div>
  <ml-textfield type="week" [formControl]="week" class="pad-top">
    <ml-error [validateControl]="week" validator="required">Required field</ml-error>
  </ml-textfield>
  
  <!-- Number -------------------------------------------------------------------------------------------------------- -->
  
  <div class="field-header"><strong>Number textfield: </strong>(Validated)</div>
  <ml-textfield type="number" [formControl]="number" class="pad-top">
    <ml-error [validateControl]="number" validator="required">Number required</ml-error>
  </ml-textfield>
  
  <!-- Color -------------------------------------------------------------------------------------------------------- -->
  
  <div class="field-header"><strong>Color textfield: </strong>(Validated)</div>
  <ml-textfield type="color" [formControl]="color" class="pad-top color-field">
    <ml-error [validateControl]="color" validator="required">Required</ml-error>
  </ml-textfield>
  
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
  week = new FormControl('', [Validators.required]);
  color = new FormControl('', [Validators.required]);
  number = new FormControl('', [Validators.required]);

  textfieldForm2 = new FormGroup({
    password: this.password,
    date: this.date,
    week: this.week,
    number: this.number,
    color: this.color
  });

  onSubmit(){
    console.log('on submit form', this.textfieldForm2.value);
  }
}
