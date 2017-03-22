import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
template: `

<style>
.ico-aligned{vertical-align: middle; margin-top: -4px; padding-right: 5px}
</style>

<h5>Text Controls</h5>

<form [formGroup]="textfieldForm" (ngSubmit)="onSubmit()" autocomplete="off">

  <div>➀ <strong>Textfields normal:</strong> (Validated)</div>
  
  <!-- textfield1  ------------------------------------------------------------------------------------------------- -->
  
  <ml-textfield [formControl]="textfield1" floating>
    <ml-textfield-label>
      <ml-icon class="ico-aligned">email</ml-icon>Label: floating, icon, validated
    </ml-textfield-label>
    <ml-error [validateControl]="textfield1" validator="required">Required field</ml-error>
    <ml-error [validateControl]="textfield1" validator="minLength">Minimum length is 2</ml-error>
    <ml-error [validateControl]="textfield1" validator="maxLength">Maximum length is 4</ml-error>
  </ml-textfield>
  <br>
  
  <!-- textfield2  ------------------------------------------------------------------------------------------------- -->
  
  <ml-textfield id="textfield2" [formControl]="textfield2">
    <ml-textfield-label>Label 2: no icon, no floating, validated</ml-textfield-label>
    <ml-error [validateControl]="textfield2" validator="required">Required field</ml-error>
  </ml-textfield>
  <br><br>
  
  <!-- textfield expandable  --------------------------------------------------------------------------------------- -->
  
  <div>➁ <strong>Textfield expandable:</strong> (No validation)</div>
  <ml-textfield-expand [formControl]="textfield3" icon="search"></ml-textfield-expand>
  
  <!-- textfield area  --------------------------------------------------------------------------------------------- -->
  
  <div>➂ <strong>Textfield area:</strong> (Validated)</div>
  <ml-textfield-area rows="3" maxrows="6" [formControl]="textArea">
    <ml-textfield-label>Text Area</ml-textfield-label>
    <ml-error [validateControl]="textArea" validator="required">Required</ml-error>
    <ml-error [validateControl]="textArea" validator="minLength">Min length 2</ml-error>
  </ml-textfield-area>
  <br><br>
  
  <!-- submit button ----------------------------------------------------------------------------------------------- -->
  <p> 
    <ml-button-submit [disabled]="textfieldForm.invalid" 
      text="Submit to console" aspect="raised" ripple></ml-button-submit>
  </p>                      
  <!-- /submit button ---------------------------------------------------------------------------------------------- -->

</form>

<p><debug-form [name]="textfieldForm"></debug-form></p>

`//template
})
export class PagTextfield {

  textfield1 = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(4)]);
  textfield2 = new FormControl('', Validators.required);
  textfield3 = new FormControl();
  textArea = new FormControl('', [Validators.required, Validators.minLength(2)]);

  textfieldForm = new FormGroup({
    textfield1: this.textfield1,
    textfield2: this.textfield2,
    textfield3: this.textfield3,
    textArea: this.textArea
  });

  onSubmit(){
    console.log('on submit form', this.textfieldForm.value);
  }
}