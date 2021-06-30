import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-elements-header',
    template: `<style>
    header{
        position: relative;
        top: 0;
    }
    </style>
    <br><h1>Header</h1>
    <h4>This is a header component</h4>
    <header>This is header</header>`
})
export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() {}
}