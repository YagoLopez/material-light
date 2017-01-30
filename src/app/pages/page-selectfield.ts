// todo: probar con template forms

import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
template: `

<style>
  .validationError{display: block; color: red;padding-bottom: 20px;}
</style>

<h5>Select Field</h5>
<span>Reactive Forms only</span>
<form [formGroup]="selectForm" (ngSubmit)="onSubmit()" autocomplete="off">
  <ml-selectfield [formControl]="selectfield1">
    <ml-sf-item></ml-sf-item>
    <ml-sf-item>uno</ml-sf-item>
    <ml-sf-item>dos</ml-sf-item>
    <ml-sf-item>tres</ml-sf-item>
    <ml-sf-item>cuatro</ml-sf-item>
    <ml-sf-item>cinco</ml-sf-item>
    <ml-sf-item>seis</ml-sf-item>
    <ml-sf-item>siete</ml-sf-item>
    <ml-sf-item>ocho</ml-sf-item>
  </ml-selectfield>
  <div class="validationError">
    <ml-error [control]="selectfield1" validator="required">Required field</ml-error>
    <ml-error [control]="selectfield1" validator="minLength">Min length: {{ minLength }}</ml-error>  
  </div>
  <ml-button-submit [disabled]="selectForm.invalid" value="Submit to console" aspect="raised"></ml-button-submit>
</form>
<br>
<div><debug-form [name]="selectForm"></debug-form></div>

`//template
})
export class PageSelectfield {

  private minLength = 4;

  selectfield1 = new FormControl('', [Validators.required,
                                      Validators.minLength(this.minLength)]);

  selectForm = new FormGroup({
    selectfield1: this.selectfield1
  });

  onSubmit(){
    console.log('submit', this.selectForm.value);
  }


}