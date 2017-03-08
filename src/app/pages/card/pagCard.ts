import {Component} from '@angular/core';

@Component({
template: `

<style>
.ml-card {width: 100%; height: 300px}
.menu-btn {color: white}
</style>

<h5>Card</h5>

<ml-card shadow="3" img="assets/img/welcome_card.jpg" class="ml-card">
    <ml-card-title>Title</ml-card-title>
    <ml-card-text>Card text content</ml-card-text>
    <ml-card-actions>
        <ml-button aspect="colored" ripple>Card Action 1</ml-button>
    </ml-card-actions>
    <ml-card-menu>
        <ml-menu icon="share" position="top-right" class="menu-btn" ripple>
            <ml-menu-item ripple>item 1</ml-menu-item>
            <ml-menu-item ripple>item 2</ml-menu-item>
        </ml-menu>
    </ml-card-menu>
</ml-card>

`//template
})
export class PagCard {}