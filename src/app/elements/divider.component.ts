import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-elements-divider',
    template: `<style>
    hr{
        border: 2px solid;
    }
    </style>
    <h1>Divider</h1>
    <h4>This is a divider component</h4>
    <hr><p>Some sample Paragraph</p><hr>`
})
export class DividerComponent implements OnInit {
    constructor() { }

    ngOnInit() {}
}