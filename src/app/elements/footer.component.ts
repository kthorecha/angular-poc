import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-elements-footer',
    template: `<style>
    footer{
        position: absolute;
        bottom: 0;
    }
    </style>
    <h1>Footer</h1>
    <h4>This is a footer component</h4>
    <footer><h2>This is a footer</h2></footer>`
})
export class FooterComponent implements OnInit {
    constructor() { }

    ngOnInit() {}
}