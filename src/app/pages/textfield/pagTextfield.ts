import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
template: `

<style>
.ico-aligned{vertical-align: middle; margin-top: -4px; padding-right: 5px}
</style>

<h5>Text Controls</h5>
<p>(Only for reactive forms)</p>

<form [formGroup]="textfieldForm" (ngSubmit)="onSubmit()" autocomplete="off">

  <p><strong><u>Textfields:</u></strong></p>
  
  <!-- textfield1  ------------------------------------------------------------------------------------------------- -->

  <mdl-textfield [formControl]="textfield1" floating>
    <mdl-textfield-label>
      <ml-icon class="ico-aligned">email</ml-icon>Label (floating + icon + validation)
    </mdl-textfield-label>
    <ml-error [validateControl]="textfield1" validator="required">Required field</ml-error>
    <ml-error [validateControl]="textfield1" validator="minLength">Minimum length is 2</ml-error>
    <ml-error [validateControl]="textfield1" validator="maxLength">Maximum length is 4</ml-error>
  </mdl-textfield>

  <!-- textfield2  ------------------------------------------------------------------------------------------------- -->
    
  <mdl-textfield id="textfield2" [formControl]="textfield2">
    <mdl-textfield-label>Label 2 (no icon, no floating, no validation)</mdl-textfield-label>
    <ml-error [validateControl]="textfield2" validator="required">Required field</ml-error>
  </mdl-textfield>
  <br><br>

  <!-- textfield expandable  --------------------------------------------------------------------------------------- -->
  
  <strong><u>Textfield expandable:</u></strong> (No validation)
  <mdl-textfield-expand [formControl]="textfield3" icon="search"></mdl-textfield-expand>
  <br>

  <!-- textfield area  --------------------------------------------------------------------------------------------- -->
  
  <strong><u>Textfield Area:</u></strong> (Validated)
  <mdl-textfield-area rows="3" maxrows="6" [formControl]="txtArea">
    <mdl-textfield-label>Text Area</mdl-textfield-label>
    <ml-error [validateControl]="txtArea" validator="required">Required</ml-error>
    <ml-error [validateControl]="txtArea" validator="minLength">Min length 2</ml-error>
  </mdl-textfield-area>
  <br><br>

  <!-- /textfield area  -------------------------------------------------------------------------------------------- -->
  
  <p> 
    <ml-button-submit [disabled]="textfieldForm.invalid" 
      value="Submit to console" aspect="raised"></ml-button-submit>
  </p>                      
                      
</form>

<p><debug-form [name]="textfieldForm"></debug-form></p>

`//template
})
export class PagTextfield {

  textfield1 = new FormControl('', [Validators.required,
                                   Validators.minLength(2),
                                   Validators.maxLength(4)]);
                                                 
  textfield2 = new FormControl('', Validators.required);
  textfield3 = new FormControl();
  txtArea = new FormControl('', [Validators.required, Validators.minLength(2)]);

  textfieldForm = new FormGroup({
    textfield1: this.textfield1,
    textfield2: this.textfield2,
    textfield3: this.textfield3,
    txtArea: this.txtArea
  });

  onSubmit(){
    console.log('on submit', this.textfieldForm.value);
  }
}