import {Component} from '@angular/core';

@Component({
template: `

<h5>Spinner</h5>

Multi-color:
<ml-spinner active #spinner1></ml-spinner>

<br><br>

Single color:
<ml-spinner active single-color></ml-spinner>

<br><br>

<p>SPINNER API:</p>
<p><ml-button aspect="raised" (click)="spinner1.stop()">Disable spinner 1</ml-button></p>
<p><ml-button aspect="raised" (click)="spinner1.start()">Enable spinner 1</ml-button></p>
        
`//template
})
export class PageSpinner {}