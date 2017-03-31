import {Component} from '@angular/core';

@Component({
template:`

<h5>Badge</h5>

<p><ml-badge value="4">Badge no overlap</ml-badge></p>

<p><ml-badge value="4" overlap>Badge overlap</ml-badge></p>

<p><ml-badge value="4" background="false">Badge no background</ml-badge></p>

<p>Icon Badge <ml-badge value="4" icon><ml-icon>account_box</ml-icon></ml-badge></p>

<view-source uri="badge/pagBadge.ts"></view-source>

`//template
})
export class PagBadge {}
