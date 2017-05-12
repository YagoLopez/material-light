import {Component, ViewChild} from '@angular/core';

@Component({
template:`
<h5>Spinner</h5>

Multi-color: <ml-spinner #spinner1></ml-spinner>

<br><br>

Single color: <ml-spinner single-color></ml-spinner>

<br><br>

<p>SPINNER API:</p>
<p><ml-button #btn1 aspect="raised" (click)="clickBtn1()">Stop spinner 1</ml-button></p>
<p><ml-button aspect="raised" (click)="clickBtn2()">Start spinner 1</ml-button></p>

<view-source uri="spinner/pagSpinner.ts"></view-source>
<br>        
`//template
}) export class PagSpinner {

  @ViewChild('btn1') btn1;
  @ViewChild('spinner1') spinner1;

  clickBtn1(){
    this.spinner1.stop();
    this.btn1.disable()
  }

  clickBtn2(){
    this.spinner1.start();
    this.btn1.enable();
  }
}
