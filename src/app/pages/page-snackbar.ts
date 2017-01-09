import {Component} from '@angular/core';
import {IConfigSnackbar} from "../ml/components/snackbar/ml_snackbar";

@Component({
template: `

<h5>Snackbar</h5>

<ml-button (click)="snackbar.show()" aspect="raised, colored, accent">Open SnackBar</ml-button>

<ml-snackbar [config]="config" #snackbar></ml-snackbar>

`//template
})
export class PageSnackBar {

  config: IConfigSnackbar = {
    message: 'Message Sent', // required
    actionHandler: (event: any) => {
      console.log(event);
      window.alert('Action event logged to console');
    },
    actionText: 'Action',
    timeout: 5000
  };
}