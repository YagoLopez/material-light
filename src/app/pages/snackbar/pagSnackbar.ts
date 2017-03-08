import {Component} from '@angular/core';
import {IConfigSnackbar} from "../../ml/components/snackbar/mlSnackbar";

@Component({
template: `

<h5>Snackbar</h5>

<ml-button (click)="snackbar.show()" aspect="raised, colored, accent" ripple>Open SnackBar</ml-button>

<ml-snackbar [config]="config" #snackbar></ml-snackbar>

`//template
})
export class PagSnackbar {

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