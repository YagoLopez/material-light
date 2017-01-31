import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
template: `

<style>
.aligned{vertical-align: middle;}
</style>

<h5>Text Controls</h5>
<p>(Only work with reactive forms)</p>

<form [formGroup]="controlsReactiveForm" (ngSubmit)="onSubmit()" autocomplete="off">

  <p>
    <mdl-textfield [formControl]="textfield1" floating>
      <mdl-textfield-label><ml-icon class="aligned">email</ml-icon>Label 1 (floating + icon)</mdl-textfield-label>
      <ml-error [validateControl]="textfield1" validator="required">Required field</ml-error>
      <ml-error [validateControl]="textfield1" validator="minLength">Minimum length is 2</ml-error>
      <ml-error [validateControl]="textfield1" validator="maxLength">Maximum length is 4</ml-error>
    </mdl-textfield>
  </p>
  
  <p>  
    <mdl-textfield id="textfield2" [formControl]="textfield2">
      <mdl-textfield-label>Label 2 (no icon, no floating)</mdl-textfield-label>
      <ml-error [validateControl]="textfield2" validator="required">Required field</ml-error>
    </mdl-textfield>
  </p>  

  <p>
    <strong>Textfield expandable:</strong>
    <mdl-textfield-expand [formControl]="textfield3" icon="search"></mdl-textfield-expand>
  </p>
  
  <strong>Textfield Area:</strong>
  <p>
    <mdl-textfield-area rows="3" maxrows="6" [formControl]="textfieldArea">
      <mdl-textfield-label>Text Area</mdl-textfield-label>
      <ml-error [validateControl]="textfieldArea" validator="required">Required</ml-error>
      <ml-error [validateControl]="textfieldArea" validator="minLength">Min length 2</ml-error>
    </mdl-textfield-area>
  </p>
  
  <p> 
    <ml-button-submit [disabled]="controlsReactiveForm.invalid" 
      value="Submit to console" aspect="raised"></ml-button-submit>
  </p>                      
                      
</form>

<p><debug-form [name]="controlsReactiveForm"></debug-form></p>

`//template
})
export class PageTextfield {

  textfield1 = new FormControl('', [Validators.required,
                                    Validators.minLength(2),
                                    Validators.maxLength(4)]);
                                                 
  textfield2 = new FormControl('', Validators.required);
  textfield3 = new FormControl();
  textfieldArea = new FormControl('', [Validators.required, Validators.minLength(2)]);

  controlsReactiveForm = new FormGroup({
    textfield1: this.textfield1,
    textfield2: this.textfield2,
    textfield3: this.textfield3,
    textfieldArea: this.textfieldArea
  });


  onSubmit(){
    console.log('on submit', this.controlsReactiveForm.value);
  }
}