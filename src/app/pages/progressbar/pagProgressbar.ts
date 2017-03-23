import {Component} from '@angular/core';

@Component({
template: `

<h5>ProgressBar</h5>
<p><ml-progressbar progress="50" #progress1 style="width:200px"></ml-progressbar></p>
<p>➔ Progress value: {{progress1.progressValue}}%</p>
<p><ml-button aspect="raised" (click)="progress1.setProgress(20)">Progress = 20%</ml-button></p>
<p><ml-button aspect="raised" (click)="progress1.setProgress(80)">Progress = 80%</ml-button></p>

<hr>

<h5>ProgressBar with BufferBar</h5>
<p><ml-progressbar progress="20" buffer="80" #progress2 style="width:200px"></ml-progressbar></p>
<p>
➔ Progress value: {{progress2.progressValue}}%<br>
➔ Buffer value: {{progress2.bufferValue}}%
</p>
<p><ml-button aspect="raised" (click)="progress2.setProgress(10)">Progress = 10%</ml-button></p>
<p><ml-button aspect="raised" (click)="progress2.setProgress(30)">Progress = 30%</ml-button></p>
<p><ml-button aspect="raised" (click)="progress2.setBuffer(50)">Buffer = 50%</ml-button></p>
<p><ml-button aspect="raised" (click)="progress2.setBuffer(90)">Buffer = 90%</ml-button></p>

<hr>

<h5>ProgressBar Indeterminate</h5>
<p><ml-progressbar indeterminate style="width:200px"></ml-progressbar></p>

<br>
        
<view-source uri="progressbar/pagProgressbar.ts"></view-source>        
`//template
})
export class PagProgressar {}
