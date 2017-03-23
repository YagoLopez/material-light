import {Component} from '@angular/core';
import {IConfigSnackbar} from "../../ml/components/snackbar/mlSnackbar";

@Component({
template: `

<h5>Snackbar</h5>

<ml-button (click)="snackbar.show()" aspect="raised, accent" ripple>Open Bottom SnackBar</ml-button>

<ml-snackbar [config]="config" #snackbar></ml-snackbar>

<view-source uri="snackbar/pagSnackbar.ts"></view-source>

`//template
})
export class PagSnackbar {

  config: IConfigSnackbar = {
    message: 'Showing snackbar', // required
    actionHandler: (event: any) => {
      console.log(event);
      window.alert('Action event logged to console');
    },
    actionText: 'Action',
    timeout: 5000
  };
}
