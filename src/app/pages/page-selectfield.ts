import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
template: `

<style>
  .validationError{color: red;padding-bottom: 20px;}
</style>

<h5>Select Field</h5>
<span>Reactive Forms only</span>
<form [formGroup]="selectForm" (ngSubmit)="onSubmit()" autocomplete="off">

  <ml-selectfield [formControl]="selectfield1">
    <ml-sf-item>one</ml-sf-item>
    <ml-sf-item>two</ml-sf-item>
    <ml-sf-item>three</ml-sf-item>
    <ml-sf-item></ml-sf-item>
    <ml-sf-item>four</ml-sf-item>
    <ml-sf-item>five</ml-sf-item>
    <ml-sf-item>six</ml-sf-item>
    <ml-sf-item>seven</ml-sf-item>
    <ml-sf-item>eight</ml-sf-item>
  </ml-selectfield>
  <ml-error [validateControl]="selectfield1" validator="required" class="validationError">
    Required field
  </ml-error>
  <ml-error [validateControl]="selectfield1" validator="minLength" class="validationError">
    Min length: {{ minLength }}
  </ml-error>  
  
  <br>
  
  <ml-selectfield [formControl]="selectfield2" label="Choose another option...">
    <ml-sf-item>alpha</ml-sf-item>
    <ml-sf-item>beta</ml-sf-item>
    <ml-sf-item>gamma</ml-sf-item>
  </ml-selectfield>
  
  <br>
  <ml-button-submit [disabled]="selectForm.invalid" value="Submit to console" aspect="raised"></ml-button-submit>
</form>
<br>
<div><debug-form [name]="selectForm"></debug-form></div>

`//template
})
export class PageSelectfield {

  minLength = 4;
  selectfield1 = new FormControl('', [Validators.required, Validators.minLength(this.minLength)]);
  selectfield2 = new FormControl();

  selectForm = new FormGroup({
    selectfield1: this.selectfield1,
    selectfield2: this.selectfield2
  });

  onSubmit(){
    console.log(this.selectForm.value);
  }
}