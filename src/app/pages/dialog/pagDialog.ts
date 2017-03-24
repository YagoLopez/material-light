
import {Component} from '@angular/core';

@Component({
template:`

<h5>Dialog</h5>

<p>
  <ml-button aspect="raised" ripple (click)="dialog1.open()">Open Dialog</ml-button>
</p>

<ml-dialog #dialog1>
  <ml-dialog-title>Title</ml-dialog-title>
  <ml-dialog-content>Content</ml-dialog-content>
  <ml-dialog-actions>
    <ml-button aspect="raised, colored, primary" (click)="dialog1.close()" ripple>Close</ml-button>
  </ml-dialog-actions>
</ml-dialog>

<view-source uri="dialog/pagDialog.ts"></view-source>
        
`//template
})
export class PagDialog {}
