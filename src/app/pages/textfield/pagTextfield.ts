import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
template:`

<style>.ico-aligned{vertical-align: middle; margin-top: -4px; padding-right: 5px}</style>

<h5>Text Controls</h5>

<form [formGroup]="textfieldForm" (ngSubmit)="onSubmit()" autocomplete="off">
  
  <!-- textfield1  ------------------------------------------------------------------------------------------------- -->

  <div><strong>Textfield1:</strong> (Validated)</div>
  <ml-textfield [formControl]="textfield1" floating-label>
    <ml-textfield-label>
      <ml-icon class="ico-aligned">email</ml-icon>Label 1: icon, floating, validated
    </ml-textfield-label>
    <ml-error [validateControl]="textfield1" validator="required">Required field</ml-error>
    <ml-error [validateControl]="textfield1" validator="minLength">Minimum length is 2</ml-error>
    <ml-error [validateControl]="textfield1" validator="maxLength">Maximum length is 4</ml-error>
  </ml-textfield>
  <br><br>
  
  <!-- textfield2  ------------------------------------------------------------------------------------------------- -->
  
  <div><strong>Textfield2:</strong> (Validated)</div>
  <ml-textfield id="textfield2" [formControl]="textfield2">
    <ml-textfield-label>Label 2: no icon, no floating, validated</ml-textfield-label>
    <ml-error [validateControl]="textfield2" validator="required">Required field</ml-error>
  </ml-textfield>
  <br><br>
  
  <!-- textfield expandable  --------------------------------------------------------------------------------------- -->
  
  <div><strong>Textfield Expandable:</strong> (No validated)</div>
  <ml-textfield-expand [formControl]="textExpandable" icon="search"></ml-textfield-expand>
  
  <!-- textfield area  --------------------------------------------------------------------------------------------- -->
  
  <div><strong>Textfield Area:</strong> (Validated)</div>
  <ml-textfield-area [formControl]="textArea" rows="3" maxrows="6">
    <ml-textfield-label>Label 3 for textfield area</ml-textfield-label>
    <ml-error [validateControl]="textArea" validator="required">Required</ml-error>
    <ml-error [validateControl]="textArea" validator="minLength">Min length 2</ml-error>
  </ml-textfield-area>
  <br><br>
  
  <!-- submit button ----------------------------------------------------------------------------------------------- -->
  
  <p><ml-button-input type="submit" [disabled]="textfieldForm.invalid" aspect="raised" ripple>
    Submit to console</ml-button-input></p>                      
  
  <!-- /submit button ---------------------------------------------------------------------------------------------- -->

</form>

<debug-form [name]="textfieldForm"></debug-form>
<view-source uri="textfield/pagTextfield.ts"></view-source>

`//template
}) export class PagTextfield {

  textfield1 = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(4)]);
  textfield2 = new FormControl('', Validators.required);
  textExpandable = new FormControl();
  textArea = new FormControl('', [Validators.required, Validators.minLength(2)]);

  textfieldForm = new FormGroup({
    textfield1: this.textfield1,
    textfield2: this.textfield2,
    textExpandable: this.textExpandable,
    textArea: this.textArea
  });

  onSubmit(){
    console.log('on submit form', this.textfieldForm.value);
  }
}
