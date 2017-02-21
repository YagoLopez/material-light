import {Component} from '@angular/core';

@Component({
template: `

<h5>ProgressBar</h5>
<p><ml-progressbar progress="50" #progress1 style="width:200px"></ml-progressbar></p>
<p>Progress value: {{progress1.progressValue}}%</p>
<p><ml-button aspect="raised" (click)="progress1.setProgress(20)">Progress = 20%</ml-button></p>
<p><ml-button aspect="raised" (click)="progress1.setProgress(80)">Progress = 80%</ml-button></p>

<hr>

<h5>ProgressBar and BufferBar</h5>
<p><ml-progressbar progress="20" buffer="80" #progress2 style="width:200px"></ml-progressbar></p>
<p>Progress value: {{progress2.progressValue}}%</p>
<p><ml-button aspect="raised" (click)="progress2.setProgress(10)">Progress = 10%</ml-button></p>
<p><ml-button aspect="raised" (click)="progress2.setProgress(30)">Progress = 30%</ml-button></p>
<p><ml-button aspect="raised" (click)="progress2.setBuffer(20)">Buffer = 20%</ml-button></p>
<p><ml-button aspect="raised" (click)="progress2.setBuffer(80)">Buffer = 80%</ml-button></p>

<hr>

<h5>ProgressBar Indeterminate</h5>
<p><ml-progressbar indeterminate style="width:200px"></ml-progressbar></p>

<br>
        
`//template
})
export class PagProgressar {}