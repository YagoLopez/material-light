import {Component, Input} from "@angular/core";

@Component({
selector: 'ml-error',
template: '<div *ngIf="showError()"><ng-content></ng-content></div>'
})
export class MlValidatorError {

  @Input() control: any;
  @Input() validator: string;   // validator name

  showError(): boolean | undefined{
    if (this.control){
      return this.control.hasError(this.validator);
    }
  }

  ngOnInit() {
    this.validator = this.validator.toLowerCase(); // control.errors.minLength != control.errors['minLength'] for example
  }
}