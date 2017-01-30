import {Component, Input} from "@angular/core";

@Component({
selector: 'ml-error',
template: '<div *ngIf="showError()" style="display: block"><ng-content></ng-content></div>'
})
export class MlValidatorError {

  @Input() control: any;
  @Input() validator: string;   // validator name

  showError(): boolean | undefined{
    if (this.control){
      return ( this.control.hasError(this.validator) && this.control.touched );
    }
  }

  ngOnInit() {
    this.validator = this.validator.toLowerCase(); // hack cause: control.errors.minLength != control.errors['minLength'] for example
  }
}